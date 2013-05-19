//
//  CKChecklistAPIClient.m
//  Checklists
//
//  Created by Tim Shadel on 5/19/13.
//  Copyright (c) 2013 Shadel Software, Inc. All rights reserved.
//

#import "CKChecklistAPIClient.h"

static CKChecklistAPIClient *_sharedClient = nil;
static NSString * const kAFIncrementalStoreExampleAPIBaseURLString = @"http://localhost:5000";

@implementation CKChecklistAPIClient

+ (void)load
{
    _sharedClient = [[self alloc] initWithBaseURL:[NSURL URLWithString:kAFIncrementalStoreExampleAPIBaseURLString]];
}

+ (CKChecklistAPIClient *)sharedClient {
    return _sharedClient;
}

- (id)initWithBaseURL:(NSURL *)url {
    self = [super initWithBaseURL:url];
    if (!self) {
        return nil;
    }
    
    [self registerHTTPOperationClass:[AFJSONRequestOperation class]];
    [self setDefaultHeader:@"Accept" value:@"application/json"];
    
    NSOperationQueue * __block opQueue = self.operationQueue;
    [self setReachabilityStatusChangeBlock:^(AFNetworkReachabilityStatus status) {
        opQueue.suspended = (status == AFNetworkReachabilityStatusNotReachable);
        opQueue = nil;
    }];
    
    return self;
}

@end
