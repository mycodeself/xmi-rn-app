import { connect } from 'react-redux'

import Drawer from '../components/Drawer'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn
  }
};

export default connect(mapStateToProps)(Drawer)