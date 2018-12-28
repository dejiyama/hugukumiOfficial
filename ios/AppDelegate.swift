//
//  AppDelegate.swift
//  hugukumi_official
//
//  Created by Ryohlan on 2018/08/13.
//  Copyright © 2018年 Facebook. All rights reserved.
//
import UserNotifications
import Foundation
import UIKit
import Repro

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
  var identifierForVendor: UUID?
  let deviceID = Repro.getDeviceID()

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    
    if #available (iOS 10.0, *) {
      let center = UNUserNotificationCenter.current()
      UNUserNotificationCenter.current().delegate = self as? UNUserNotificationCenterDelegate
      center.requestAuthorization(options: [.sound, .alert, .badge], completionHandler: { (granted, error) in
      })
      application.registerForRemoteNotifications()
    } else {
      let settings: UIUserNotificationSettings = UIUserNotificationSettings(types: [.alert, .badge, .sound], categories: nil)
      UIApplication.shared.registerUserNotificationSettings(settings)
      UIApplication.shared.registerForRemoteNotifications()
    }
    
    let jsCodeLocation: URL

    jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource:nil)
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "hugukumi_official", initialProperties: nil, launchOptions: launchOptions)
    let rootViewController = UIViewController()
    rootViewController.view = rootView

    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()
    
    // setup repro
    Repro.setup("5bf0b937-4112-4970-88c0-09b64806f02c")
    
    Repro.setLogLevel(RPRLogLevel.debug)
    
    Repro.setUserID("hugukumiplus")
    
    print("deviceID: \(String(describing: deviceID))")

    return true
  }
  func application(_ application: UIApplication, didRegister notificationSettings: UIUserNotificationSettings) {
    RCTPushNotificationManager.didRegister(notificationSettings)
  }
  
  // Required for the register event.
  func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    RCTPushNotificationManager.didRegisterForRemoteNotifications(withDeviceToken: deviceToken)
    Repro.setPushDeviceToken(deviceToken)
  }
  
  // Required for the notification event. You must call the completion handler after handling the remote notification.
  func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    RCTPushNotificationManager.didReceiveRemoteNotification(userInfo, fetchCompletionHandler: completionHandler)
  }
  // Required for the registrationError event.
  
  func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    RCTPushNotificationManager.didFailToRegisterForRemoteNotificationsWithError(error)
    print("Remote Notification Error: \(error)")
    
  }
  
  // Required for the localNotification event.
  func application(_ application: UIApplication, didReceive notification: UILocalNotification) {
    RCTPushNotificationManager.didReceive(notification)
  }
  
  func applicationDidBecomeActive(_ application: UIApplication) {
      application.applicationIconBadgeNumber = 0
  }

}
