//
//  AppDelegate.swift
//  hugukumi_official
//
//  Created by Ryohlan on 2018/08/13.
//  Copyright © 2018年 Facebook. All rights reserved.
//

import Foundation
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    let jsCodeLocation: URL

    jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource:nil)
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "hugukumi_official", initialProperties: nil, launchOptions: launchOptions)
    let rootViewController = UIViewController()
    rootViewController.view = rootView

    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()

    return true
  }
  func application(_ application: UIApplication, didRegister notificationSettings: UIUserNotificationSettings) {
    RCTPushNotificationManager.didRegister(notificationSettings)
  }
  
  // Required for the register event.
  func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    RCTPushNotificationManager.didRegisterForRemoteNotifications(withDeviceToken: deviceToken)
  }
  
  // Required for the notification event. You must call the completion handler after handling the remote notification.
  func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    RCTPushNotificationManager.didReceiveRemoteNotification(userInfo, fetchCompletionHandler: completionHandler)
  }
  // Required for the registrationError event.
  
  func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    try? RCTPushNotificationManager.didFailToRegisterForRemoteNotificationsWithError(error)
  }
  
  // Required for the localNotification event.
  func application(_ application: UIApplication, didReceive notification: UILocalNotification) {
    RCTPushNotificationManager.didReceive(notification)
  }


}
