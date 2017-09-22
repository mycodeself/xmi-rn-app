import { connect } from 'react-redux'

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordScreen)