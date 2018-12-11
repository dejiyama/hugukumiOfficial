package com.hugukumi_official;

import android.annotation.TargetApi;
import android.app.Notification;
import io.repro.android.Repro;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.util.Log;
import com.google.firebase.messaging.FirebaseMessagingService;

import com.google.firebase.messaging.RemoteMessage;

import java.util.Map;
import java.util.Random;

 public class MyFirebaseMessagingService extends FirebaseMessagingService {

    private static final String TAG = "MessagingService";
    private static final String CHANNEL_ID = "custom-firebase-messaging-service-channel";

    private final Random mRandom = new Random();

     @Override
     public void onNewToken(String token) {
         Repro.setPushRegistrationID(token);
     }

     @Override
     public void onMessageReceived(RemoteMessage message) {
         final int identifier = mRandom.nextInt();
         Map<String, String> data = message.getData();

         // check whether the application should handle this push notification.
         if (!Repro.applicationShouldHandlePushNotification(this, data)) {
             Log.d(TAG, "Ignore push notification: it will be handled by SDK: " + data.toString());
             return;
         }

         // check whether this push notification is already received.
         if (Repro.isAlreadyReceivedPushNotification(this, data)) {
             Log.d(TAG, "Ignore push notification: it is already received: " + data.toString());
             return;
         }

         // mark this push notification as "received".
         Log.d(TAG, "Mark push notification as received: " + data.toString());
         Repro.markPushNotificationReceived(this, data);

         String messageText;
         if (data.containsKey("message")) {
             messageText = data.get("message");
         } else {
             messageText = "default message";
         }

         final Notification.Builder builder = new Notification.Builder(this)
                 .setContentTitle(this.getResources().getString(R.string.app_name))
                 .setContentText(messageText)
                 .setSmallIcon(R.mipmap.ic_launcher_round)
                 .setAutoCancel(true);

         if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
             createOrUpdateChannel();
             builder.setChannelId(CHANNEL_ID);
         }

         Intent resultIntent = new Intent(this, SomeActivity.class);

         String notificationIdKey = data.get(io.repro.android.ReproReceiver.NOTIFICATION_ID_KEY);
         if (notificationIdKey != null) {
             resultIntent.putExtra(io.repro.android.ReproReceiver.NOTIFICATION_ID_KEY, notificationIdKey);
         }

         PendingIntent resultPendingIntent = PendingIntent.getActivity(this, identifier, resultIntent, PendingIntent.FLAG_CANCEL_CURRENT);
         builder.setContentIntent(resultPendingIntent);

         final NotificationManager notificationManager = (NotificationManager)this.getSystemService(Context.NOTIFICATION_SERVICE);
         notificationManager.notify(identifier, builder.getNotification());
         }
         @TargetApi(Build.VERSION_CODES.O)
         private void createOrUpdateChannel() {
             NotificationChannel newChannel = new NotificationChannel(CHANNEL_ID, "Custom Channel", NotificationManager.IMPORTANCE_DEFAULT);
             newChannel.setDescription("");
             newChannel.setShowBadge(true);

            // create or update the Notification channel
            final NotificationManager notificationManager = (NotificationManager)this.getSystemService(Context.NOTIFICATION_SERVICE);
            notificationManager.createNotificationChannel(newChannel);
        }
    }


        