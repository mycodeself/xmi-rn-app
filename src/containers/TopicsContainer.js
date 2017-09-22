import { connect } from 'react-redux'

import TopicsScreen from '../screens/TopicsScreen'
import {fetchTopicsOrderByTime, pushTopic, topicsErrorClear} from "../actions/topics";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.topics.isLoading,
    topics: state.topics.topics,
    error: state.topics.error,
    errorMessage: state.topics.errorMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopics: () => {dispatch(fetchTopicsOrderByTime())},
    pushTopic: (form, user) => {dispatch(pushTopic(form, user))},
    topicsErrorClear: () => {dispatch(topicsErrorClear())}
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsScreen)