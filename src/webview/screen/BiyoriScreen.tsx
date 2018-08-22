import { createMaterialTopTabNavigator } from 'react-navigation'
import HagumaiScreen from './BiyoriScreens/HagumaiScreen'
import NinshinScreen from './BiyoriScreens/NinshinScreen'
import NinkatsuScreen from './BiyoriScreens/NinkatsuScreen'
import KosodateScreen from './BiyoriScreens/KosodateScreen'
import HapisapoScreen from './BiyoriScreens/HapisapoScreen'
import HensyushituScreen from './BiyoriScreens/HensyushituScreen'

const Value = require('../../config/value.json')

const Color = require('../../config/color.json')

const Biyori = createMaterialTopTabNavigator(
  {
    はぐまい: { screen: HagumaiScreen },
    '妊娠・出産': { screen: NinshinScreen },
    妊活: { screen: NinkatsuScreen },
    子育て: { screen: KosodateScreen },
    はぴサポ: { screen: HapisapoScreen },
    編集室: { screen: HensyushituScreen }
  },
  {
    tabBarOptions: {
      activeTintColor: Color.activeTintColor,
      inactiveTintColor: '#D7DBDD',
      indicatorStyle: {
        backgroundColor: 'black'
      },
      style: {
        backgroundColor: '#F8F9F9'
      },
      labelStyle: Value.position
    }
  }
)

export default Biyori
