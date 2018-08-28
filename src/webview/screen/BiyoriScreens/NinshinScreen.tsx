import React from 'react'
import { WebView } from 'react-native'
import inject from './InjectJS'

class NinshinScreen extends React.Component {
  webViewRef = React.createRef<WebView>()

  render() {
    return (
      <WebView
        originWhitelist={['*']}
        startInLoadingState={true}
        ref={this.webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={inject}
        source={{ uri: 'https://www.hugkumiplus.net/biyori/ninshin/' }}
      />
    )
  }
}

export default NinshinScreen
