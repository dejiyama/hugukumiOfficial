import React from 'react'
import Repro from 'react-native-repro'
import { PushNotificationIOS, Platform } from 'react-native'
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
    return <RootNavigation />
  }
}
export default App
