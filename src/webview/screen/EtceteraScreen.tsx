import React from 'react'
import { Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Item from './EtcScreens/Item'
import About from './EtcScreens/About'
import Guide from './EtcScreens/Guide'
import Timer from './EtcScreens/Timer'
import Mypage from './EtcScreens/Mypage'
import Privacy from './EtcScreens/Privacy'
import Question from './EtcScreens/Question'
import header_style from '../../config/header_style.json'
const Etcetera = StackNavigator(
  {
    Item: { screen: Item },
    About: { screen: About },
    Guide: { screen: Guide },
    Timer: { screen: Timer },
    Mypage: { screen: Mypage },
    Parivacy: { screen: Privacy },
    Question: { screen: Question }
  },
  {
    navigationOptions: {
      headerBackImage: (
        <Image source={require('../../images/header_btn_goback.png')} style={header_style.etc_header_btn} />
      ),
      headerTitle: <Image source={require('../../images/header_logo.png')} style={header_style.etc_header_logo} />
    }
  }
)
export default Etcetera
