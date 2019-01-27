import React from 'react'
import { TouchableOpacity, View, Image, SafeAreaView, StyleSheet } from 'react-native'
import header_style from '../config/header_style.json'

interface Props {
  onClickBack: () => void
  onClickCart: () => void
  showBackbutton: boolean
}

class Biyoriheader extends React.Component<Props> {
  render() {
    console.log('biyoriheader', this.props.showBackbutton)
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={header_style.title_view}>
          <View style={header_style.header_btn_goback}>
            {this.props.showBackbutton && (
              <TouchableOpacity onPress={this.props.onClickBack}>
                <Image source={require('../images/header_btn_goback.png')} style={header_style.header_btn_goback} />
              </TouchableOpacity>
            )}
          </View>
          <Image source={require('../images/header_logo.png')} style={header_style.header_logo} />
          <TouchableOpacity onPress={this.props.onClickCart}>
            <Image source={require('../images/header_btn_cart.png')} style={header_style.header_btn_cart} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  }
})

export default Biyoriheader
