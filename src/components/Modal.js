import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RNModal from 'react-native-modal'

const Modal = (props) => {
  return (
    <View style={styles.container}>
      <RNModal {...props}>
        <View style={styles.modalContent}>
          {props.children}
        </View>
      </RNModal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

});

export default Modal
