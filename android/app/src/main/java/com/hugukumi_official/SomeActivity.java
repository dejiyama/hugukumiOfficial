package com.hugukumi_official;
import io.repro.android.Repro;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;


public class SomeActivity extends Activity {

            @Override
            protected void onResume() {
                super.onResume();

                Intent intent = getIntent();
                Bundle extras = intent.getExtras();
                if (extras != null && extras.containsKey(io.repro.android.ReproReceiver.NOTIFICATION_ID_KEY)) {
                    Repro.trackNotificationOpened(extras.getString(io.repro.android.ReproReceiver.NOTIFICATION_ID_KEY));
                }
            }

            @Override
            protected void onNewIntent(Intent intent) {
                super.onNewIntent(intent);

                Bundle extras = intent.getExtras();
                if (extras != null && extras.containsKey(io.repro.android.ReproReceiver.NOTIFICATION_ID_KEY)) {
                    Repro.trackNotificationOpened(extras.getString(io.repro.android.ReproReceiver.NOTIFICATION_ID_KEY));
                }

                this.setIntent(intent);
            }

        }