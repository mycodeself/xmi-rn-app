import React from 'react'
import { StyleSheet } from 'react-native'
import { Item, Label, Input } from 'native-base'

const FloatingLabelInput = (props) => {
  const { children, ...inputProps } = props;
  return (
    <Item style={styles.item} floatingLabel>
      <Label>{children}</Label>
      <Input
        style={styles.input}
        {...inputProps}
      />
    </Item>
  )
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 16,
    marginRight: 16,
  },
  input: {
    marginLeft: 6
  },
});

export default FloatingLabelInput