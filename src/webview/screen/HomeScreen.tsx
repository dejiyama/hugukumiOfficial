import React from 'react'
import { WebView, TouchableOpacity, View, Image } from 'react-native'

import header_style from '../../config/header_style.json'

class Home extends React.Component {
  webViewRef = React.createRef<WebView>()

  goBack = () => {
    if (this.webViewRef.current) {
      this.webViewRef.current.goBack()
    }
  }
  render() {
    return (
      <View style={header_style.container}>
        <View style={header_style.title_view}>
          <TouchableOpacity onPress={this.goBack}>
            <Image source={require('../../images/header_btn_goback.png')} style={header_style.header_btn} />
          </TouchableOpacity>
          <Image source={require('../../images/header_logo.png')} style={header_style.header_logo} />
        </View>
        <WebView
          originWhitelist={['*']}
          startInLoadingState={true}
          ref={this.webViewRef}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          injectedJavaScript="document.getElementById('header').remove();document.getElementsByClassName('page-top')[0].remove();document.getElementsByClassName('contents main_center_wrap')[0].remove();document.getElementsByTagName('footer')[0].remove();"
          source={{ uri: 'https://www.hugkumiplus.net/' }}
        />
      </View>
    )
  }
}

export default Home
