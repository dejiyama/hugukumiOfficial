import React from 'react'
import { WebView } from 'react-native'
import Inject from './InjectJS'

class NinkatsuScreen extends React.Component {
  webViewRef = React.createRef<WebView>()
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        ref={this.webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={Inject}
        source={{ uri: 'https://www.hugkumiplus.net/biyori/ninkatsu/' }}
        startInLoadingState={true}
      />
    )
  }
}

export default NinkatsuScreen
