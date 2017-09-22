import firebase, {rootRef} from '../firebase/firebase'
import errorsTranslations from '../firebase/errorsTranslations'
import RNFetchBlob from 'react-native-fetch-blob'
import {Platform} from 'react-native'

export const USER_AVATAR_PUSH = 'USER_AVATAR_PUSH';
export const USER_AVATAR_PUSH_SUCCESS = 'USER_AVATAR_PUSH_SUCCESS';
export const USER_AVATAR_PUSH_FAILURE = 'USER_AVATAR_PUSH_FAILURE';

const storage = firebase.storage();

const fs = RNFetchBlob.fs;
const Blob = RNFetchBlob.polyfill.Blob;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;


const avatarPush = () => {
  return {
    type: USER_AVATAR_PUSH,
  }
};

const avatarPushSuccess = (avatar) => {
  return {
    type: USER_AVATAR_PUSH,
    avatar: avatar,
  }
};

const avatarPushFailure = (error) => {
  return {
    type: USER_AVATAR_PUSH_FAILURE,
    error: error
  }
};

const multiPathUpdate = (user) => {
  const userTopics = rootRef.child(`userTopics/${user.uid}`);
  const userMessages = rootRef.child(`userMessages/${user.uid}`);
  let updateObject = {};
  return userTopics.once('value').then(snap => {
    const topicKeys = Object.keys(snap.val());
    topicKeys.forEach(key => {
      updateObject[`topics/${key}/user/${user.uid}/photoURL`] = user.photoURL;
    });
    return userMessages.once('value').then(snap => {
      snap.forEach(child => {
        const val = child.val();
        const key = child.key;
        updateObject[`topics/${child.val()}/messages/${child.key}/user/${user.uid}/photoURL`] = user.photoURL;
      });
      return rootRef.update(updateObject);
    });
  })
};

export const pushAvatar = (image, user) => {
  return (dispatch) => {
    dispatch(avatarPush());
    const ref = storage.ref().child('avatars/'+user.uid);
    const uri = Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri;
    fs.readFile(uri, 'base64')
      .then((data) => {
      return Blob.build(data, { type: `${image.mime};BASE64` });
    }).then((blob) => {
      ref.put(blob, { contentType: image.mime })
      .then((snapshot) => {
        user.updateProfile({
          photoURL: snapshot.metadata.downloadURLs[0]
        }).then(() => {
          multiPathUpdate(user).then(() => {
            dispatch(avatarPushSuccess())
          }).catch(error => {
            avatarPushFailure(error);
          })
        }).error((error) => {
          dispatch(avatarPushFailure(error))
        });
      }).catch((error) => {
        dispatch(avatarPushFailure(error))
      });
    }).catch((error) => {
      dispatch(avatarPushFailure(error))
    }).catch((error) => {
      dispatch(avatarPushFailure(error))
    });
  }
};

