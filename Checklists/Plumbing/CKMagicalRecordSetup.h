//
//  CKMagicalRecordSetup.h
//  Checklists
//
//  Created by Tim Shadel on 5/19/13.
//  Copyright (c) 2013 Shadel Software, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CKMagicalRecordSetup : NSObject

+ (CKMagicalRecordSetup *)sharedSetup;

- (void)setupCoreDataStack;

@end
