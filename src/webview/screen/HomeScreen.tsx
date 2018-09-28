import React, { Component } from 'react'
import { WebView } from 'react-native'
import Homeheader from '../../elements/Homeheader'

class Home extends React.Component<Component> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      header: (
        <Homeheader onClickBack={navigation.getParam('onClickBack')} onClickCart={() => navigation.navigate('Cart')} />
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
    console.log(this.webViewRef)
    return (
      <WebView
        onNavigationStateChange={this.onNavigationStateChange}
        originWhitelist={['*']}
        startInLoadingState={true}
        ref={this.webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByClassName('page-top')[0].remove();document.getElementsByClassName('contents main_center_wrap')[0].remove();document.getElementsByTagName('footer')[0].remove();"
        source={{ uri: 'https://www.hugkumiplus.net/' }}
      />
    )
  }
  onNavigationStateChange = (navState: any) => {
    this.props.navigation.setParams({
      backButtonEnabled: navState.canGoBack
    })
  }
}
export default Home
