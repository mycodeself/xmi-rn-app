import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import { List, Card, CardItem, Body, Icon, Button } from 'native-base'
import YouTube from 'react-native-youtube'


class Video extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    }
  }

  close() {
    this.setState({playing: false});
  }

  onPlay() {
    this.props.onPlay();
    this.setState({playing: true});
  }

  render() {

    if(this.state.playing) {
      return (
        <YouTube
          controls={2}
          apiKey="AIzaSyDkQWcZq809-fdsBU2x-reMS4QyybxxQI4"
          videoId={this.props.videoId}   // The YouTube video ID
          play
          style={{
            alignSelf: 'stretch', height: 300, marginTop: 12,
          }}
          onChangeState={e => {
            (e.state === 'ended') ? this.close() : null
          }}
        />
      )
    }

    return (
      <View>
        <Button
          style={styles.playButton}
          small
          success
          iconRight
          onPress={() => this.onPlay()}
        >
          <Text style={{color: "white"}}>Ver vídeo</Text>
          <Icon style={{marginLeft: 6}} name="play" />
        </Button>
      </View>
    )

  }
}

class VideoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  close() {
    this.refs.videoRef.close();
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Body style={styles.itemBody}>
          <Text style={styles.videoTitle}>
            {this.props.video.title}
          </Text>
          <Video
            ref="videoRef"
            onPlay={this.props.onPlay}
            videoId={this.props.video.youtubeId} />
          </Body>
        </CardItem>
      </Card>
    )
  }
}

class VideosList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refs: []
    }
  }

  addReference(ref) {
    const refs = this.state.refs;
    refs.push(ref);
    this.setState({refs: refs});
  }

  closeAllVideos() {
    this.state.refs.forEach((ref) => {
      ref.close();
    });
  }

  render() {
    return (
      <List
        dataArray={this.props.videos}
        renderRow={(video) => {
          return <VideoItem
            ref={ref => this.addReference(ref)}
            video={video}
            key={video.key}
            onPlay={() => this.closeAllVideos()}
          />
        }}
      />
    )
  }
}


const styles = StyleSheet.create({
  itemBody: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  videoTitle: {
    color: 'black',
    textAlign: 'center'
  },
  playButton: {
    marginTop: 12,
  }
});

export default VideosList
