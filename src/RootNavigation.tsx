import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from './webview/screen/HomeScreen'
import BiyoriScreen from './webview/screen/BiyoriScreen'
import LineupScreen from './webview/screen/LineupScreen'
import VoiceScreen from './webview/screen/VoiceScreen'
import EtceteraScreen from './webview/screen/EtceteraScreen'
import CartScreen from './webview/screen/CartScreen'
import Color from './config/color.json'
import Biyoriheader from './elements/Biyoriheader'

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Cart: { screen: CartScreen }
})

const LineupStack = createStackNavigator({
  Lineup: { screen: LineupScreen },
  Cart: { screen: CartScreen }
})

const VoiceStack = createStackNavigator({
  Voice: { screen: VoiceScreen },
  Cart: { screen: CartScreen }
})

const BiyoriStack = createStackNavigator({
  Biyori: {
    screen: BiyoriScreen,
    navigationOptions: ({ navigation }: any) => {
      return {
        header: (
          <Biyoriheader
            onClickCart={() => navigation.navigate('Cart')}
            onClickBack={navigation.getParam('onClickBack')}
            showBackbutton={navigation.getParam('backButtonEnabled')}
          />
        )
      }
    }
  },
  Cart: {
    screen: CartScreen
  }
})

const EtceteraStack = createStackNavigator({
  Etcetera: {
    screen: EtceteraScreen,
    navigationOptions: {
      header: null
    }
  },
  Cart: {
    screen: CartScreen
  }
})

const RouteNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'ホーム',
        tabBarIcon: ({ tintColor }: any) => <Image source={require('./images/home_logo.png')} style={{ tintColor }} />
      }
    },
    Lineup: {
      screen: LineupStack,
      navigationOptions: {
        title: '商品',
        tabBarIcon: ({ tintColor }: any) => <Image source={require('./images/search_logo.png')} style={{ tintColor }} />
      }
    },
    Voice: {
      screen: VoiceStack,
      navigationOptions: {
        title: 'お客様の声',
        tabBarIcon: ({ tintColor }: any) => <Image source={require('./images/voice_logo.png')} style={{ tintColor }} />
      }
    },
    Biyori: {
      screen: BiyoriStack,
      navigationOptions: {
        title: 'はぐくみ日和',
        tabBarIcon: ({ tintColor }: any) => <Image source={require('./images/column_logo.png')} style={{ tintColor }} />
      }
    },
    Etcetera: {
      screen: EtceteraStack,
      navigationOptions: {
        title: 'その他',
        tabBarIcon: ({ tintColor }: any) => <Image source={require('./images/etc_logo.png')} style={{ tintColor }} />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: '#ffff'
      },
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

export default RouteNavigation
