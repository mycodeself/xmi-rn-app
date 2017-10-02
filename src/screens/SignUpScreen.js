import React from 'react'
import {
  Container,
  Content,
  H1,
  Spinner
} from 'native-base'

import {
  Header,
  SignUpForm,
  AlertMessage
} from '../components'
import colors from '../constants/colors'

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    if(this.props.isLoggedIn) {
      this.props.navigation.navigate("Home")
    }
    this.props.cleanAuthErrors();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.emailVerificationSent && !nextProps.isLoggedIn) {
      this.props.navigation.navigate("Login")
    }
  }

  render() {
    return (
      <Container>
        <Header
          back
          title="Regístrate"
          left={{onPress: () => this.props.navigation.goBack(), icon: 'arrow-back'}}
        />
        <Content padder style={{backgroundColor: colors.contentBackgroundColor}}>
          { (this.props.isLoading) ? <Spinner color="red" /> : null}
          <H1 style={{margin: 10}}>Crea tu cuenta...</H1>
          <SignUpForm onSubmit={this.props.signUp} />
        </Content>
        {
          (this.props.error) ?
            <AlertMessage type="danger"
                          text={this.props.errorMessage}
                          onHide={this.props.cleanAuthErrors}
            />
            : null
        }
      </Container>
    )
  }
}

export default SignUpScreen