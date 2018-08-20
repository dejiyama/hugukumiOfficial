import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

class Item extends React.Component<{ navigation: any }> {
  navigation: any
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigation.navigate('Mypage')} style={styles.page}>
          <Text>マイページ</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('Guide')} style={styles.page}>
          <Text>購入ガイド</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('About')} style={styles.page}>
          <Text>サプリタイマー</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('Question')} style={styles.page}>
          <Text>お問い合わせ</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('About')} style={styles.page}>
          <Text>会社概要</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('Privacy')} style={styles.page}>
          <Text>プライバシーポリシー</Text>
        </TouchableOpacity>
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
