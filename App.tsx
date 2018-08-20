import React from 'react'
import { Image } from 'react-native'
import { TabNavigator } from 'react-navigation'

import HomeScreen from './webview/screen/HomeScreen'
import BiyoriScreen from './webview/screen/BiyoriScreen'
import LineupScreen from './webview/screen/LineupScreen'
import VoiceScreen from './webview/screen/VoiceScreen'
import EtceteraScreen from './webview/screen/EtceteraScreen'

var ScreenNavigate = TabNavigator(
  {
    ホーム: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./webview/images/Homelogo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    商品ラインナップ: {
      screen: LineupScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./webview/images/Search.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    お客様の声: {
      screen: VoiceScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./webview/images/Voice.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    コラム: {
      screen: BiyoriScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./webview/images/Homelogo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    その他: {
      screen: EtceteraScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./webview/images/Homelogo.png')} style={{ tintColor: tintColor }} />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeBackgroundColor: 'white',
      activeTintColor: 'black',
      inactiveTintColor: '#D7DBDD',
      inactiveBackgroundColor: 'white',
      labelStyle: {
        fontSize: 16,
        padding: 10
      }
    }
  }
)

export default ScreenNavigate
