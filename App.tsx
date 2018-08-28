import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from './src/webview/screen/HomeScreen'
import BiyoriScreen from './src/webview/screen/BiyoriScreen'
import LineupScreen from './src/webview/screen/LineupScreen'
import VoiceScreen from './src/webview/screen/VoiceScreen'
import EtceteraScreen from './src/webview/screen/EtceteraScreen'
import Color from './src/config/color.json'
import Homeheader from './src/elements/Homeheader'
import Biyoriheader from './src/elements/Biyoriheader'
import Etceteraheader from './src/elements/Etceteraheader'
import Lineupheader from './src/elements/Lineupheader'
import Voiceheader from './src/elements/Voiceheader'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }: any) => {
      return {
        header: <Homeheader onClickBack={navigation.getParam('onClickBack')} />
      }
    }
  }
})

const LineupStack = createStackNavigator({
  Lineup: {
    screen: LineupScreen,
    navigationOptions: {
      header: <Lineupheader />
    }
  }
})

const VoiceStack = createStackNavigator({
  Voice: {
    screen: VoiceScreen,
    navigationOptions: {
      header: <Voiceheader />
    }
  }
})

const BiyoriStack = createStackNavigator({
  Biyori: {
    screen: BiyoriScreen,
    navigationOptions: {
      header: <Biyoriheader />
    }
  }
})

const EtceteraStack = createStackNavigator({
  Etcetera: {
    screen: EtceteraScreen,
    navigationOptions: {
      header: <Etceteraheader />
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
