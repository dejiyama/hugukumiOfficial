import React from 'react'
import { WebView } from 'react-native'
import Inject from './InjectJS'

class NinkatsuScreen extends React.Component<any> {
  webViewRef = React.createRef<WebView>()

  constructor(props: any) {
    super(props)
    props.navigation.addListener('didFocus', () =>
      props.navigation.dangerouslyGetParent().setParams({ onClickBack: this.onClickBack })
    )
  }

  onClickBack = () => {
    if (this.webViewRef.current) {
      this.webViewRef.current.goBack()
    }
  }

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
