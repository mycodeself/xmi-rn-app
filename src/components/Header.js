import React from 'react'
import { Text, StyleSheet } from 'react-native'
import {
  Container,
  Header as Head, 
  Left, 
  Button, 
  Icon, 
  Body, 
  Title,
  Right
} from 'native-base'

import colors from '../constants/colors'

const Header = (props) => {
  return (
      <Head style={props.style}>
        {
          (props.left)
            ?
            <Left>
              <Button
                transparent
                onPress={props.left.onPress}
              >
                <Icon name={props.left.icon} />
              </Button>
            </Left>
            : <Left />
        }
        <Body>
          <Title>
            {props.title}
          </Title>
        </Body>
        {
          (props.right) ?
            <Right>
              <Button transparent onPress={props.right.onPress}>
                {
                  props.right.text
                    ?
                    <Text style={styles.rightText}>{props.right.text}</Text>
                    : null
                }
                <Icon name={props.right.icon} />
              </Button>
            </Right>
            :
            <Right />
        }
      </Head>
  )
};

const styles = StyleSheet.create({
  rightText: {
    color: "white",
    marginRight: 6,
  }
});

export default Header