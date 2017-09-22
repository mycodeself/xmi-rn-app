import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Form, Item, Label, Input } from 'native-base'

import {Button} from './'
import colors from '../constants/colors'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
  }


  render() {
    return (
      <Form>
        <Item
          floatingLabel
          style={styles.item}
        >
          <Label>E-mail</Label>
          <Input
            style={{marginLeft: 0}}
            onChangeText={(email) => this.setState({email: email})}
          />
        </Item>
        <Item
          floatingLabel
          style={styles.item}>
          <Label>Contraseña</Label>
          <Input style={{marginLeft: 0}}
                 secureTextEntry
                 onChangeText={(password) => this.setState({password: password})}
          />
        </Item>
        <Button
          block
          onPress={() => this.props.onSubmit(this.state)}
        >
            Acceder
        </Button>
      </Form>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    marginLeft: 15,
    marginRight: 15,
  },
});

export default LoginForm