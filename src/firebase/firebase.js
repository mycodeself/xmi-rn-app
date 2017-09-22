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