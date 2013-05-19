//
//  CKSampleSpec.m
//  Checklists
//
//  Created by Tim Shadel on 5/19/13.
//  Copyright (c) 2013 Shadel Software, Inc. All rights reserved.
//

#import "Kiwi.h"

SPEC_BEGIN(MathSpec)

describe(@"Math", ^{
    it(@"is pretty cool", ^{
        NSUInteger a = 16;
        NSUInteger b = 26;
        [[theValue(a + b) should] equal:theValue(42)];
    });
});

SPEC_END
