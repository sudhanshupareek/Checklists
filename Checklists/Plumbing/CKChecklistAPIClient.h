//
//  CKChecklistAPIClient.h
//  Checklists
//
//  Created by Tim Shadel on 5/19/13.
//  Copyright (c) 2013 Shadel Software, Inc. All rights reserved.
//

#import "AFRESTClient.h"
#import "AFIncrementalStore.h"

@interface CKChecklistAPIClient : AFRESTClient <AFIncrementalStoreHTTPClient>

+ (CKChecklistAPIClient *)sharedClient;

@end
