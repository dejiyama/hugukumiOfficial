import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import RootNavigation from './src/RootNavigation'

class App extends React.Component<any> {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <RootNavigation />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  }
})
export default App
