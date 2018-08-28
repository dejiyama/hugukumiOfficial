import React from 'react'
import { WebView } from 'react-native'
import inject from './InjectJS'

class KosodateScreen extends React.Component {
  webViewRef = React.createRef<WebView>()
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        ref={this.webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={inject}
        source={{ uri: 'https://www.hugkumiplus.net/biyori/ikuzi/' }}
        startInLoadingState={true}
      />
    )
  }
}

export default KosodateScreen
