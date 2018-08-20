import React from 'react'
import { Image } from 'react-native'
import { TabNavigator } from 'react-navigation'

import HomeScreen from './src/webview/screen/HomeScreen'
import BiyoriScreen from './src/webview/screen/BiyoriScreen'
import LineupScreen from './src/webview/screen/LineupScreen'
import VoiceScreen from './src/webview/screen/VoiceScreen'
import EtceteraScreen from './src/webview/screen/EtceteraScreen'

var ScreenNavigate = TabNavigator(
  {
    ホーム: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/home_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    商品: {
      screen: LineupScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/search_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    お客様の声: {
      screen: VoiceScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/voice_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    はぐくみ日和: {
      screen: BiyoriScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/column_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    その他: {
      screen: EtceteraScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/etc_logo.png')} style={{ tintColor: tintColor }} />
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
        fontSize: 10,
        paddingLeft: 10,
        paddingRight: 10
      }
    }
  }
)

export default ScreenNavigate
