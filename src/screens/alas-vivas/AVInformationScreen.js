import React from 'react'

import {Container, Content} from 'native-base'

import { Header } from '../../components/index'

class AVInformationScreen extends React.Component {


  render() {
    return (
      <Container>
        <Header
          title="Información"
          left={{onPress: () => this.props.navigation.navigate("DrawerOpen"), icon: 'menu'}}
        />
        <Content>

        </Content>
      </Container>
    )
  }
}

export default AVInformationScreen