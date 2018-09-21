import React from 'react'
import { SafeAreaView } from 'react-native'
import RouteNavigation from './src/RouteNavigation'

class App extends React.Component<any> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F7F7' }}>
        <RouteNavigation />
      </SafeAreaView>
    )
  }
}

export default App
