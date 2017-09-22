import {rootRef} from "./firebase";
import DeviceInfo from 'react-native-device-info'

const ref = rootRef.child(`alasvivas/messages`);

export const pushMessage = (message) => {
  ref.child(DeviceInfo.getUniqueID()).push({
    text: message,
    time: Date.now()
  })
};

export const fetchCurrentDeviceMessages = () => {
  return fetchMessagesByDeviceId(DeviceInfo.getUniqueID());
};

export const fetchMessagesByDeviceId = (deviceId) =>
  new Promise((resolve, reject) => {
    ref.child(deviceId)
      .orderByChild('time').on('value', (snap) => {
      let data = [];
      snap.forEach((child) => {
        let item = child.val();
        item.key = child.key;
        data.push(item);
        resolve(data);
      });
    }, (error) => {
       reject(error);
    });
  });

export const fetchAllMessagesForAdminPromise = () =>
  new Promise((resolve, reject) => {
    ref
      .orderByChild('time').on('value',
      (snap) => {
        let data = [];
        snap.forEach((child) => {
          let item = child.val();
          item.key = child.key;
          data.push(item);
          data.reverse();
          resolve(data);
        })
      },
      (error) => {
        reject(error);
      })
  });

export const fetchAllMessagesForAdmin = (callback) =>{
  ref
    .orderByChild('time').on('value',
    (snap) => {
      let data = [];
      snap.forEach((child) => {
        let item = child.val();
        item.key = child.key;
        data.push(item);
        data.reverse();
        callback(data);
      })
    },
    (error) => {
      console.log(error);
    })
};

export const removeMessagesByDeviceId = (deviceId) => {
  ref.child(deviceId).remove();
};