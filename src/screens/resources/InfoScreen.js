import React from 'react'
import {Text,View} from 'react-native'
import {Container, Content} from 'native-base'

import {
  Header, ListToWebView, Spinner
} from "../../components/index";
import {fetchInfoResources} from "../../firebase/firebase";
import colors from "../../constants/colors";

class InfoScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      info: []
    }
  }

  componentWillMount() {
    this.setState({isLoading: true});
    fetchInfoResources((data) => {
      this.setState({
        isLoading: false,
        info: data
      })
    }, (error) => {
      // handle error
    })
  }

  render() {
    return (
      <Container>
        <Header
          title="Información"
          left={{
            onPress: () => this.props.navigation.navigate("DrawerOpen"),
            icon: 'menu'
          }}
        />
        <Content style={{backgroundColor: colors.contentBackgroundColor}}>
          {
            (this.state.isLoading)
              ? <Spinner />
              : <ListToWebView data={this.state.info} navigation={this.props.navigation}/>
          }
        </Content>
      </Container>
    )
  }
}

export default InfoScreen