import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {ListItem, Left, Right, Body, Button, Icon} from 'native-base'
import {removeMessagesByDeviceId} from "../firebase/avmessages";


const AVChatListItem = (props) => (
  <ListItem style={styles.listItem}>
    <Left>
      <Text>{props.chat.key}</Text>
    </Left>
    <Body>
    </Body>
    <Right>
      <View style={styles.iconsContainer}>
        {(!props.chat.read) ? <Icon style={styles.eyeIcon} name="eye"/> : null}
        <TouchableOpacity onPress={() => removeMessagesByDeviceId(props.chat.key)}>
          <Icon style={styles.trashIcon} name="trash"/>
        </TouchableOpacity>
      </View>
    </Right>
  </ListItem>
);

const styles = StyleSheet.create({
  listItem: {
    marginLeft: 0,
    paddingLeft: 8,
  },
  iconsContainer: {
    flexDirection: 'row'
  },
  trashIcon: {
    color: "#ff3440",
    fontSize: 32
  },
  eyeIcon: {
    marginRight: 16,
    fontSize: 20,
    marginTop: 6,
  }
});

export default AVChatListItem
