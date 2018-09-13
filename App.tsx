import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from './src/webview/screen/HomeScreen'
import BiyoriScreen from './src/webview/screen/BiyoriScreen'
import LineupScreen from './src/webview/screen/LineupScreen'
import VoiceScreen from './src/webview/screen/VoiceScreen'
import EtceteraScreen from './src/webview/screen/EtceteraScreen'
import Color from './src/config/color.json'
import Biyoriheader from './src/elements/Biyoriheader'
const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen }
})

const LineupStack = createStackNavigator({
  Lineup: { screen: LineupScreen }
})

const VoiceStack = createStackNavigator({
  Voice: { screen: VoiceScreen }
})

const BiyoriStack = createStackNavigator({
  Biyori: {
    screen: BiyoriScreen,
    navigationOptions: ({ navigation }: any) => {
      return {
        header: <Biyoriheader onClickBack={navigation.getParam('onClickBack')} />
      }
    }
  }
})

const EtceteraStack = createStackNavigator({
  Etcetera: {
    screen: EtceteraScreen,
    navigationOptions: {
      header: null
    }
  }
})

const ScreenNavigate = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'ホーム',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/home_logo.png')} style={{ tintColor }} />
        )
      }
    },
    Lineup: {
      screen: LineupStack,
      navigationOptions: {
        title: '商品',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/search_logo.png')} style={{ tintColor }} />
        )
      }
    },
    Voice: {
      screen: VoiceStack,
      navigationOptions: {
        title: 'お客様の声',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/voice_logo.png')} style={{ tintColor }} />
        )
      }
    },
    Biyori: {
      screen: BiyoriStack,
      navigationOptions: {
        title: 'はぐくみ日和',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/column_logo.png')} style={{ tintColor }} />
        )
      }
    },
    Etcetera: {
      screen: EtceteraStack,
      navigationOptions: {
        title: 'その他',
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={require('./src/images/etc_logo.png')} style={{ tintColor }} />
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
