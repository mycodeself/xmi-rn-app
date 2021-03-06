import React from 'react'
import {Text,View} from 'react-native'
import {Container, Content} from 'native-base'

import {
  Header,
  Spinner,
  ListToWebView
} from "../../components/index";
import {fetchStudiesResources} from "../../firebase/firebase";
import colors from "../../constants/colors";

class StudiesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studies: [],
      isLoading: false,
    }
  }

  componentWillMount() {
    this.setState({isLoading: false})
    fetchStudiesResources((data) => {
      this.setState({
        isLoading: false,
        studies: data,
      })
    }, (error) => {
      // TODO: handle error
      this.setState({isLoading: true});
    })
  }

  render() {
    return (
      <Container>
        <Header
          title="Estudios"
          left={{
            onPress: () => this.props.navigation.navigate("Home"),
            icon: 'arrow-back'
          }}
        />
        <Content style={{backgroundColor: colors.contentBackgroundColor}}>
          {
            (this.state.isLoading)
              ? <Spinner />
              : <ListToWebView
                  navigation={this.props.navigation}
                  data={this.state.studies} />
          }
        </Content>
      </Container>
    )
  }
}

export default StudiesScreen