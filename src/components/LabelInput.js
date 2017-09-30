import React from 'react'
import { StyleSheet } from 'react-native'
import { Item, Label, Input } from 'native-base'

const LabelInput = (props) => {
  const { children, type, labelColor, ...inputProps } = props;
  return (
    <Item style={styles.item}
          stackedLabel={('stackedLabel' === type)}
          floatingLabel={('floatingLabel' === type)}
          inlineLabel={('inlineLabel' === type)}
    >
      <Label style={{color: labelColor}}>{children}</Label>
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

export default LabelInput