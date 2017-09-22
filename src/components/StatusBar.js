import React from 'react'
import {
  StatusBar as StatusBarRN,
  View,
  StyleSheet,
} from 'react-native'

import colors from '../constants/colors'

const StatusBar = () => (
  <View style={styles.container}>
    <StatusBarRN
      barStyle="light-content"/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: colors.primary
  },
});

export default StatusBar
