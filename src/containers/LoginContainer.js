import { connect } from 'react-redux'

import LoginScreen from '../screens/LoginScreen'
import {login, cleanAuthErrors} from '../actions/auth'

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    emailVerificationSent: state.auth.emailVerificationSent,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (form) => {dispatch(login(form))},
    cleanAuthErrors: () => {dispatch(cleanAuthErrors())}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)