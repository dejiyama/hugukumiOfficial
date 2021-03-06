import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'

export default (props: any) => (
  <View>
    <TouchableNativeFeedback onPress={props.onPress}>{props.children}</TouchableNativeFeedback>
  </View>
)
