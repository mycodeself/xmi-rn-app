import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import colors from '../constants/colors'
import dateFormatted from "../utils/dateFormatted";
import {Avatar} from "./index";

const Message = (props) => {
  const isOwnMessage = (props.isOwnMessage) ? props.isOwnMessage : (props.user.uid === props.msg.user.uid);
  const styles = getStyles(isOwnMessage);
  return (
    <View style={styles.container} elevation={1}>
      {
        (!isOwnMessage)
          ? <NoOwnMessageContent msg={props.msg}/>
          : null
      }
    <Text style={styles.message}>
      {props.msg.text}
    </Text>
    <Text style={styles.time}>
      {dateFormatted(props.msg.time)}
    </Text>
    </View>
  )
};

const NoOwnMessageContent = (props) => (
  <View style={{flexDirection: "row"}}>
    <Avatar small user={props.msg.user} />
    <Text style={{
      alignSelf: "flex-end",
      fontSize: 12,
      marginLeft: 6,
      marginBottom: 10,
    }}>
      {props.msg.user.displayName} dice:
    </Text>
  </View>
);




const getStyles = (isOwnMessage) => {
  return StyleSheet.create({
    container: {
      alignSelf: (isOwnMessage) ? "flex-end" : "flex-start",
      backgroundColor: (isOwnMessage) ? "#ffe6e8" : "#F5F5F5",
      padding: 12,
      margin: 16,
      marginLeft: (isOwnMessage) ? 48 : 16,
      marginRight: (isOwnMessage) ? 16 : 48,
      borderRadius: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    },
    time: {
      fontSize: 8,
      alignSelf: "flex-end",
      marginTop: 6,
    },
    message: {
      color: "black",
      marginTop: (isOwnMessage) ? 0 : 4,
      // marginLeft: (isOwnMessage) ? 2 : 44,
      // marginTop: (isOwnMessage) ? 0 : -8,
    },
  });
};

export default Message