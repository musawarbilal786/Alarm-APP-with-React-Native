package com.alarmproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AlarmProject";
  }

//   @Override
// protected void onCreate(Bundle savedInstanceState) {
//   super.onCreate(savedInstanceState);

//   ComponentName receiver = new ComponentName(this, BootReceiver.class);
//   PackageManager packageManager = this.getPackageManager();

//   packageManager.setComponentEnabledSetting(receiver,
//           PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
//           PackageManager.DONT_KILL_APP);
// }

// @Override
// protected ReactActivityDelegate createReactActivityDelegate() {
//   return new ReactActivityDelegate(this, getMainComponentName()){
//     @Nullable
//     @Override
//     protected Bundle getLaunchOptions() {
//       Intent intent = getIntent();
//       Bundle bundle = intent.getExtras();

//       if(intent.getBooleanExtra("notiRemovable", true))
//         AlarmModule.stop(this.getContext());

//       return bundle;
//     }
//   };
// }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }
}
