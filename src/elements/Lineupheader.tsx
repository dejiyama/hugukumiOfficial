import React from 'react'
import { WebView, TouchableOpacity, View, Image } from 'react-native'
import header_style from '../config/header_style.json'

class Lineupheader extends React.Component {
  webViewRef = React.createRef<WebView>()

  goBack = () => {
    if (this.webViewRef.current) {
      this.webViewRef.current.goBack()
    }
  }

  render() {
    return (
      <View style={header_style.title_view}>
        <TouchableOpacity onPress={this.goBack}>
          <Image source={require('../images/header_btn_goback.png')} style={header_style.header_btn} />
        </TouchableOpacity>
        <Image source={require('../images/header_logo.png')} style={header_style.header_logo} />
      </View>
    )
  }
}
export default Lineupheader
