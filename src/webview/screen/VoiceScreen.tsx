import React from 'react'
import { WebView } from 'react-native'

class Voice extends React.Component {
  webViewRef = React.createRef<WebView>()

  render() {
    return (
      <WebView
        originWhitelist={['*']}
        startInLoadingState={true}
        ref={this.webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByClassName('page-top')[0].remove();document.getElementsByClassName('voice_gaido clearfix')[0].remove();document.getElementsByClassName('rwd_fB1 cf')[0].remove();"
        source={{ uri: 'https://www.hugkumiplus.net/voice/' }}
      />
    )
  }
}

export default Voice
