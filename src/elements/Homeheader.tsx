import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import header_style from '../config/header_style.json'

interface Props {
  onClickBack: () => void
}

class Homeheader extends React.Component<Props> {
  render() {
    return (
      <View style={header_style.title_view}>
        <TouchableOpacity onPress={this.props.onClickBack}>
          <Image source={require('../images/header_btn_goback.png')} style={header_style.header_btn} />
        </TouchableOpacity>
        <Image source={require('../images/header_logo.png')} style={header_style.header_logo} />
      </View>
    )
  }
}
export default Homeheader
