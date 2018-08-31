package com.hugukumi_official;

import com.facebook.react.ReactActivity;
import android.os.Bundle;



public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "hugukumi_official";
    }

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // ここで1秒間スリープし、スプラッシュを表示させたままにする。
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//        }
        // スプラッシュthemeを通常themeに変更する
        setTheme(R.style.AppTheme);
        setContentView(R.layout.activity_main);
    }
}
