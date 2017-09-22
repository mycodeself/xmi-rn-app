import {rootRef} from '../firebase/firebase';
import DeviceInfo from 'react-native-device-info'

export const STATISTICS_APP_START = 'STATISTICS_APP_START';
export const STATISTICS_VISIT_ASSOCIATION = 'STATISTICS_VISIT_ASSOCIATION';

const statisticsRef = rootRef.child(`statistics/${DeviceInfo.getUniqueID()}`);
/**
 * {
 *  statistics: {
 *    $deviceId: {
 *      startTimes: number,
 *      associationVisits: {
 *        $associationKey: number,
 *      },
 *      testimoniesVisits: number/{$testimonyKey: number}
 *    }
 *  }
 * }
 *
 */

const setStatistics = (statistics) => {
  statisticsRef.set(statistics);
};

const getStatisticsOnce = (callback) => {
  statisticsRef.once('value').then((snap) => {
    const statistics = (snap.val()) ? snap.val() : {};
    callback(statistics);
  }).catch((error) => console.log(error));
};

export const appStart = () => {
  getStatisticsOnce((statistics) => {
    if(!statistics.hasOwnProperty('startTimes')) {
      statistics.startTimes = 1;
    }else{
      statistics.startTimes += 1;
    }
    setStatistics(statistics)
  });
};

export const associationVisit = (association) => {
  getStatisticsOnce((statistics) => {
    if(!statistics.hasOwnProperty('associationVisits')) {
      statistics.associationVisits = {};
      statistics.associationVisits[association.key] = 1;
    } else if(!statistics.associationVisits.hasOwnProperty(association.key)) {
      statistics.associationVisits[association.key] = 1;
    } else {
      statistics.associationVisits[association.key] += 1;
    }
    setStatistics(statistics);
  });
};
