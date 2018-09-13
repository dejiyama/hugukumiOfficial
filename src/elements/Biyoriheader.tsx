import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import header_style from '../config/header_style.json'
import { createStackNavigator } from 'react-navigation'
import CartScreen from '../webview/screen/CartScreen'

interface Props {
  onClickBack: () => void
}

class Biyoriheader extends React.Component<Props> {
  render() {
    return (
      <View style={header_style.title_view}>
        <TouchableOpacity onPress={this.props.onClickBack}>
          <Image source={require('../images/header_btn_goback.png')} style={header_style.header_btn_goback} />
        </TouchableOpacity>
        <Image source={require('../images/header_logo.png')} style={header_style.header_logo} />
        <TouchableOpacity>
          <Image source={require('../images/header_btn_cart.png')} style={header_style.header_btn_cart} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Biyoriheader
