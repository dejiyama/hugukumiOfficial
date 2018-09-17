import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import header_style from '../config/header_style.json'

interface Props {
  onClickCart: () => void
}

class Etceteraheader extends React.Component<Props> {
  render() {
    return (
      <View style={header_style.title_view}>
        <View style={{ flex: 1 }} />
        <Image source={require('../images/header_logo.png')} style={header_style.header_logo} />
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={this.props.onClickCart}>
            <Image source={require('../images/header_btn_cart.png')} style={header_style.header_btn_cart} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Etceteraheader
