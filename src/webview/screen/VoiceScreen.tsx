import React from 'react'
import { WebView } from 'react-native'
import Voiceheader from '../../elements/Voiceheader'

class Voice extends React.Component {
  static navigationOptions = ({ navigation }: any) => {
    return {
      header: (
        <Voiceheader onClickBack={navigation.getParam('onClickBack')} onClickCart={() => navigation.navigate('Cart')} />
      )
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
        startInLoadingState={true}
        ref={this.webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByClassName('page-top')[0].remove();document.getElementsByClassName('voice_gaido clearfix')[0].remove();document.getElementsByClassName('rwd_fB1 cf')[0].remove();"
        source={{ uri: 'https://www.hugkumiplus.net/voice/' }}
      />
    )
  }
}

export default Voice
