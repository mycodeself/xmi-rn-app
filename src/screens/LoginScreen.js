import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {
  Container,
  Content,
  Button,
  H1,
  Input,
  Item,
  Label,
  Spinner,
} from 'native-base'

import colors from '../constants/colors'
import {
  Header,
  LoginForm,
  TextLink
} from '../components'
import AlertMessage from '../components/AlertMessage'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    if(this.props.isLoggedIn) {
      this.props.navigation.navigate("Home");
    }
    this.cleanPreviousError();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isLoggedIn) {
      this.props.navigation.navigate("Home")
    }
  }

  cleanPreviousError() {
    this.props.cleanAuthErrors();
  }

  renderError() {
    if(this.props.error) {
      let type = (this.props.emailVerificationSent) ? "warning" : "danger";
        return (
          <AlertMessage
            type={type}
            text={this.props.errorMessage}
            onHide={this.cleanPreviousError.bind(this)}
          />
        )
    }
  }

  render() {
    return (
        <Container>
          <Header
            back
            title="Únete"
            left={{onPress: () => this.props.navigation.navigate("Home"), icon: 'arrow-back'}}
          />
          <Content padder style={styles.content}>
              { (this.props.isLoading) ? <Spinner color="red" /> : null}
              <H1 style={styles.title}>Hola, inicia sesión</H1>
              {
                (this.props.emailVerificationSent) ?
                  <Text style={{margin:16, color: "#914F00"}}>Se ha enviado la verificación al correo electrónico, revisa la bandeja de entrada!</Text>
                  : null
              }
              <LoginForm onSubmit={this.props.login} />
              <TextLink onPress={() => this.props.navigation.navigate("ForgotPassword")}>
                ¿NO RECUERDAS TU CONTRASEÑA?
              </TextLink>
              <TextLink onPress={() => this.props.navigation.navigate("SignUp")}>
                ¿NO TIENES CUENTA? REGISTRATE
              </TextLink>
          </Content>
          {this.renderError()}
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.contentBackgroundColor,
  },
  title: {
    margin: 10,
  },
});

export default LoginScreen