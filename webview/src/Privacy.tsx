import React, { Component } from 'react';
import { View, StyleSheet, Text, WebView, TouchableOpacity } from 'react-native';

class about extends React.Component{
  render() {
    return(
      <WebView
          startInLoadingState={true}
          ref={WEBVIEW_REF}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          injectedJavaScript="document.getElementById('header').remove();document.getElementsByClassName('page-top')[0].remove();document.getElementsByClassName('contents main_center_wrap')[0].remove();document.getElementsByTagName('footer')[0].remove();"
          source={{uri: 'https://www.hugkumiplus.net/kozin/'}}
      />
    )
  }
}

export default about;
