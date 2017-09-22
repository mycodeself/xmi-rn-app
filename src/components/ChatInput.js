import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

import colors from '../constants/colors'

class ChatInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  onPress() {
    this.props.onSend(this.state.text);
    this.setState({text: ""})
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Escribe tu mensaje..."
          autoCapitalize="sentences"
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
          textBreakStrategy="highQuality"
          underlineColorAndroid="transparent"
          selectionColor={colors.primary}
          onFocus={this.props.onFocus}
        />
        <TouchableOpacity onPress={() => this.onPress()}>
          <Icon style={styles.icon} name="add-circle" />
        </TouchableOpacity>
      </View>
    )
  }
}

ChatInput.propTypes = {
  onSend: PropTypes.func,
  onFocus: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#E6E6E6",
    padding: 4,
    backgroundColor: "#FAFAFA",
    // flex: 1,
    flexDirection: 'row',
  },
  input: {
    color: "#585858",
    fontSize: 16,
    flex: 1,
    marginRight: 4,
  },
  icon: {
    color: "#5edd73",
    fontSize: 42,
    margin: 2,
  }
});

export default ChatInput