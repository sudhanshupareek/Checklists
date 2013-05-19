//
//  CKURLCache.m
//
//  Created by Tim Shadel on 5/18/13.
//
//

#import "CKURLCache.h"

static CKURLCache *autoloadedSingletonController;

@interface CKURLCache ()
@property (nonatomic, strong) NSString *urlCachePath;
@end

@implementation CKURLCache


+ (void)load {
    autoloadedSingletonController = [CKURLCache new];
}


- (id)init
{
    self = [super init];
    if (self != nil) {
        // Finish Launching
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(configureURLCacheOnLaunch:)
                                                     name:UIApplicationDidFinishLaunchingNotification
                                                   object:[UIApplication sharedApplication]];
    }
    return self;
}

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)configureURLCacheOnLaunch:(NSNotification *)launchNotification
{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES);
    self.urlCachePath = [(NSString *)[paths objectAtIndex:0] stringByAppendingPathComponent: @"URLCache"];
    NSURLCache *URLCache = [[NSURLCache alloc] initWithMemoryCapacity:4 * 1024 * 1024
                                                         diskCapacity:20 * 1024 * 1024
                                                             diskPath:self.urlCachePath];
    [NSURLCache setSharedURLCache:URLCache];
}

@end