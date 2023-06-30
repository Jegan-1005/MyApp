//import package
import React, {Fragment, useEffect} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';

//import utils
import {Colors} from '../../utils/colors';
import {Images} from '../../utils/images';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Onboarding');
    }, 200);
  }, []);

  return (
    <Fragment>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.black,
        }}>
        <Images.logo />
      </View>
    </Fragment>
  );
};

export default Splash;

// {
//     "name": "millionero",
//     "version": "0.0.1",
//     "private": true,
//     "scripts": {
//       "android": "react-native run-android",
//       "ios": "react-native run-ios",
//       "start": "react-native start",
//       "test": "jest",
//       "lint": "eslint ."
//     },
//     "dependencies": {
//       "@haskkor/react-native-recaptchav3": "^1.2.1",
//       "@ptomasroos/react-native-multi-slider": "^2.2.2",
//       "@react-native-async-storage/async-storage": "^1.18.1",
//       "@react-native-community/checkbox": "^0.5.12",
//       "@react-native-community/clipboard": "^1.5.1",
//       "@react-native-community/netinfo": "9.3.9",
//       "@react-navigation/bottom-tabs": "^6.3.2",
//       "@react-navigation/material-top-tabs": "^6.2.2",
//       "@react-navigation/native": "^6.0.11",
//       "@react-navigation/native-stack": "^6.7.0",
//       "@react-navigation/stack": "^6.2.2",
//       "@sumsub/react-native-mobilesdk-module": "1.23.0",
//       "@twotalltotems/react-native-otp-input": "^1.3.11",
//       "axios": "^1.3.5",
//       "detect-browser": "^5.3.0",
//       "i18next": "^22.4.14",
//       "jwt-decode": "^3.1.2",
//       "link": "^1.5.1",
//       "lodash": "^4.17.21",
//       "moment": "^2.29.4",
//       "react": "18.0.0",
//       "react-i18next": "^12.2.0",
//       "react-native": "^0.69.3",
//       "react-native-chart-kit": "^6.12.0",
//       "react-native-charts-wrapper": "^0.5.10",
//       "react-native-countdown-circle-timer": "^3.2.1",
//       "react-native-country-picker-modal": "^2.0.0",
//       "react-native-crypto-js": "^1.0.0",
//       "react-native-device-info": "^10.6.0",
//       "react-native-document-picker": "^8.2.0",
//       "react-native-dotenv": "^3.4.8",
//       "react-native-encrypted-storage": "^4.0.3",
//       "react-native-event-listeners": "^1.0.7",
//       "react-native-exit-app": "^1.1.0",
//       "react-native-gesture-handler": "2.7.1",
//       "react-native-linear-gradient": "^2.6.2",
//       "react-native-localize": "^2.2.6",
//       "react-native-material-menu": "^2.0.0",
//       "react-native-material-ripple": "^0.9.1",
//       "react-native-modal": "^13.0.1",
//       "react-native-pager-view": "^5.4.25",
//       "react-native-paper": "^5.7.2",
//       "react-native-phone-number-input": "^2.1.0",
//       "react-native-qrcode-svg": "^6.2.0",
//       "react-native-raw-bottom-sheet": "^2.2.0",
//       "react-native-reanimated": "^2.9.1",
//       "react-native-responsive-fontsize": "^0.5.1",
//       "react-native-safe-area-context": "^4.3.1",
//       "react-native-screens": "^3.15.0",
//       "react-native-shadow": "^1.2.2",
//       "react-native-simple-radio-button": "^2.7.4",
//       "react-native-svg": "^12.4.3",
//       "react-native-tab-view": "^3.1.1",
//       "react-native-text-ticker": "^1.14.0",
//       "react-native-webview": "^12.0.2",
//       "react-redux": "^8.0.5",
//       "redux": "^4.2.1",
//       "redux-thunk": "^2.4.2",
//       "socket.io-client": "^4.1.2",
//       "victory-native": "^36.6.8"
//     },
//     "devDependencies": {
//       "@babel/core": "^7.12.9",
//       "@babel/runtime": "^7.12.5",
//       "@react-native-community/eslint-config": "^2.0.0",
//       "babel-jest": "^26.6.3",
//       "eslint": "^7.32.0",
//       "jest": "^26.6.3",
//       "metro-react-native-babel-preset": "^0.70.3",
//       "react-test-renderer": "18.0.0"
//     },
//     "jest": {
//       "preset": "react-native"
//     }
//   }
