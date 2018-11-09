import React from 'react'
import { WebView } from 'react-native'

class Mypage extends React.Component<any> {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByClassName('page-top')[0].remove();document.getElementsByClassName('contents main_center_wrap')[0].remove();document.getElementsByTagName('footer')[0].remove();"
        source={{
          uri:
            'https://shop.hugkumiplus.net/Form/Login.aspx?nurl=%2fForm%2fUser%2fMyPage.aspx&errkbn=ERRMSG_FRONT_NO_USER_SESSION'
        }}
      />
    )
  }
}

export default Mypage
