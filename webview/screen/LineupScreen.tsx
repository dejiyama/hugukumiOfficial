import React from 'react'
import { View, StyleSheet, Text, WebView, TouchableOpacity } from 'react-native'

class Lineup extends React.Component {
  webViewRef = React.createRef<WebView>()

  goBack = () => {
    if (this.webViewRef.current) {
      this.webViewRef.current.goBack()
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title_view}>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.title_text}>戻る</Text>
          </TouchableOpacity>
          <Text style={styles.title_text}>hugkumiplus</Text>
        </View>
        <WebView
          startInLoadingState={true}
          ref={this.webViewRef}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          injectedJavaScript="document.getElementById('header').remove();document.getElementsByClassName('page-top')[0].remove();document.getElementsByClassName('rwd_fB1 cf')[0].remove();"
          source={{ uri: 'https://www.hugkumiplus.net/shohin/index.html' }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title_view: {
    flexDirection: 'row',
    height: 60,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#27b5ee'
  },
  title_text: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 20
  }
})

export default Lineup
