import React from 'react'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'
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
          <Image source={require('../../../images/mypage.png')} />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.moveGuide} style={styles.page}>
          <Image source={require('../../../images/guide.png')} />
        </TouchableHighlight>

        <Timer />

        <TouchableHighlight onPress={this.moveQuestion} style={styles.page}>
          <Image source={require('../../../images/question.png')} />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.moveAbout} style={styles.page}>
          <Image source={require('../../../images/about.png')} />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.movePrivacy} style={styles.page}>
          <Image source={require('../../../images/privacy.png')} />
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
    marginTop: 20
  }
})

export default Item
