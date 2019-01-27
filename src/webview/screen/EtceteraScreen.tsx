import React from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator, SafeAreaView } from 'react-navigation'
import Item from './EtcScreens/Item'
import About from './EtcScreens/About'
import Guide from './EtcScreens/Guide'
import Timer from './EtcScreens/Timer'
import CartScreen from './CartScreen'
import Mypage from './EtcScreens/Mypage'
import Question from './EtcScreens/Question'
import Privacy from './EtcScreens/Privacy'
import Etceteraheader from '../../elements/Etceteraheader'

const Etcetera = StackNavigator(
  {
    Item: { screen: Item },
    About: { screen: About },
    Guide: { screen: Guide },
    Privacy: { screen: Privacy },
    Timer: { screen: Timer },
    Mypage: { screen: Mypage },
    Question: { screen: Question },
    Cart: { screen: CartScreen }
  },
  {
    navigationOptions: ({ navigation }: any) => {
      return {
        header: (
          <SafeAreaView style={styles.safeArea}>
            <Etceteraheader
              onClickCart={() => navigation.navigate('Cart')}
              onClickBackpage={() => navigation.goBack()}
              showBackbutton={navigation.state.routeName !== 'Item'}
            />
          </SafeAreaView>
        )
      }
    }
  }
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  }
})

export default Etcetera
