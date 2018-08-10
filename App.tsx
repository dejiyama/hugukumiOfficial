import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './webview/screen/HomeScreen';
import BiyoriScreen from './webview/screen/BiyoriScreen';
import LineupScreen from './webview/screen/LineupScreen';
import VoiceScreen from './webview/screen/VoiceScreen';
import EtceteraScreen from './webview/screen/EtceteraScreen';

const HomeStack = StackNavigator ({
  Home:{ screen: HomeScreen }
},
{
  navigationOptions: {
  header:null,
}
});

const BiyoriStack = StackNavigator ({
  Biyori:{ screen: BiyoriScreen }
},
{
  navigationOptions: {
  header:null,
}
});

const LineupStack = StackNavigator({
  Lineup:{ screen: LineupScreen }
},
{
  navigationOptions: {
  header:null,
}
});

const VoiceStack = StackNavigator({
  Lineup:{ screen: VoiceScreen }
},
{
  navigationOptions: {
  header:null,
}
});

const EtceteraStack = StackNavigator({
  Lineup:{ screen: EtceteraScreen }
},
{
  navigationOptions: {
  header:null,

}
});

var ScreenNavigate = TabNavigator({
  "ホーム": {screen: HomeStack,
    navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./webview/images/Homelogo.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )},
  },
  "商品ラインナップ": {screen: LineupStack,
    navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./webview/images/Search.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )},
  },
  "お客様の声": {screen: VoiceStack,
    navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./webview/images/Voice.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )},
  },
  "コラム": {screen: BiyoriStack,
    navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./webview/images/Homelogo.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )},
  },
  "その他": {screen: EtceteraStack,
    navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./webview/images/Homelogo.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )},
  }
},{
  tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeBackgroundColor: 'white',
      activeTintColor: 'black',
      inactiveTintColor: '#D7DBDD',
      inactiveBackgroundColor: 'white',
      labeeStyle: {
        fontSize: 16,
        padding: 10
      },
    }
})

const styles = StyleSheet.create({
})

export default ScreenNavigate;
