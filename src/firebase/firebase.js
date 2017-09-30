import * as firebase from 'firebase'
import { config } from '../config/firebase'

firebase.initializeApp(config);

export const db = firebase.database();
export const rootRef = db.ref();

export const fetch = (refName, callback) => {
  const ref = rootRef.child(refName);
  ref.on("value", (snapshot) => {
    const data = [];
    snapshot.forEach((child) => {
      let item = child.val();
      item.key = child.key;
      data.push(item);
    });
    callback(data);
  }, (error) => {
    console.log("The read failed: " + error.code);
    callback(false);
  });
};

const fetchOrderByTime = (childRef, onSuccess, onError) => {
  rootRef.child(childRef)
    .orderByChild('time').on('value', (snap) => {
    const data = [];
    snap.forEach((child) => {
      let item = child.val();
      item.key = child.key;
      data.push(item);
    });
    onSuccess(data);
  }, (error) => {
    onError(error);
  })
};

export const fetchInfoResources = (onSuccess, onError) => {
  fetchOrderByTime('resources/info', onSuccess, onError);
};

export const fetchVideosResources = (onSuccess, onError) => {
  fetchOrderByTime('resources/videos', onSuccess, onError)
};

export const fetchStudiesResources = (onSuccess, onError) => {
  fetchOrderByTime('resources/studies', onSuccess, onError);
};

export const fetchAssociations = (callback) => {
  const ref = rootRef.child('associations');
  ref.orderByChild('name').on("value", (snapshot) => {
    const data = [];
    snapshot.forEach((child) => {
      let item = child.val() ;
      item.key = child.key;
      data.push(item);
    });
    callback(data);
  }, (error) => {
    console.log("The read failed: " + error.code);
    callback(false);
  });
};

export const fetchTestimonies = (callback) => {
  fetch("testimonies", callback);
};

export const fetchTopicsOrderByTime = (callback) => {
  const ref = rootRef.child('topics');
  ref.orderByChild('time').on('value', (snapshot) => {
    const data = [];
    snapshot.forEach((child) => {
      let item = child.val();
      item.key = child.key;
      data.push(item);
    });
    data.reverse();
    callback(data);
  }, (error) => {
    console.log("The read failed: " + error.code);
    callback(false);
  });
};

export const buildUserObject = (user) => {
  let userObject = {};
  userObject[user.uid] = {
    displayName: user.displayName,
    photoURL: user.photoURL
  };
  return userObject;
};

export default firebase