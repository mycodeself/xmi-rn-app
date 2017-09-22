import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { Form, Item, Label, Input, Content } from 'native-base'
 
import {Button} from './'
import colors from '../constants/colors'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      firstPassword: "",
      secondPassword: "",
    }
  }

  render() {
    return (
      <Form>
        <Item
          floatingLabel
          style={styles.item}
        >
          <Label>Nombre</Label>
          <Input
            style={{marginLeft: 0}}
            onChangeText={(name) => this.setState({name: name})}
          />
        </Item>
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
          style={styles.item}
        >
          <Label>Contraseña</Label>
          <Input
            style={{marginLeft: 0}}
            secureTextEntry
            onChangeText={(firstPassword) => this.setState({firstPassword: firstPassword})}
          />
        </Item>
        <Item
          floatingLabel
          style={styles.item}>
          <Label>Verifica la contraseña</Label>
          <Input
            style={{marginLeft: 0}}
            secureTextEntry
            onChangeText={(secondPassword) => this.setState({secondPassword: secondPassword})}
          />
        </Item>
        <Text style={styles.textHelp}>
          Se enviará un mensaje al correo electrónico utilizado para verificar la cuenta por motivos de seguridad.
          Al registrarte aceptas los términos y condiciones de uso.
        </Text>
        <Button
          block
          onPress={() => this.props.onSubmit(this.state)}
        >
          Quiero registrarme
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
  textHelp: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 10,
    textAlign: "center",
  }
});

export default SignUpForm