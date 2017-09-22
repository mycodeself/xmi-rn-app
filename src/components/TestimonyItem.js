import React from 'react'
import { Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import { Card, CardItem, Icon, Button, Left, Body, Thumbnail } from 'native-base'
import Collapsible from 'react-native-collapsible';

const initialHeight = 100;
const animationDuration = 500;

class TestimonyItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  renderArrowIcon() {
    if(this.state.expanded) {
      return <Icon name="ios-arrow-up-outline" />
    }
    return <Icon name="ios-arrow-down-outline" />
  }

  render() {
    return (
      <Card style={{elevation: 3}}>
        <CardItem>
          <Left>
            <Thumbnail
              circular
              source={{uri: 'http://thelodgeiow.com/wp-content/uploads/2014/10/blank_woman2.jpg' }} />
            <Body>
              <Text>{this.props.testimony.author}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Collapsible
            collapsed={!this.state.expanded}
            collapsedHeight={initialHeight}
            duration={animationDuration}
          >
            <Text>{this.props.testimony.text}</Text>
          </Collapsible>
        </CardItem>
        <TouchableHighlight
          underlayColor="rgba(230, 230, 230, 0.5)"
          onPress={() => {this.setState({expanded: !this.state.expanded})}}
        >
          <CardItem style={styles.footer}>
              {this.renderArrowIcon()}
          </CardItem>
        </TouchableHighlight>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    height: 32,
  }
});

export default TestimonyItem