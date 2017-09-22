import {
  USER_AVATAR_PUSH, USER_AVATAR_PUSH_FAILURE, USER_AVATAR_PUSH_SUCCESS
} from "../actions/user";

const defaultState = {
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_AVATAR_PUSH:
      return Object.assign({}, state, {
      });
    case USER_AVATAR_PUSH_SUCCESS:
      return Object.assign({}, state, {
      });
    case USER_AVATAR_PUSH_FAILURE:
      return Object.assign({}, state, {
        error: true,
        errorObject: action.error,
        errorMessage: action.error.message
      });
    default:
      return state;
  }
};

export default reducer