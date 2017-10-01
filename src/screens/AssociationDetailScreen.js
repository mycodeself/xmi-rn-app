import React from 'react'
import {View} from 'react-native'
import { Container, Content } from 'native-base'

import {
  AssociationDetail,
  Header,
  AssociationMap
} from '../components'
import colors from "../constants/colors";

class AssociationDetailScreen extends React.Component {
  render() {
    const association = this.props.navigation.state.params.association;
    return (
      <Container>
        <Header
          title={association.name}
          left={{onPress: () => this.props.navigation.goBack(), icon: 'arrow-back'}}
        />
        <Content style={{backgroundColor: colors.contentBackgroundColor}} padder>
          <AssociationDetail navigation={this.props.navigation} association={ association } />
        </Content>
      </Container>
    )
  }
}

export default AssociationDetailScreen