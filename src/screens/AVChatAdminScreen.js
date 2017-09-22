import React from 'react'
import {View} from 'react-native'
import { Container, Content } from 'native-base'

import {
  Header,
} from '../components'

class AVChatAdminScreen extends React.Component {

  constructor(props) {
    super(props);
    this.deviceId = this.props.navigation.state.params.deviceId;
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {

    return (
      <Container>
        <Header
          title={association.name}
          left={{onPress: () => this.props.navigation.goBack(), icon: 'arrow-back'}}
        />
        <Content padder>
          <AssociationDetail navigation={this.props.navigation} association={ association } />
        </Content>
      </Container>
    )
  }
}

export default AVChatAdminScreen