import { connect } from 'react-redux'

import ProfileScreen from '../screens/ProfileScreen'
import {pushAvatar} from "../actions/user";
import {logOut} from "../actions/auth";

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushAvatar: (image, user) => {dispatch(pushAvatar(image, user))},
    logOut: () => {dispatch(logOut())}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)