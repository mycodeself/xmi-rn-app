import firebase from '../firebase/firebase'
import errorsTranslations from '../firebase/errorsTranslations'

export const LOGIN = "LOGIN";
export const AUTH_LOADING = "AUTH_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_ERROR_CLEAN = "AUTH_ERROR_CLEAN";
export const LOGOUT = "LOGOUT";

export const auth = firebase.auth();

const authLoading = () => {
  return {
    type: AUTH_LOADING
  }
};

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user: user
  }
};

const authError = (error) => {
  return {
    type: AUTH_ERROR,
    errorCode: error.code,
    errorMessage: errorsTranslations[error.code]
  }
};

export const cleanAuthErrors = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_ERROR_CLEAN
    })
  }
};

const logOutSuccess = () => {
  return {
    type: LOGOUT
  }
};

export const logOut = () => {
  return (dispatch) => {
    dispatch(authLoading());
    auth.signOut().then(() => {
      dispatch(logOutSuccess())
    }).catch((error) => {
      dispatch(authError(error))
    });
  }
};

export const onAuthStateChanged = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        if(!user.emailVerified) {
          user.sendEmailVerification();
          dispatch(authError({
            code: "auth/email-not-verified"
          }))
        } else {
          dispatch(loginSuccess(user));
        }
      }else{
        dispatch(logOutSuccess())
      }
    })
  }
};

const preSignUpValidate = (form) => {
    if(form.name.length < 3) {
      return {
        code: "auth/name-too-short"
      }
    }
    if(form.firstPassword !== form.secondPassword) {
      return {
        code: "auth/passwords-not-match"
      }
    }
};

const signUpUserWithEmailAndPassword = (form) => {
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(form.email, form.firstPassword).then(() => {
      dispatch(() => {
        auth.currentUser.updateProfile({
          displayName: form.name
        }).then(() => {
          dispatch(onAuthStateChanged());
        }).catch((error) => {
          dispatch(authError(error));
        })
      });
    }).catch((error) => {
      dispatch(authError(error));
    });
  }
};

export const signUp = (form) => {
  return (dispatch) => {
    if(error = preSignUpValidate(form)) {
      dispatch(authError(error))
    } else {
      dispatch(signUpUserWithEmailAndPassword(form));
    }
  };
};

export const login = (form) => {
  return (dispatch) => {
    dispatch(authLoading());
    auth.signInWithEmailAndPassword(form.email, form.password).then(() => {
      dispatch(onAuthStateChanged());
    }).catch((error) => {
      dispatch(authError(error));
    })
  }
};