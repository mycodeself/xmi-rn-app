import React from 'react'
import {Text,StyleSheet,View} from 'react-native'
import {List, ListItem, Thumbnail} from 'native-base'

import dateFormatted from '../utils/dateFormatted'
import {Avatar} from "./index";

const MAX_TOPIC_TEXT_LENGTH = 80;

const TopicItem = (props) => {
  const text = (props.topic.text.length > MAX_TOPIC_TEXT_LENGTH)
    ? props.topic.text.substring(0, MAX_TOPIC_TEXT_LENGTH)+"..."
    : props.topic.text;


  return (
    <ListItem onPress={() =>
      props.navigation.navigate("Messages", {
        topic: props.topic
      })}
      style={styles.item}
    >
      <Avatar user={props.topic.user}/>
      <View style={styles.topicContainer}>
        <Text style={styles.title}>
          {props.topic.title}
        </Text>
        <Text style={styles.text}>
          {text}
        </Text>
        <View>
          <Text style={styles.displayName}>
            Conversación empezada por: {props.topic.user.displayName}
          </Text>
          <Text style={styles.time}>
            {dateFormatted(props.topic.time)}
          </Text>
        </View>
      </View>
    </ListItem>
  )
};
const TopicList = (props) => (
  <List
    style={styles.list}
    dataArray={props.topics}
    renderRow={(topic) =>
      <TopicItem
        navigation={props.navigation}
        topic={topic}
      />
    }
  />
);

const styles = StyleSheet.create({
  list: {
    // backgroundColor: "red",
  },
  item: {
    marginLeft: 0,
    // backgroundColor: "green",
    paddingLeft: 16
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",

  },
  text: {
    color: "black",
  },
  topicContainer: {
    flex: 1,
    marginLeft: 12
  },
  displayName: {
    alignSelf: "flex-end",
    fontSize: 12,
  },
  time: {
    alignSelf: "flex-end",
    fontSize: 12,
  }
});

export default TopicList