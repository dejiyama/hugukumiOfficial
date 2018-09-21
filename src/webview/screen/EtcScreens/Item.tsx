import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import Timer from '../EtcScreens/Timer'

class Item extends React.Component<{ navigation: any }> {
  moveMypage = () => this.props.navigation.navigate('Mypage')

  moveGuide = () => this.props.navigation.navigate('Guide')

  moveTimer = () => this.props.navigation.navigate('Timer')

  moveQuestion = () => this.props.navigation.navigate('Question')

  moveAbout = () => this.props.navigation.navigate('About')

  movePrivacy = () => this.props.navigation.navigate('Privacy')
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.moveMypage} style={styles.page}>
          <Text>マイページ</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.moveGuide} style={styles.page}>
          <Text>購入ガイド</Text>
        </TouchableHighlight>

        <Timer />

        <TouchableHighlight onPress={this.moveQuestion} style={styles.page}>
          <Text>お問い合わせ</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.moveAbout} style={styles.page}>
          <Text>会社概要</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.movePrivacy} style={styles.page}>
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
