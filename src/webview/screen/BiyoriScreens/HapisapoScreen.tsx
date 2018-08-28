import React from 'react'
import { WebView } from 'react-native'
import inject from './InjectJS'

class HapisapoScreen extends React.Component {
  webViewRef = React.createRef<WebView>()

  render() {
    return (
      <WebView
        originWhitelist={['*']}
        ref={this.webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={inject}
        source={{ uri: 'https://www.hugkumiplus.net/biyori/hitokoto/' }}
        startInLoadingState={true}
      />
    )
  }
}

export default HapisapoScreen
