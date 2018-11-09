import React from 'react'
import { WebView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import inject from './InjectJS'

class HapisapoScreen extends React.Component<NavigationScreenProps & NavigationScreenPropsPatch> {
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
        ref={this.webViewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={inject}
        source={{ uri: 'https://www.hugkumiplus.net/biyori/hitokoto/' }}
        startInLoadingState={true}
      />
    )
  }
  onNavigationStateChange = (navState: any) => {
    this.props.navigation.dangerouslyGetParent().setParams({
      backButtonEnabled: navState.canGoBack
    })
  }
}

export default HapisapoScreen
