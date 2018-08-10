import React, { Component } from 'react';
import { View, StyleSheet, Text, Webview, TouchableOpacity } from 'react-native';

class Item extends React.Component{
  render() {
    return(
      <View style={styles.container}>
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('Mypage')}} style={styles.about}>
      <Text>
      マイページ
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('Guide')}} style={styles.about}>
      <Text>
      購入ガイド
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('About')}} style={styles.about}>
      <Text>
      サプリタイマー
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('Question')}} style={styles.about}>
      <Text>
      お問い合わせ
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('About')}} style={styles.about}>
      <Text>
      会社概要
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('Privacy')}} style={styles.about}>
      <Text>
      プライバシーポリシー
      </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  },
  about: {
    marginTop: 50,
  }
});


export default Item;
