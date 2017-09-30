import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import {Container, Content, Spinner} from 'native-base'
import DeviceInfo from 'react-native-device-info'
import { Header, Scroller, ChatInput, AVMessage } from '../../components/index'
import {fetchMessagesByDeviceId, pushAdminMessage} from "../../firebase/avmessages";


class AVChatAdminScreen extends React.Component {
  constructor(props) {
    super(props);
    this.deviceId = this.props.navigation.state.params.deviceId;
    this.state = {
      isLoading: false,
      messages: [],
    }
  }

  componentWillMount() {
    this.setState({isLoading: true});
    fetchMessagesByDeviceId(this.deviceId,
      (data) => {
        this.setState({isLoading: false, messages: data})
      },
      (error) => {
        console.log(error);
      })
  }



  render() {
    return (
      <Container>
        <Header
          title="Habla"
          left={{onPress: () => this.props.navigation.goBack(), icon: 'arrow-back'}}
        />
        <View style={styles.content}>
          <View style={styles.backgroundImage}>
            <Image source={require('../../../assets/images/chat-background.jpg')} />
          </View>
          <Scroller>

            {
              (this.state.isLoading)
                ? <Spinner color="red"/>
                : this.state.messages.map(msg => {
                  return <AVMessage key={msg.key} msg={msg} isOwnMessage={DeviceInfo.getUniqueID() === msg.deviceId}/>})
            }
          </Scroller>
          <ChatInput onSend={(message) => pushAdminMessage(this.deviceId, message)}/>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  content: {
    flex: 1,
  },
  messagesContainer: {
    flex:2
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

export default AVChatAdminScreen