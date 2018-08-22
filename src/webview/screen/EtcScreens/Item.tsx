import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'

class Item extends React.Component<{ navigation: any }> {
  navigation: any

  MoveMypage = () => {
    this.setState({
      navigation: this.props.navigation.navigate('Mypage')
    })
  }

  MoveGuide = () => {
    this.setState({
      navigation: this.props.navigation.navigate('Guide')
    })
  }

  MoveHighlight = () => {
    this.setState({
      navigation: this.props.navigation.navigate('About')
    })
  }

  MoveQuestion = () => {
    this.setState({
      navigation: this.props.navigation.navigate('Question')
    })
  }

  MoveAbout = () => {
    this.setState({
      navigation: this.props.navigation.navigate('About')
    })
  }

  MovePrivacy = () => {
    this.setState({
      navigation: this.props.navigation.navigate('Privacy')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.MoveMypage} style={styles.page}>
          <Text>マイページ</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.MoveGuide} style={styles.page}>
          <Text>購入ガイド</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.MoveAbout} style={styles.page}>
          <Text>サプリタイマー</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.MoveQuestion} style={styles.page}>
          <Text>お問い合わせ</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.MoveAbout} style={styles.page}>
          <Text>会社概要</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.MovePrivacy} style={styles.page}>
          <Text>プライバシーポリシー</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  page: {
    marginTop: 50
  }
})

export default Item
