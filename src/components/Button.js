import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { Button as ButtonNB } from 'native-base'
import colors from '../constants/colors'

const Button = (props) => (
  <View style={{margin:16}}>
    <ButtonNB
      {...props}
      style={[styles.button, props.style]}>
      <Text style={styles.text}>{props.children.toUpperCase()}</Text>
    </ButtonNB>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default Button