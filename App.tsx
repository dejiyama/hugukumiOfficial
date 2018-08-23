import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './src/webview/screen/HomeScreen'
import BiyoriScreen from './src/webview/screen/BiyoriScreen'
import LineupScreen from './src/webview/screen/LineupScreen'
import VoiceScreen from './src/webview/screen/VoiceScreen'
import EtceteraScreen from './src/webview/screen/EtceteraScreen'

const Color = require('./src/config/color.json')

const ScreenNavigate = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'ホーム',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/home_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    Lineup: {
      screen: LineupScreen,
      navigationOptions: {
        title: '商品',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/search_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    Voice: {
      screen: VoiceScreen,
      navigationOptions: {
        title: 'お客様の声',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/voice_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    Biyori: {
      screen: BiyoriScreen,
      navigationOptions: {
        title: 'はぐくみ日和',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/column_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    Etcetera: {
      screen: EtceteraScreen,
      navigationOptions: {
        title: 'その他',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/etc_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeBackgroundColor: Color.tabBarOptions.activeBackground,
      activeTintColor: Color.tabBarOptions.active,
      inactiveTintColor: Color.tabBarOptions.inactive,
      inactiveBackgroundColor: Color.tabBarOptions.inactiveBackground,
      labelStyle: {
        fontSize: 10,
        paddingLeft: 10,
        paddingRight: 10
      }
    }
  }
)

export default ScreenNavigate
