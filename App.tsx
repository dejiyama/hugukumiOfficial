import React from 'react'
import Repro from 'react-native-repro'
import { SafeAreaView, StyleSheet, PushNotificationIOS, Platform } from 'react-native'
import RootNavigation from './src/RootNavigation'

type Props = {}
class App extends React.Component<Props> {
  constructor(props: any) {
    super(props)

    if (Platform.OS === 'ios') {
      PushNotificationIOS.addEventListener('register', deviceToken => {
        console.log('iOS Push Notification Device Token: ' + deviceToken)
        Repro.setPushDeviceTokenString(deviceToken)
      })

      PushNotificationIOS.requestPermissions()
    }
  }

  render() {
    console.log('Repro', Repro)
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
