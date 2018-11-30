package com.hugukumi_official;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.repro.android.reactbridge.ReproReactBridgePackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.repro.android.Repro;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReproReactBridgePackage(),
            new ReactNativePushNotificationPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();

    Repro.setup(this, "5bf0b937-4112-4970-88c0-09b64806f02c");
    SoLoader.init(this, /* native exopackage */ false);
    Repro.enablePushNotification("AAAAEmiKfjk:APA91bHNbtM5JcL2mCi4lbyUoDzJoW8juKTNeHYDNEfIt_PVMOZLXtrFJaG2fpNeREnDTt31hdSGbkH0lRUYQ3XKxDKp5IpkL5KvuQ_w8qKRk0y_AqEGbIwfnGVVkUyfwXL4GoBYImhI");
  }
}
