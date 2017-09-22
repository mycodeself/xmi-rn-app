import React from 'react'
import { Text, View } from 'react-native'
import { DeckSwiper, List } from 'native-base'

import TestimonyItem from './TestimonyItem'

const TestimoniesList = (props) => {
  return (
    <List
      dataArray={props.testimonies}
      renderRow={(testimony) => {
        return <TestimonyItem
          testimony={testimony}
          key={testimony.key}
        />
      }}
    />
  )
};

export default TestimoniesList