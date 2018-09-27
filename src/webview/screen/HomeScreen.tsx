import React from 'react'
import { WebView, StyleSheet } from 'react-native'
import Homeheader from '../../elements/Homeheader'

class Home extends React.Component<any> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      header: (
        <Homeheader
          onClickBack={navigation.getParam('onClickBack')}
          onClickCart={() => navigation.navigate('Cart')}
          style={this.backButtonEnabled ? styles.navButton : styles.disabledButton}
        />
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
  onNavigationStateChange = ({ navState }: any) => {
    this.setState({
      backButtonEnabled: navState.canGoBack
    })
  }
}

const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: 'black'
  },
  navButton: {
    backgroundColor: 'red'
  }
})
export default Home
