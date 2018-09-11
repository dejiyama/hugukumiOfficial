import React, { Component } from 'react'
import { View, Text, StyleSheet, AppState, TouchableOpacity } from 'react-native'
import PushNotification from 'react-native-push-notification'
import DateTimePicker from 'react-native-modal-datetime-picker'

export default class Timer extends Component<{}, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      isVisible: false,
      chosenDate: Date,
      setupdate: ''
    }
  }

  _showPicker = () => this.setState({ isVisible: true })

  _hidePicker = () => this.setState({ isVisible: false })

  _handlePicked = (time: any) => {
    this.setState({
      isVisible: false,
      chosenDate: time,
      setupdate: new Date(time).toISOString()
    })
    console.log(this.state.setupdate)
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = (appState: any) => {
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
      <View>
        <Text style={styles.title}>サプリタイマー</Text>
        <TouchableOpacity onPress={this._showPicker}>
          <View style={styles.label}>
            <Text>{this.state.setupdate}</Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this._handlePicked}
          onCancel={this._hidePicker}
          mode={'time'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    top: 15,
    marginTop: 50
  },
  label: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: 100,
    margin: 0,
    padding: 0,
    left: 250
  }
})
