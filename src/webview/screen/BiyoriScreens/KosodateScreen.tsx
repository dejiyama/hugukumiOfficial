import React from 'react'
import { WebView } from 'react-native'
import inject from './InjectJS'
import Biyoriheader from '../../../elements/Biyoriheader'

class KosodateScreen extends React.Component<any> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      header: <Biyoriheader onClickBack={navigation.getParam('onClickBack')} />
    }
  }
  webViewRef = React.createRef<WebView>()

  constructor(props: any) {
    super(props)
    props.navigation.setParams({ onClickBack: this.onClickBack })
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
        injectedJavaScript={inject}
        source={{ uri: 'https://www.hugkumiplus.net/biyori/ikuzi/' }}
        startInLoadingState={true}
      />
    )
  }
}

export default KosodateScreen
