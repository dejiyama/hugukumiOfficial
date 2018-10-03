import React from 'react'
import { WebView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import inject from './InjectJS'

class HagumaiScreen extends React.Component<NavigationScreenProps> {
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
    console.log('HagumaiScrren', this.props.navigation.state.params)
    return (
      <WebView
        onNavigationStateChange={this.onNavigationStateChange}
        originWhitelist={['*']}
        startInLoadingState={true}
        ref={this.webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={inject}
        source={{ uri: 'https://www.hugkumiplus.net/biyori/mainichi/' }}
      />
    )
  }
  onNavigationStateChange = (navState: any) => {
    this.props.navigation.dangerouslyGetParent().setParams({
      backButtonEnabled: navState.canGoBack
    })
  }
}

export default HagumaiScreen
