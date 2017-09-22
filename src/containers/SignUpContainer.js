import { connect } from 'react-redux'

import SignUpScreen from '../screens/SignUpScreen'
import {signUp, cleanAuthErrors} from '../actions/auth'

const mapStateToProps = (state, ownProps) => {
  return {
    emailVerificationSent: state.auth.emailVerificationSent,
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (form) => {dispatch(signUp(form))},
    cleanAuthErrors: () => {dispatch(cleanAuthErrors())}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen)