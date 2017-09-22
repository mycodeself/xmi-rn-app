import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR_CLEAN,
  AUTH_LOADING,
} from "../actions/auth"

const defaultState = {
  user: Object,
  emailVerificationSent: false,
  isLoading: false,
  isLoggedIn: false,
  error: false,
  errorCode: "",
  errorMessage: "",
};

export default reducer = (state = defaultState, action) => {
  switch(action.type) {
    case AUTH_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoading: false,
        user: action.user,
        error: false,
        errorMessage: "",
        errorCode: ""
      });
    case AUTH_ERROR:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoading: false,
        error: true,
        errorCode: action.errorCode,
        errorMessage: action.errorMessage,
        emailVerificationSent: (action.errorCode === "auth/email-not-verified")
      });
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoading: false,
        user: Object,
      });
    case AUTH_ERROR_CLEAN:
      return Object.assign({}, state, {
        error: false,
        errorCode: "",
        errorMessage: "",
        emailVerificationSent: (state.errorCode === "auth/email-not-verified")
      });
    default:
      return state;
  }
}