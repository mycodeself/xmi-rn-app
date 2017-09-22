import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'


const TextLink = (props) => {
  const textColor = (props.color) ? props.color : "#8362BF";
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={[styles.text, {color: textColor}]}>{props.children.toUpperCase()}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontSize: 16,
    color: "#8362BF",
    fontWeight: "bold",
    margin: 10,
  }
});

export default TextLink