import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import header_style from '../config/header_style.json'

interface Props {
  onClickBack: () => void
  onClickCart: () => void
  HideBackButton: () => void
}

class Homeheader extends React.Component<Props> {
  state = {
    backButtonEnabled: false
  }
  render() {
    return (
      <View style={header_style.title_view}>
        <TouchableOpacity
          onPress={this.props.onClickBack}
          style={this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}
        >
          <Image source={require('../images/header_btn_goback.png')} style={header_style.header_btn_goback} />
        </TouchableOpacity>
        <Image source={require('../images/header_logo.png')} style={header_style.header_logo} />
        <TouchableOpacity onPress={this.props.onClickCart}>
          <Image source={require('../images/header_btn_cart.png')} style={header_style.header_btn_cart} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navButton: {
    backgroundColor: 'red'
  },
  disabledButton: {
    backgroundColor: 'black'
  }
})

export default Homeheader
