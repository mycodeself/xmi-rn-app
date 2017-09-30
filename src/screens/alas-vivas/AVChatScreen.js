import React from 'react'
import {StyleSheet, View, Image,Text} from 'react-native'
import {Container, Content, Spinner} from 'native-base'

import { Header, Scroller, ChatInput, Message } from '../../components/index'
import {fetchCurrentDeviceMessages, pushMessage} from "../../firebase/avmessages";


class AVChatScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      messages: [],
    }
  }

  componentWillMount() {
    this.setState({isLoading: true});
    fetchCurrentDeviceMessages((data) => {
      this.setState({messages: data, isLoading: false})
    }, (error) => console.log(error))
  }



  render() {
    return (
      <Container>
        <Header
          title="Habla"
          left={{onPress: () => this.props.navigation.navigate("DrawerOpen"), icon: 'menu'}}
        />
        <View style={styles.content}>
          <View style={styles.backgroundImage}>
            <Image source={require('../../../assets/images/chat-background.jpg')} />
          </View>
          <Scroller>

            {
              (this.state.isLoading)
                ? <Spinner color="red"/>
                : this.state.messages.map(msg => {return <Message key={msg.key} msg={msg} isOwnMessage={true}/>})
            }
          </Scroller>
          <ChatInput onSend={(message) => pushMessage(message)}/>
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

export default AVChatScreen