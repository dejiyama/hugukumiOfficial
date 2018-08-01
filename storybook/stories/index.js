import React from 'react'
import { Text, View } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import Button from './Button'

const Centering = props => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} {...props} />

storiesOf('Button', module)
  .addDecorator(getStory => <Centering>{getStory()}</Centering>)
  .add('with Hello', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello</Text>
    </Button>
  ))
  .add('with Hey', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hey</Text>
    </Button>
  ))
