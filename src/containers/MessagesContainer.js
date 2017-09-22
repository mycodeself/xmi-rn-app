import { connect } from 'react-redux'

import {MessagesScreen} from '../screens'
import {fetchMessages, pushMessage} from "../actions/messages";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.messages.isLoading,
    pushError: state.messages.pushError,
    fetchError: state.messages.fetchError,
    messages: state.messages.messages,
    errorMessage: state.messages.errorMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (topicKey) => {dispatch(fetchMessages(topicKey))},
    pushMessage: (message, topicKey, user) => {dispatch(pushMessage(message, topicKey, user))}
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesScreen)