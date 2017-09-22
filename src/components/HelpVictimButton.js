import React from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import {Footer} from 'native-base'

import colors from './../constants/colors'

const BUTTON_NOT_CONFIGURED_TEXT = 'Botón de ayuda a la víctima sin configurar\nPulsa para configurar';


const HelpVictimButton = (props) => {
  return (
    <TouchableHighlight onPress={() => console.log()}>
      <Footer style={styles.container}>
        <Text style={styles.text}>{BUTTON_NOT_CONFIGURED_TEXT.toUpperCase()}</Text>
      </Footer>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a96e91",//colors.primary
    height: 65,

  },
  text: {
    color: "white",
    textAlign: "center",
  }
});

export default HelpVictimButton