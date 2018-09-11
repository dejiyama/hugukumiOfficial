import React, { Component } from 'react'
import { View, Text, StyleSheet, AppState, TouchableOpacity } from 'react-native'
import PushNotification from 'react-native-push-notification'
import PushController from '../EtcScreens/PushController'
import DateTimePicker from 'react-native-modal-datetime-picker'

export default class Timer extends Component<{}, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      isVisible: false,
      chosenDate: Date
    }
  }

  _showPicker = () => this.setState({ isVisible: true })

  _hidePicker = () => this.setState({ isVisible: false })

  _handlePicked = (time: any) => {
    this.state = {
      isVisible: false,
      chosenDate: time
    }
    console.log('取得した時間', time)
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange(appState: any) {
    if (appState === 'background') {
      let setuptime = new Date(this.state.chosenDate)
      PushNotification.localNotificationSchedule({
        message: '飲み忘れていませんか？',
        date: setuptime
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container}>chose your time</Text>
        <TouchableOpacity onPress={this._showPicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this._handlePicked}
          onCancel={this._hidePicker}
          mode={'time'}
        />
        <PushController />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  picker: {
    width: 100
  }
})
