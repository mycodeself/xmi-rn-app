import React from 'react'
import {StyleSheet,Text} from 'react-native'
import {Form,Input, Item} from 'native-base'
import {Button} from "./index";


class RequestAssociationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      contact: '',
      userEmail: '',
      errorFields: {},
    }
  }

  validate() {
    let isValid = true;
    const errorFields = {};
    if(this.state.name.length < 3) {
      errorFields['name'] = true;
      isValid = false;
    }
    if(this.state.city.length < 3){
      errorFields['city'] = true;
      isValid = false;
    }
    if(this.state.contact.length < 6){
      errorFields['contact'] = true;
      isValid = false;
    }
    if(this.state.userEmail.length < 3){ // TODO: VALIDATE EMAIL
      errorFields['userEmail'] = true;
      isValid = false;
    }
    this.setState({errorFields: errorFields});
    return isValid;
  }

  onSubmit() {
    if(this.validate()) {
      this.props.onSubmit(this.state)
    } else {
      // handle errors
    }
  }

  render() {
    return (
      <Form style={styles.form}>
        <Text style={styles.sectionText}>Datos de la asociación</Text>
        <Item
          error={true === this.state.errorFields['name']}
        >
          <Input
            onChangeText={(name) => this.setState({name: name})}
            value={this.state.name}
            placeholder="Nombre"
          />
        </Item>
        <Item
          error={true === this.state.errorFields['city']}
        >
          <Input
            onChangeText={(city) => this.setState({city: city})}
            value={this.state.city}
            placeholder="Ciudad"
          />
        </Item>
        <Item
          error={true === this.state.errorFields['contact']}
        >
          <Input
            placeholder="E-mail/Teléfono"
            onChangeText={(contact) => this.setState({contact: contact})}
            value={this.state.contact}
          />
        </Item>
        <Text style={styles.sectionText}>Tus datos</Text>
        <Item
          error={true === this.state.errorFields['userEmail']}
        >
          <Input
            placeholder="E-mail"
            onChangeText={(userEmail) => this.setState({userEmail: userEmail})}
            value={this.state.userEmail}
          />
        </Item>

        <Button
          block
          backgroundColor="lightgreen"
          onPress={() => this.onSubmit()}
        >
          Enviar
        </Button>
      </Form>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    alignSelf: 'stretch',
    marginBottom: 6,
  },
  sectionText: {
    color: "black",
    marginTop: 16,
  }
});

export default RequestAssociationForm