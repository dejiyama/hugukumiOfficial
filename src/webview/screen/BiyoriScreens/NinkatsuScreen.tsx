import React from 'react'
import { WebView } from 'react-native'
import Inject from './InjectJS'
import Biyoriheader from '../../../elements/Biyoriheader'

class NinkatsuScreen extends React.Component<any> {
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
        injectedJavaScript={Inject}
        source={{ uri: 'https://www.hugkumiplus.net/biyori/ninkatsu/' }}
        startInLoadingState={true}
      />
    )
  }
}

export default NinkatsuScreen
