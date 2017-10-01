import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

import {
  Container,
  Content,
  Form,
  H3,
  Spinner
} from 'native-base'

import errorsTranslations from '../firebase/errorsTranslations'
import {auth} from '../actions/auth'
import {
  Header,
  FloatingLabelInput,
  Button,
  AlertMessage,
} from '../components'
import colors from '../constants/colors'

class ForgotPasswordScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      isLoading: false,
      success: false,
      error: false,
      errorMessage: "",
    }

  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({isLoading: true});
    auth.sendPasswordResetEmail(this.state.email).then(() => {
      this.setState({
        isLoading: false,
        success: true,
      })
    }).catch((error) => {
      const errorMessage = (errorsTranslations[error.code])
        ? errorsTranslations[error.code]
        : "Lo siento, ha ocurrido un error fatal";
      this.setState({
        isLoading: false,
        error: true,
        errorMessage: errorMessage
      })
    });
  }

  render() {
    return (
      <Container>
        <Header
          back
          title="Recuperar cuenta"
          left={{
            icon: 'arrow-back',
            onPress: () => this.props.navigation.goBack()
          }}
        />
        <Content padder style={{backgroundColor: colors.contentBackgroundColor}}>
          {
            (this.state.isLoading) ?
              <Spinner color="red" />
              :
              (this.state.success) ?
                <View>
                  <Text style={{fontSize: 16, margin: 24, textAlign: "center"}}>
                    Se ha enviado un e-mail a {this.state.email} con las instrucciones para recuperar tu contraseña.
                  </Text>
                  <Button
                    block
                    onPress={() => {this.props.navigation.navigate("Home")}}
                    style={{margin: 20}}>
                    Volver a inicio
                  </Button>
                </View>
                :
                <View>
                  <Text style={{margin: 16}}>
                    Si has perdido tu contraseña, no te preocupes.
                    Aquí podrás recuperarla, te mandaré un e-mail con las instrucciones para recuperarla.
                  </Text>
                  <Form>
                    <FloatingLabelInput
                      onChangeText={(email) => this.setState({email: email})}
                      value={this.state.email}
                    >
                      Introduce aquí tu e-mail
                    </FloatingLabelInput>
                    <Button
                      block
                      onPress={(event) => this.onSubmit(event)}>
                      Recuperar contraseña
                    </Button>
                  </Form>
                </View>
          }

        </Content>
        {
          (this.state.error) ?
            <AlertMessage
              type="danger"
              text={this.state.errorMessage}
              onHide={() => this.setState({error: false})}
            />
            : null
        }

      </Container>
    )
  }
}

export default ForgotPasswordScreen