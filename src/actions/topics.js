import {buildUserObject, rootRef} from '../firebase/firebase'
import errorsTranslations from '../firebase/errorsTranslations'
import {pushMessage} from "./messages";

export const TOPICS_FETCH = 'TOPICS_FETCH';
export const TOPICS_FETCH_SUCCESS = 'TOPICS_FETCH_SUCCESS';
export const TOPICS_FETCH_FAILURE = 'TOPICS_FETCH_FAILURE';
export const TOPIC_PUSH = 'TOPIC_PUSH';
export const TOPIC_PUSH_SUCCESS = 'TOPIC_PUSH_SUCCESS';
export const TOPIC_PUSH_FAILURE = 'TOPIC_PUSH_FAILURE';
export const TOPICS_ERROR_CLEAR = 'TOPICS_ERROR_CLEAR';

const MAX_TITLE_LENGTH = 100;
const MIN_TITLE_LENGTH = 10;
const MIN_TEXT_LENGTH = 35;

const topicsRef = rootRef.child('topics');

topicsRef.on('child_added', (snap, prevChildKey) => {
  const userUID = Object.keys(snap.val().user);
  const ref = rootRef.child(`userTopics/${userUID}`);
  const obj = {};
  obj[snap.key] = true;
  ref.update(obj);
  topicsRef.child(`${snap.key}/messages`).on('child_added', (messageSnap, prevChildKey) => {
    const userUID = Object.keys(messageSnap.val().user);
    const ref = rootRef.child(`userMessages/${userUID}`);
    const obj = {};
    obj[messageSnap.key] = snap.key;
    ref.update(obj);
  });
});


export const pushTopic = (form, user) => {
  return (dispatch) => {
    dispatch(topicPush());
    const error = validateForm(form);
    if(error) {
      dispatch(topicPushFailure(error));
      return;
    }
    const userObj = buildUserObject(user);
    topicsRef.push({
      title: form.title,
      time: Date.now(),
      user: userObj
    }).then((snap) => {
      dispatch(pushMessage(form.text, snap.key, user));
    }).catch((error) => {
      topicPushFailure(error)
    });
  };
};

export const fetchTopicsOrderByTime = () => {
  return (dispatch) => {
    dispatch(topicsFetch());
    topicsRef.orderByChild('time').on('value', (snapshot) => {
      const topics = [];
      snapshot.forEach((child) => {
        let topic = child.val();
        let userUID = Object.keys(topic.user)[0];
        topic.key = child.key;
        topic.user = topic.user[userUID];
        topic.user.uid = userUID;
        topics.push(topic);
      });
      topics.reverse();
      dispatch(topicsFetchSuccess(topics))
    }, (error) => {
      dispatch(topicsFetchFailure(error))
    });
  }
};

const validateForm = (form) => {
  const error = {
    message: "",
  };
  if(form.title.length < MIN_TITLE_LENGTH || form.title.length > MAX_TITLE_LENGTH) {
    error.message = "El título debe contener como mínimo "+MIN_TITLE_LENGTH+" carácteres y "+MAX_TITLE_LENGTH+" como máximo";
    return error;
  }
  if(form.text.length < MIN_TEXT_LENGTH) {
    error.message = "El primer mensaje de la conversación debe contener como mínimo "+MIN_TEXT_LENGTH+" carácteres";
    return error;
  }
  return false;
};

const topicPush = () => {
  return {
    type: TOPIC_PUSH,
  }
};

const topicPushSuccess = () => {
  return {
    type: TOPIC_PUSH_SUCCESS
  }
};

const topicPushFailure = (error) => {
  return {
    type: TOPICS_FETCH_FAILURE,
    error: error
  }
};

const topicsFetch = () => {
  return {
    type: TOPICS_FETCH
  }
};

const topicsFetchSuccess = (topics) => {
  return {
    type: TOPICS_FETCH_SUCCESS,
    topics: topics
  }
};

const topicsFetchFailure = (error) => {
  return {
    type: TOPICS_FETCH_FAILURE,
    error: error
  }
};

export const topicsErrorClear = () => {
  return {
    type: TOPICS_ERROR_CLEAR
  }
};