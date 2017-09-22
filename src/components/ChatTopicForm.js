import React from 'react'
import {View,StyleSheet,TouchableOpacity} from 'react-native'
import {Form, Item, Input, Label, Icon} from 'native-base'

import {
  Button
} from './'

class ChatTopicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
    }
  }

  render() {
    return(
      <Form style={styles.form}>
        <TouchableOpacity style={styles.closeButton} onPress={() => this.props.onClose()}>
          <Icon style={{color: "#828282"}} name="close" />
        </TouchableOpacity>
        <Item style={styles.item}>
          <Input
            onChangeText={(title) => this.setState({title: title})}
            placeholder="¿De qué quieres hablar?"
          />
        </Item>
        <Item style={styles.item}>
          <Input
            style={styles.multilineInput}
            multiline
            placeholder="Inicia la conversación..."
            onChangeText={(text) => this.setState({text: text})}
          />
        </Item>
        <View style={styles.buttonsContainer}>
          <Button
            block
            onPress={() => this.props.onSubmit(this.state)}
          >
            Empezar a hablar
          </Button>
        </View>
      </Form>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    alignSelf: 'stretch',
  },
  item: {
    marginLeft: 0,
  },
  multilineInput: {
    marginTop: 16,
    height: 64,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginTop: -14,
    marginRight: -8,
  },
  buttonsContainer: {
    marginTop: 12,
    // flexDirection: "row",
    // justifyContent: "space-around"
  }
});

export default ChatTopicForm