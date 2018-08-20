import { StackNavigator } from 'react-navigation'
import Item from '../src/Item'
import About from '../src/About'
import Guide from '../src/Guide'
import Mypage from '../src/Mypage'
import Privacy from '../src/Privacy'
import Question from '../src/Question'

const Etcetera = StackNavigator({
  Item: { screen: Item },
  About: { screen: About },
  Guide: { screen: Guide },
  Mypage: { screen: Mypage },
  Parivacy: { screen: Privacy },
  Question: { screen: Question }
})
export default Etcetera
