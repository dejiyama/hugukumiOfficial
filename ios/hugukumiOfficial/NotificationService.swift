//
//  NotificationService.swift
//  hugukumiOfficial
//
//  Created by 出島大和 on 2018/11/16.
//  Copyright © 2018年 Facebook. All rights reserved.
//

import UserNotifications

class NotificationService: UNNotificationServiceExtension {

    var contentHandler: ((UNNotificationContent) -> Void)?
    var bestAttemptContent: UNMutableNotificationContent?

    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
        self.contentHandler = contentHandler
        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)
      
      if let attachment = request.content.userInfo["rpr_attachment"] as? [String: String] {
        if let urlString = attachment["url"], let fileURL = URL(string: urlString), let type = attachment["type"] {
          
          URLSession.shared.downloadTask(with: fileURL) { (location, response, error) in
            if let location = location {
              let fileName = UUID().uuidString + "." + type
              let tmpFile = "file://".appending(NSTemporaryDirectory()).appending(fileName)
              let tmpUrl = URL(string: tmpFile)!
              try? FileManager.default.moveItem(at: location, to: tmpUrl)
              
              if let attachment = try? UNNotificationAttachment(identifier: "IDENTIFIER", url: tmpUrl, options: nil) {
                self.bestAttemptContent?.attachments = [attachment]
              }
            }
            contentHandler(self.bestAttemptContent!)
            }.resume()
        }
      } else {
        contentHandler(self.bestAttemptContent!)
      }
        
        if let bestAttemptContent = bestAttemptContent {
            // Modify the notification content here...
            bestAttemptContent.title = "\(bestAttemptContent.title) [modified]"
            
            contentHandler(bestAttemptContent)
        }
    }
    
    override func serviceExtensionTimeWillExpire() {
        // Called just before the extension will be terminated by the system.
        // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
        if let contentHandler = contentHandler, let bestAttemptContent =  bestAttemptContent {
            contentHandler(bestAttemptContent)
        }
    }

}
