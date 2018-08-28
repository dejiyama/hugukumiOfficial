declare module '*/color.json' {
  const value: RootObject
  export default value
}

interface RootObject {
  tabBarOptions: TabBarOptions
  indicatorStyle: IndicatorStyle
  style: IndicatorStyle
}

interface IndicatorStyle {
  backgroundColor: string
}

interface TabBarOptions {
  active: string
  activeBackground: string
  inactive: string
  inactiveBackground: string
}
