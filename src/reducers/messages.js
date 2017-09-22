import {
  MESSAGE_PUSH, MESSAGE_PUSH_FAILURE, MESSAGE_PUSH_SUCCESS,
  MESSAGES_FETCH, MESSAGES_FETCH_FAILURE, MESSAGES_FETCH_SUCCESS
} from "../actions/messages";

const defaultState = {
  isLoading: false,
  messages: [],
  pushError: false,
  fetchError: false,
  errorMessage: ""
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case MESSAGE_PUSH:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case MESSAGE_PUSH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
      });
    case MESSAGE_PUSH_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        pushError: true,
        errorMessage: action.error.message
      });
    case MESSAGES_FETCH:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case MESSAGES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        messages: action.messages
      });
    case MESSAGES_FETCH_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        fetchError: true,
        errorMessage: action.error.message
      });
    default:
      return state;
  }
};

export default reducer