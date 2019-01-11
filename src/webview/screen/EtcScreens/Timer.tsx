import React, { Component } from 'react'
import { View, Text, StyleSheet, AppState, TouchableOpacity } from 'react-native'
import PushNotification from 'react-native-push-notification'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import PushController from '../EtcScreens/PushController'
interface State {
  isVisible: boolean
  chosenDate: Date
}
export default class Timer extends Component<{}, State> {
  state: State = {
    isVisible: false,
    chosenDate: new Date()
  }

  _showPicker = () => this.setState({ isVisible: true })

  _hidePicker = () => this.setState({ isVisible: false })

  _handlePicked = (chosenDate: Date) => {
    this.setState({
      isVisible: false,
      chosenDate
    })
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = (appState: any) => {
    if (appState === 'background') {
      PushNotification.localNotificationSchedule({
        message: '飲み忘れていませんか？',
        date: this.state.chosenDate
      })
    }
  }

  render() {
    return (
      <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ flex: 1 }}>サプリタイマー</Text>
        <TouchableOpacity onPress={this._showPicker} style={{ padding: 20 }}>
          <View style={styles.label}>
            <Text>{moment(this.state.chosenDate).format('HH:mm')}</Text>
          </View>
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
  label: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: 100,
    margin: 0,
    padding: 0
  }
})
