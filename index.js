/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import React from 'react'
import configureStore from './store';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { Platform } from 'react-native';
const store = configureStore();

PushNotification.configure({
    onRegister: function (token) {
      //console.log("TOKEN:", token);
    },

    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
  
      // process the action
    },

    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
  
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios'
  });
  

const RNRedux = () => {
    return(
    <Provider store={store}>
        <App />
    </Provider>
    );
}

AppRegistry.registerComponent(appName, () => RNRedux);
