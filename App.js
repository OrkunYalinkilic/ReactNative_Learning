
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform, // hem android hem de ios için izin istemizi sağlar.
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { check, PERMISSIONS, checkMultiple } from 'react-native-permissions';

export default class App extends React.Component {

  componentDidMount() {

    const CameraPermission = Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA
    });

    const ReceiveSmsPermission = Platform.select({
      android: PERMISSIONS.ANDROID.RECEIVE_SMS,
      ios: PERMISSIONS.IOS.RECEIVE_SMS
    });

    checkMultiple([CameraPermission, ReceiveSmsPermission])
      .then((status) => {
        console.log('Camera', status[CameraPermission]);
        console.log('ReceiveSms', status[ReceiveSmsPermission]);
      })


    /*
    check(Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA
    }))
      .then((res) => { alert(res); })
      .catch((e) => alert(e))*/


  }

  render() {
    return <View></View>
  }

}
