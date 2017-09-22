import React from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

import {
  Container,
  Content,
  Spinner,
  Form,
  Item,
  Input,
} from 'native-base'

import {
  Header,
  ChatInput,
  Scroller,
  Message
} from '../components'

class MessagesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.topic = this.props.navigation.state.params.topic;
    this.scrollView = null;
    this.state = {
    }
  }

  componentWillMount() {
    //TODO: UNCOMMENT SECURITY GUARD
    if(!this.props.isLoggedIn){
      this.props.navigation.navigate("Auth");
      return;
    }
    this.props.fetchMessages(this.topic.key)
  }

  onSend(message) {
    this.props.pushMessage(message, this.topic.key, this.props.user);
  }

  render() {
    if(this.props.isLoading) {
      return <Spinner color="red" />
    }
    return (
      <Container>
        <Header
          back
          title={this.topic.title}
          left={{
            onPress: () => this.props.navigation.goBack(),
            icon: 'arrow-back'
          }}
        />
        <View style={styles.content}>
          <View style={styles.backgroundImage}>
            <Image source={require('../../assets/images/chat-background.jpg')} />
          </View>
          <Scroller>
            {this.props.messages.map(msg => {
              return <Message key={msg.key} msg={msg} user={this.props.user} />
            })}
          </Scroller>
          <ChatInput onSend={this.onSend.bind(this)}/>
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

export default MessagesScreen