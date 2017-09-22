import {
  TOPIC_PUSH, TOPIC_PUSH_FAILURE, TOPIC_PUSH_SUCCESS, TOPICS_ERROR_CLEAR, TOPICS_FETCH, TOPICS_FETCH_FAILURE,
  TOPICS_FETCH_SUCCESS
} from "../actions/topics";

const defaultState = {
  isLoading: false,
  topics: [],
  error: false,
  errorMessage: ""
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOPICS_FETCH:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case TOPICS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        topics: action.topics
      });
    case TOPICS_FETCH_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        errorMessage: action.error.message
      });
    case TOPIC_PUSH:
      return Object.assign({}, state, {
        isLoading: true
      });
    case TOPIC_PUSH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });
    case TOPIC_PUSH_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        errorMessage: action.error.message,
      });
    case TOPICS_ERROR_CLEAR:
      return Object.assign({}, state, {
        error: false,
        errorMessage: "",
      });
    default:
      return state;
  }
};


export default reducer