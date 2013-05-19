//
//  CKMasterViewController.h
//  Checklists
//
//  Created by Tim Shadel on 5/19/13.
//  Copyright (c) 2013 Shadel Software, Inc. All rights reserved.
//

#import <UIKit/UIKit.h>

@class CKDetailViewController;

@interface CKMasterViewController : UITableViewController

@property (strong, nonatomic) CKDetailViewController *detailViewController;

@end
