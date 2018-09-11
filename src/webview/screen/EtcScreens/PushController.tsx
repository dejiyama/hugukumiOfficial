import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PushNotification from 'react-native-push-notification'

export default class PushController extends Component {
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification: any) {
        console.log('NOTIFICATION:', notification)
      }
    })
  }
  render() {
    return (
      <TouchableOpacity>
        <Text>R</Text>
      </TouchableOpacity>
    )
  }
}
