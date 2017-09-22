import React from 'react'
import { View } from 'react-native'
import { Container, Content, Spinner } from 'native-base'
import YouTube from 'react-native-youtube'

import { Header, TestimoniesList } from '../components'
import { fetchTestimonies } from '../firebase/firebase'

class TestimonyScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      testimonies: Object,
      isDataLoaded: false
    }
  }

  componentWillMount() {
    fetchTestimonies((result) => {
      if(result) {
        this.setState({
          testimonies: result,
          isDataLoaded: true
        })
      }
    });
  }

  render() {
    return (
      <Container>
        <Header
          title="Testimonios"
          left={{onPress: () => this.props.navigation.navigate("DrawerOpen"), icon: 'menu'}}
        />
        <Content padder>
          <View>
            {/*<YouTube*/}
              {/*apiKey="AIzaSyDkQWcZq809-fdsBU2x-reMS4QyybxxQI4"*/}
              {/*videoId="KVZ-P-ZI6W4"   // The YouTube video ID*/}
              {/*play={true}             // control playback of video with true/false*/}
              {/*fullscreen={true}       // control whether the video should play in fullscreen or inline*/}
              {/*loop={true}             // control whether the video should loop when ended*/}

              {/*onReady={e => this.setState({ isReady: true })}*/}
              {/*onChangeState={e => this.setState({ status: e.state })}*/}
              {/*onChangeQuality={e => this.setState({ quality: e.quality })}*/}
              {/*onError={e => this.setState({ error: e.error })}*/}

              {/*style={{ alignSelf: 'stretch', height: 300 }}*/}
            {/*/>*/}
            {
              (this.state.isDataLoaded) ?
                <TestimoniesList testimonies={this.state.testimonies}/>
                :
                <Spinner color="red" />
            }
          </View>
        </Content>
      </Container>
    )
  }
}

export default TestimonyScreen