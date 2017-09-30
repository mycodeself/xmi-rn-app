import React from 'react'
import {Text} from 'react-native'
import {List, ListItem, Icon, Left, Right} from 'native-base'

const Item = (props) => (
  <ListItem
    style={{marginLeft: 0}}
    onPress={() => props.onPress()}>
    <Left>
      <Text style={{marginLeft: 8}}>{props.item.title}</Text>
    </Left>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

const ListToWebView = (props) => (
 <List
  dataArray={props.data}
  renderRow={(item) =>
    <Item
      onPress={() => props.navigation.navigate("WebView", {
        title: item.title,
        uri: item.url,
      })}
      item={item} />
  }
 />
);

export default ListToWebView