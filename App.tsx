import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './src/webview/screen/HomeScreen'
import BiyoriScreen from './src/webview/screen/BiyoriScreen'
import LineupScreen from './src/webview/screen/LineupScreen'
import VoiceScreen from './src/webview/screen/VoiceScreen'
import EtceteraScreen from './src/webview/screen/EtceteraScreen'

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)
const BiyoriStack = createStackNavigator(
  {
    Biyori: { screen: BiyoriScreen }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)
const LineupStack = createStackNavigator(
  {
    Lineup: { screen: LineupScreen }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)
const VoiceStack = createStackNavigator(
  {
    Lineup: { screen: VoiceScreen }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)
const EtceteraStack = createStackNavigator(
  {
    Lineup: { screen: EtceteraScreen }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

const ScreenNavigate = createBottomTabNavigator(
  {
    ホーム: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabele: 'ホーム',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/home_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    商品: {
      screen: LineupStack,
      navigationOptions: {
        tabBarLabele: '商品',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/search_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    お客様の声: {
      screen: VoiceStack,
      navigationOptions: {
        tabBarLabele: 'お客様の声',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/voice_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    はぐくみ日和: {
      screen: BiyoriStack,
      navigationOptions: {
        tabBarLabele: 'はぐくみ日和',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/column_logo.png')} style={{ tintColor: tintColor }} />
        )
      }
    },
    その他: {
      screen: EtceteraStack,
      navigationOptions: {
        tabBarLabele: 'その他',
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
