
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

import { check, PERMISSIONS, checkMultiple, request, requestMultiple } from 'react-native-permissions';

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

    requestMultiple([CameraPermission, ReceiveSmsPermission]).then((status) => {
      alert('Kamera', status[CameraPermission]); // Daha önce bunun izni alındığı için bir daha bunun için izin istemez.
      alert('SMS', status[ReceiveSmsPermission]);
    })

    /* request(CameraPermission).then((result) => {
       alert(result);
     })*/

    /* Check
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

      */

  }

  render() {
    return <View></View>
  }

}
