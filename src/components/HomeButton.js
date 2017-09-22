import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Icon, Button } from 'native-base'

import colors from './../constants/colors'


const HomeButton = (props) => (
  <Button
    large
    block
    rounded
    iconLeft
    style={styles.button}
    onPress={() => props.onPress()}
  >
    <Icon name={props.icon} />
    <Text style={styles.text}>{props.children.toUpperCase()}</Text>
  </Button>
);

const styles = StyleSheet.create({
  touchable: {
    marginTop: 20,
  },
  button: {
    margin: 12,
    marginTop: 16,
    backgroundColor: "#e6a0c3",
    borderColor: colors.primary,
  },
  container: {
    flexDirection: "row"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeButton