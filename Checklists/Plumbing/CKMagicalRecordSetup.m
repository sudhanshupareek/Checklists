//
//  CKMagicalRecordSetup.m
//  Checklists
//
//  Created by Tim Shadel on 5/19/13.
//  Copyright (c) 2013 Shadel Software, Inc. All rights reserved.
//

#import "CKMagicalRecordSetup.h"
#import "CKChecklistIncrementalStore.h"


@implementation CKMagicalRecordSetup

- (void)setupCoreDataStackWithStoreNamed:(NSString *)storeName {

    NSManagedObjectModel *model = [NSManagedObjectModel MR_defaultManagedObjectModel];
    NSPersistentStoreCoordinator *psc = [[NSPersistentStoreCoordinator alloc] initWithManagedObjectModel:model];
    
    AFIncrementalStore *incrementalStore = (AFIncrementalStore *)[psc addPersistentStoreWithType:[CKChecklistIncrementalStore type] configuration:nil URL:nil options:nil error:nil];
    
    NSDictionary *options = @{
                              NSInferMappingModelAutomaticallyOption : @(YES),
                              NSMigratePersistentStoresAutomaticallyOption: @(YES)
                              };
    
    [incrementalStore.backingPersistentStoreCoordinator MR_addSqliteStoreNamed:storeName withOptions:options];
    
    [NSPersistentStore setDefaultPersistentStore:incrementalStore];
    [NSPersistentStoreCoordinator MR_setDefaultStoreCoordinator:incrementalStore.persistentStoreCoordinator];
    [NSManagedObjectContext MR_initializeDefaultContextWithCoordinator:incrementalStore.persistentStoreCoordinator];
    
    // Totally needed to reset MR-MOCs after AFIS
    [[NSNotificationCenter defaultCenter] addObserverForName:NSManagedObjectContextDidSaveNotification
                                                      object:nil
                                                       queue:[NSOperationQueue mainQueue]
                                                  usingBlock:^(NSNotification *note) {
                                                      NSManagedObjectContext *moc0 = [note object];
                                                      NSManagedObjectContext *moc = [NSManagedObjectContext MR_rootSavingContext];
                                                      NSManagedObjectContext *moc2 = [NSManagedObjectContext MR_defaultContext];
                                                      
                                                      
                                                      if ((![moc0 isEqual:moc]) && (![moc0 isEqual:moc2]) && [moc0 persistentStoreCoordinator] == [moc persistentStoreCoordinator]) {
                                                          [moc reset];
                                                          [moc2 reset];
                                                      }
                                                  }];
}

@end
