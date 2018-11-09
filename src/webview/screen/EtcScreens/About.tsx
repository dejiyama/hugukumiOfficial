import React from 'react'
import { WebView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

class About extends React.Component<NavigationScreenProps & NavigationScreenPropsPatch> {
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
        onNavigationStateChange={this.onNavigationStateChange}
        originWhitelist={['*']}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        ref={this.webViewRef}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByClassName('page-top')[0].remove();document.getElementsByClassName('contents main_center_wrap')[0].remove();document.getElementsByTagName('footer')[0].remove();"
        source={{ uri: 'https://hugkumiplus.net/corporation/' }}
      />
    )
  }
  onNavigationStateChange = (navState: any) => {
    this.props.navigation.dangerouslyGetParent().setParams({
      backButtonEnabled: navState.canGoBack
    })
  }
}

export default About
