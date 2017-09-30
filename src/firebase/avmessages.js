import {rootRef} from "./firebase";
import DeviceInfo from 'react-native-device-info'

const ref = rootRef.child(`alasvivas/messages`);

export const pushAdminMessage = (deviceId, message) => {
  ref.child(deviceId).push({
    text: message,
    time: Date.now(),
    deviceId: DeviceInfo.getUniqueID()
  })
};

export const pushMessage = (message) => {
  const deviceId = DeviceInfo.getUniqueID();
  ref.child(deviceId).push({
    text: message,
    time: Date.now(),
    deviceId: deviceId,
  })
};

export const fetchCurrentDeviceMessages = (onSuccess, onError) => {
  fetchMessagesByDeviceId(DeviceInfo.getUniqueID(), onSuccess, onError);
};

export const fetchMessagesByDeviceId = (deviceId, onSuccess, onError) => {
  ref.child(deviceId)
    .orderByChild('time').on('value', (snap) => {
    let data = [];
    snap.forEach((child) => {
      let item = child.val();
      item.key = child.key;
      data.push(item);
    });
    onSuccess(data);
  }, (error) => {
    onError(error);
  });
};


// export const fetchAllMessagesForAdmin = () =>
//   new Promise((resolve, reject) => {
//     ref
//       .orderByChild('time').on("value",
//       (snap) => {
//         let data = [];
//         snap.forEach((child) => {
//           let item = child.val();
//           item.key = child.key;
//           data.push(item);
//           data.reverse();
//         });
//         resolve(data);
//       },
//       (error) => {
//         reject(error);
//       })
//   });

export const fetchAllMessagesForAdmin = (callback) =>{
  ref
    .orderByChild('time').on('value',
    (snap) => {
      let data = [];
      snap.forEach((child) => {
        let item = child.val();
        item.key = child.key;
        data.push(item);
      });
      data.reverse();
      callback(data);
    },
    (error) => {
      console.log(error);
    })
};

export const removeMessagesByDeviceId = (deviceId) => {
  ref.child(deviceId).remove();
};