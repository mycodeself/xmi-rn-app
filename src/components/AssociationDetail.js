import React from 'react'
import { View, Text, Linking, StyleSheet } from 'react-native'
import { Card, CardItem, Icon, H3 } from 'native-base'
import {AssociationMap, Hr} from "./";
import {associationVisit} from "../actions/statistics";

class AssociationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    associationVisit(this.props.association)
  }

  renderIfPresent(icon, text) {
    if(text) {
      return (
        <CardItem>
          <Icon name={icon} />
          <Text>{text}</Text>
        </CardItem>
      )
    }
  }

  renderPhoneCardItem() {
    if(this.props.association.phone) {
      return(
        <CardItem
          button
          onPress={() => Linking.open}
        >
          <Icon name="call" />
          <Text>{this.props.association.phone}</Text>
        </CardItem>
      )
    }
  }

  renderWebCardItem() {
    if(this.props.association.web) {
      return (
        <CardItem
          button
          onPress={() => this.props.navigation.navigate("WebView", {
            title: this.props.association.name, uri: this.props.association.web
          })}
        >
          <Icon name="globe" />
          <Text>{this.props.association.web}</Text>
        </CardItem>
      )
    }
  }

  render() {
    return (
      <Card>
        <CardItem
          header
          style={styles.header}
        >
          <H3>{this.props.association.name}</H3>
        </CardItem>
        {this.renderIfPresent("navigate", this.props.association.address +" "+ this.props.association.city)}
        {this.renderPhoneCardItem()}
        {this.renderIfPresent("mail", this.props.association.email)}
        {this.renderWebCardItem()}
        <Hr />
        <View>
           <AssociationMap association={this.props.association}/>
        </View>

      </Card>

    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: -6,
  }
});

export default AssociationDetail