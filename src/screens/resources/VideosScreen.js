import React from 'react'
import {Text,View} from 'react-native'
import {Container, Content} from 'native-base'

import {
  Header,
  VideosList,
  Spinner
} from "../../components/index";
import {fetchVideosResources} from "../../firebase/firebase";
import colors from "../../constants/colors";

class VideosScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      isLoading: true,
    }
  }

  componentWillMount() {
    this.setState({isLoading: true});
    fetchVideosResources((data) => {
      this.setState({
        isLoading: false,
        videos: data
      })
    }, (error) => {
      //TODO: HANDLE ERROR
      this.setState({
        isLoading: true,
      })
    })
  }

  render() {
    return (
      <Container>
        <Header
          title="Vídeos"
          left={{
            onPress: () => this.props.navigation.navigate("Home"),
            icon: 'arrow-back'
          }}
        />
        <Content style={{paddingBottom: 60, backgroundColor: colors.contentBackgroundColor}} padder>
          {
            (this.state.isLoading)
              ? <Spinner />
              : <VideosList videos={this.state.videos}/>
          }
        </Content>
      </Container>
    )
  }
}

export default VideosScreen