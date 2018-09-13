import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import header_style from '../config/header_style.json'

interface Props {
  onClickCart: () => void
}

class Etceteraheader extends React.Component<Props> {
  render() {
    return (
      <View style={header_style.etc_title_view}>
        <Image source={require('../images/header_logo.png')} style={header_style.header_logo} />
        <TouchableOpacity onPress={this.props.onClickCart}>
          <Image source={require('../images/header_btn_cart.png')} style={header_style.header_btn_cart} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Etceteraheader
