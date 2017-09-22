import React, { Dimensions } from 'react'
import {
  List,
  ListItem,
  Left,
  Body,
  Right,
  Icon,
  Text
} from 'native-base'

export default class AssociationsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List
        dataArray={this.props.associations}
        renderRow={(association) =>
            <ListItem
              button
              onPress={() => {
                this.props.navigation.navigate("AssociationDetail", {
                  association: association
                })
              }}
              style={{
                marginLeft: 0
              }}
            >
              <Left>
                <Text>{association.name}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
        }
      />
    )
  }
}