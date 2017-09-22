import { connect } from 'react-redux'

import HomeScreen from '../screens/HomeScreen'
import {logOut, onAuthStateChanged} from "../actions/auth";

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {dispatch(logOut())},
    onAuthStateChanged: () => {dispatch(onAuthStateChanged())}
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)