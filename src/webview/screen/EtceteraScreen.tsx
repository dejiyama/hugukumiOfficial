import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Item from './EtcScreens/Item'
import About from './EtcScreens/About'
import Guide from './EtcScreens/Guide'
import Timer from './EtcScreens/Timer'
import CartScreen from './CartScreen'
import Mypage from './EtcScreens/Mypage'
import Privacy from './EtcScreens/Privacy'
import Question from './EtcScreens/Question'
import Etceteraheader from '../../elements/Etceteraheader'
import header_style from '../../config/header_style.json'
const Etcetera = StackNavigator(
  {
    Item: { screen: Item },
    About: { screen: About },
    Guide: { screen: Guide },
    Timer: { screen: Timer },
    Mypage: { screen: Mypage },
    Parivacy: { screen: Privacy },
    Question: { screen: Question },
    Cart: { screen: CartScreen }
  },
  {
    navigationOptions: ({ navigation }: any) => {
      return {
        headerBackImage: (
          <View style={{ paddingLeft: 15 }}>
            <Image source={require('../../images/header_btn_goback.png')} style={{ width: 26, height: 26 }} />
          </View>
        ),
        headerTitle: <Image source={require('../../images/header_logo.png')} style={header_style.header_logo} />,
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ paddingRight: 15 }}>
            <Image source={require('../../images/header_btn_cart.png')} style={header_style.header_btn_cart} />
          </TouchableOpacity>
        )
      }
    }
  }
)
export default Etcetera
