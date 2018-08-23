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
    Hagumai: {
      screen: HagumaiScreen,
      navigationOptions: {
        tabBarLabel: 'はぐまい'
      }
    },
    Ninshin: {
      screen: NinshinScreen,
      navigationOptions: {
        tabBarLabel: '妊娠・出産'
      }
    },
    Ninkatsu: {
      screen: NinkatsuScreen,
      navigationOptions: {
        tabBarLabel: '妊活'
      }
    },
    Kosodate: {
      screen: KosodateScreen,
      navigationOptions: {
        tabBarLabel: '子育て'
      }
    },
    Hapisapo: {
      screen: HapisapoScreen,
      navigationOptions: {
        tabBarLabel: 'はぴサポ'
      }
    },
    Hensyushitu: {
      screen: HensyushituScreen,
      navigationOptions: {
        tabBarLabel: '編集室'
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Color.tabBarOptions.active,
      inactiveTintColor: Color.tabBarOptions.inactive,
      indicatorStyle: {
        backgroundColor: Color.indicatorStyle.backgroundColor
      },
      style: {
        backgroundColor: Color.style.backgroundColor
      },
      labelStyle: Value.position
    }
  }
)

export default Biyori
