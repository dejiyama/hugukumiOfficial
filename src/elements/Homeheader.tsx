import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import header_style from '../config/header_style.json'

interface Props {
  onClickBack: () => void
  onClickCart: () => void
  showBackbutton: boolean
}

class Homeheader extends React.Component<Props> {
  render() {
    if (this.props.showBackbutton === true) {
      ;<TouchableOpacity onPress={this.props.onClickBack}>
        <Image source={require('../images/header_btn_goback.png')} style={header_style.header_btn_goback} />
      </TouchableOpacity>
    } else {
    }
    return (
      <View style={header_style.title_view}>
        <TouchableOpacity onPress={this.props.onClickBack} style={header_style.header_btn_goback}>
          {this.props.showBackbutton && (
            <Image source={require('../images/header_btn_goback.png')} style={header_style.header_btn_goback} />
          )}
        </TouchableOpacity>
        <Image source={require('../images/header_logo.png')} style={header_style.header_logo} />
        <TouchableOpacity onPress={this.props.onClickCart}>
          <Image source={require('../images/header_btn_cart.png')} style={header_style.header_btn_cart} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Homeheader
