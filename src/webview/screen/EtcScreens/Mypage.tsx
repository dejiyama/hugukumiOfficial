import React from 'react'
import { WebView } from 'react-native'

class Mypage extends React.Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByClassName('page-top')[0].remove();document.getElementsByClassName('contents main_center_wrap')[0].remove();document.getElementsByTagName('footer')[0].remove();"
        source={{ uri: 'https://shop.hugkumiplus.net/Form/inquiry/InquiryInput.aspx' }}
      />
    )
  }
}

export default Mypage
