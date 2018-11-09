import { createMaterialTopTabNavigator } from 'react-navigation'
import HagumaiScreen from '../screen/BiyoriScreens/HagumaiScreen'
import NinshinScreen from '../screen/BiyoriScreens/NinshinScreen'
import NinkatsuScreen from '../screen/BiyoriScreens/NinkatsuScreen'
import KosodateScreen from '../screen/BiyoriScreens/KosodateScreen'
import HapisapoScreen from '../screen/BiyoriScreens/HapisapoScreen'
import HensyushituScreen from '../screen/BiyoriScreens/HensyushituScreen'
import Color from '../../config/color.json'
import Value from '../../config/value.json'

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
      scrollEnabled: true,
      activeTintColor: Color.tabBarOptions.active,
      inactiveTintColor: Color.tabBarOptions.inactive,
      indicatorStyle: {
        backgroundColor: Color.indicatorStyle.backgroundColor
      },
      style: {
        backgroundColor: Color.style.backgroundColor
      },
      labelStyle: Value.position,
      tabStyle: {
        width: 100
      }
    }
  }
)

export default Biyori
