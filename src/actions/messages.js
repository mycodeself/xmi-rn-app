import {rootRef, buildUserObject} from '../firebase/firebase'
import errorsTranslations from '../firebase/errorsTranslations'

export const MESSAGES_FETCH = 'MESSAGES_FETCH';
export const MESSAGES_FETCH_SUCCESS = 'MESSAGES_FETCH_SUCCESS';
export const MESSAGES_FETCH_FAILURE = 'MESSAGES_FETCH_FAILURE ';
export const MESSAGE_PUSH = 'MESSAGE_PUSH';
export const MESSAGE_PUSH_SUCCESS = 'MESSAGE_PUSH_SUCCESS';
export const MESSAGE_PUSH_FAILURE = 'MESSAGE_PUSH_FAILURE';
export const MESSAGES_CLEAR_STATE = 'MESSAGES_CLEAR_STATE';

export const pushMessage = (message, topicKey, user) => {
  return (dispatch) => {
    if(message.length <= 0) {
      return;
    }
    dispatch(messagePush());
    const ref = rootRef.child("topics/"+topicKey+"/messages");
    const userObj = buildUserObject(user);
    ref.push({
      text: message,
      time: Date.now(),
      user: userObj
    }).then(() => {
      dispatch(messagePushSuccess())
    }).catch((error) => {
      dispatch(messagesPushFailure(error))
    })
  }
};

export const fetchMessages = (topicKey) => {
  return (dispatch) => {
    dispatch(messagesFetch());
    const ref = rootRef.child("topics/"+topicKey+"/messages");
    ref.orderByChild('time').on('value', (snapshot) => {
      const messages = [];
      snapshot.forEach((child) => {
        let message = child.val();
        const userUID = Object.keys(message.user)[0];
        message.key = child.key;
        message.user = message.user[userUID];
        message.user.uid = userUID;
        messages.push(message);
      });
      dispatch(messagesFetchSuccess(messages))
    }, (error) => {
      dispatch(messagesFetchFailure(error))
    });
  }
};

const messagesFetch = () => {
  return {
    type: MESSAGES_FETCH
  }
};

const messagesFetchSuccess = (messages) => {
  return {
    type: MESSAGES_FETCH_SUCCESS,
    messages: messages
  }
};

const messagesFetchFailure = (error) => {
  return {
    type: MESSAGES_FETCH_FAILURE,
    error: error
  }
};

const messagePush = () => {
  return {
    type: MESSAGE_PUSH
  }
};

const messagePushSuccess = () => {
  return {
    type: MESSAGE_PUSH_SUCCESS,
  }
};

const messagesPushFailure = (error) => {
  return {
    type: MESSAGE_PUSH_FAILURE,
    error: error
  }
};