import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView } from 'react-native'
import { StackNavigator, TabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

WEBVIEW_REF = 'webview';


class Screen1 extends React.Component {
  render() {
  return(
  <View style={styles.container}>
  <View style={styles.title_view}>
        <TouchableOpacity
        onPress={this.goBack.bind(this)}
        >
        <Text style={styles.title_text}>
           戻る
        </Text>
        </TouchableOpacity>
       <Text style={styles.title_text}>
             hugkumiplus
       </Text>
        <TouchableOpacity
          onPress={this.goForward.bind(this)}
          >
       <Text style={styles.title_text}>
             進む
       </Text>
       </TouchableOpacity>
      </View>
  <WebView
      startInLoadingState={true}
      ref={WEBVIEW_REF}
      style={styles.webstyle}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      injectedJavaScript="document.getElementById('header').remove();document.getElementsByTagName('footer')[0].remove();"
      source={{uri: 'https://www.hugkumiplus.net/biyori/mainichi/'}}
  />
  </View>

     )
   }
   goBack(){
          this.refs[WEBVIEW_REF].goBack();
          }
  goForward(){
          this.refs[WEBVIEW_REF].goForward();
         }
}


class Screen2 extends React.Component {
  render() {
  return(
    <View style={styles.container}>
    <View style={styles.title_view}>
          <TouchableOpacity
          onPress={this.goBack.bind(this)}
          >
          <Text style={styles.title_text}>
             戻る
          </Text>
          </TouchableOpacity>
         <Text style={styles.title_text}>
               hugkumiplus
         </Text>
          <TouchableOpacity
            onPress={this.goForward.bind(this)}
            >
         <Text style={styles.title_text}>
               進む
         </Text>
         </TouchableOpacity>
        </View>
    <WebView
        ref={WEBVIEW_REF}
        style={styles.webstyle}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByTagName('footer')[0].remove();"
        source={{uri: 'https://www.hugkumiplus.net/biyori/ninshin/'}}
        startInLoadingState={true}
    />
    </View>
       )
     }
     goBack(){
            this.refs[WEBVIEW_REF].goBack();
            }
    goForward(){
            this.refs[WEBVIEW_REF].goForward();
           }
}

class Screen3 extends React.Component {
  render() {
  return(
  <View style={styles.container}>
  <View style={styles.title_view}>
        <TouchableOpacity
        onPress={this.goBack.bind(this)}
        >
        <Text style={styles.title_text}>
           戻る
        </Text>
        </TouchableOpacity>
       <Text style={styles.title_text}>
             hugkumiplus
       </Text>
        <TouchableOpacity
          onPress={this.goForward.bind(this)}
          >
       <Text style={styles.title_text}>
             進む
       </Text>
       </TouchableOpacity>
      </View>
  <WebView
      ref={WEBVIEW_REF}
      style={styles.webstyle}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      injectedJavaScript="document.getElementById('header').remove();document.getElementsByTagName('footer')[0].remove();"
      source={{uri: 'https://www.hugkumiplus.net/biyori/ninkatsu/'}}
      startInLoadingState={true}
  />
  </View>
     )
   }
   goBack(){
          this.refs[WEBVIEW_REF].goBack();
          }
  goForward(){
          this.refs[WEBVIEW_REF].goForward();
         }
}

class Screen4 extends React.Component {
  render() {
  return(
    <View style={styles.container}>
    <View style={styles.title_view}>
          <TouchableOpacity
          onPress={this.goBack.bind(this)}
          >
          <Text style={styles.title_text}>
             戻る
          </Text>
          </TouchableOpacity>
         <Text style={styles.title_text}>
               hugkumiplus
         </Text>
          <TouchableOpacity
            onPress={this.goForward.bind(this)}
            >
         <Text style={styles.title_text}>
               進む
         </Text>
         </TouchableOpacity>
        </View>
    <WebView
        ref={WEBVIEW_REF}
        style={styles.webstyle}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByTagName('footer')[0].remove();"
        source={{uri: 'https://www.hugkumiplus.net/biyori/ikuzi/'}}
        startInLoadingState={true}
    />
    </View>
       )
     }
     goBack(){
            this.refs[WEBVIEW_REF].goBack();
            }
    goForward(){
            this.refs[WEBVIEW_REF].goForward();
           }
}

class Screen5 extends React.Component {
  render() {
  return(
    <View style={styles.container}>
    <View style={styles.title_view}>
          <TouchableOpacity
          onPress={this.goBack.bind(this)}
          >
          <Text style={styles.title_text}>
             戻る
          </Text>
          </TouchableOpacity>
         <Text style={styles.title_text}>
               hugkumiplus
         </Text>
          <TouchableOpacity
            onPress={this.goForward.bind(this)}
            >
         <Text style={styles.title_text}>
               進む
         </Text>
         </TouchableOpacity>
        </View>
    <WebView
        ref={WEBVIEW_REF}
        style={styles.webstyle}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByTagName('footer')[0].remove();"
        source={{uri: 'https://www.hugkumiplus.net/biyori/hitokoto/'}}
        startInLoadingState={true}
    />
    </View>
       )
     }
     goBack(){
            this.refs[WEBVIEW_REF].goBack();
            }
    goForward(){
            this.refs[WEBVIEW_REF].goForward();
           }
}

class Screen6 extends React.Component {
  render() {
  return(
    <View style={styles.container}>
    <View style={styles.title_view}>
          <TouchableOpacity
          onPress={this.goBack.bind(this)}
          >
          <Text style={styles.title_text}>
             戻る
          </Text>
          </TouchableOpacity>
         <Text style={styles.title_text}>
               hugkumiplus
         </Text>
          <TouchableOpacity
            onPress={this.goForward.bind(this)}
            >
         <Text style={styles.title_text}>
               進む
         </Text>
         </TouchableOpacity>
        </View>
    <WebView
        ref={WEBVIEW_REF}
        style={styles.webstyle}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript="document.getElementById('header').remove();document.getElementsByTagName('footer')[0].remove();"
        source={{uri: 'https://www.hugkumiplus.net/biyori/hensyushitsu/'}}
        startInLoadingState={true}
    />
    </View>
       )
     }
     goBack(){
            this.refs[WEBVIEW_REF].goBack();
            }
    goForward(){
            this.refs[WEBVIEW_REF].goForward();
           }
}

class test extends React.Component {
  render() {
    return(
      <View style={styles.title_view}>
            <TouchableOpacity
            onPress={this.goBack.bind(this)}
            >
            <Text style={styles.title_text}>
               戻る
            </Text>
            </TouchableOpacity>
           <Text style={styles.title_text}>
                 hugkumiplus
           </Text>
            <TouchableOpacity
              onPress={this.goForward.bind(this)}
              >
           <Text style={styles.title_text}>
                 進む
           </Text>
           </TouchableOpacity>
          </View>
    )
  }
  goBack(){
         this.refs[WEBVIEW_REF].goBack();
         }
 goForward(){
         this.refs[WEBVIEW_REF].goForward();
        }
}
const Biyori = createMaterialTopTabNavigator({
  "はぐまい":{ screen: Screen1 },
  "妊娠・出産":{ screen: Screen2 },
  "妊活":{ screen: Screen3 },
  "子育て":{ screen: Screen4 },
  "はぴサポ":{ screen: Screen5 },
  "編集室":{ screen: Screen6 },
},{
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#D7DBDD',
    indicatorStyle: {
      backgroundColor: 'black',
    },
    style: {
      backgroundColor: '#F8F9F9',
    },
    labelStyle: {
        fontSize: 9,
        padding: 0,
        margin: 0,
    },
  }
});


const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
  },
   title_view:{
    flexDirection:'row',
    height:60,
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#27b5ee',
  },
   title_text:{
    color:'white',
    fontSize:22,
    textAlign:'center',
    paddingTop:20
  },
});

export default Biyori;
