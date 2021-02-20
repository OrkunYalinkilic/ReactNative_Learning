
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

import { check, PERMISSIONS, checkMultiple, request, requestMultiple, openSettings, checkNotifications, requestNotifications } from 'react-native-permissions';

export default class App extends React.Component {

  componentDidMount() {

    // UNAVAILABLE => CİHAZDA MEVCUT DEĞİL
    // DENIED => İZİN İSTENMEDİ / REDDEDİLDİ
    // GRANTED => İZİN VERİLDİ
    // BLOCKED => İZİN REDDEDİLDİ ARTIK TALEP EDİLEMEZ

    requestNotifications(['alert', 'sound']).then(({ status, settings }) => {
      console.log(status, settings);
    });

    checkNotifications().then(({ status, settings }) => {
      console.log(status, settings);
    });

  }

  render() {
    return <View></View>
  }

}
