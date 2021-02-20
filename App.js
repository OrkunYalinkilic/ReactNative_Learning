
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

import { check, PERMISSIONS, checkMultiple, request, requestMultiple, openSettings } from 'react-native-permissions';

export default class App extends React.Component {

  componentDidMount() {

    // UNAVAILABLE => CİHAZDA MEVCUT DEĞİL
    // DENIED => İZİN İSTENMEDİ / REDDEDİLDİ
    // GRANTED => İZİN VERİLDİ
    // BLOCKED => İZİN REDDEDİLDİ ARTIK TALEP EDİLEMEZ

    const CameraPermission = Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA
    });

    request(CameraPermission).then((result) => {
      alert(result);
    })

    check(Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA
    }))
      .then((res) => {
        if (res == 'blocked') {
          openSettings().catch((e) => alert(e)); // ilgili ayarları açar sorun varsa hatayı loglar.
        }
      })
      .catch((e) => console.log(e));

  }

  render() {
    return <View></View>
  }

}
