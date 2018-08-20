import React from 'react'
import { View, Image, TouchableOpacity, WebView } from 'react-native'
import inject from './InjectJS'

const header_style = require('../../../config/header_style.json')

class HapisapoScreen extends React.Component {
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
            <Image source={require('../../../images/header_btn_goback.png')} style={header_style.header_btn} />
          </TouchableOpacity>
          <Image source={require('../../../images/header_logo.png')} style={header_style.header_logo} />
        </View>
        <WebView
          ref={this.webViewRef}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          injectedJavaScript={inject}
          source={{ uri: 'https://www.hugkumiplus.net/biyori/hitokoto/' }}
          startInLoadingState={true}
        />
      </View>
    )
  }
}

export default HapisapoScreen
