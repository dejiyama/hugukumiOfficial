import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet, Platform } from 'react-native'
import header_style from '../config/header_style.json'

interface Props {
  onClickBack: () => void
  onClickCart: () => void
}

class Lineupheader extends React.Component<Props> {
  render() {
    return (
      <View style={styles.title_view}>
        <TouchableOpacity onPress={this.props.onClickBack}>
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
  title_view: {
    height: 60,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7F7F7',
    paddingTop: Platform.OS === 'ios' ? 15 : 0
  }
})

export default Lineupheader
