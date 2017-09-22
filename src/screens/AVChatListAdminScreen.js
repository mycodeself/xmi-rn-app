import React from 'react'
import { View, Text } from 'react-native'
import {
  Container,
  Content,
  Spinner,
  List,
} from 'native-base'

import {Header,AVChatListItem} from '../components';
import {fetchAllMessagesForAdmin} from "../firebase/avmessages";

class AVChatListAdminScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      chats: []
    }
  }

  componentWillMount() {
    // if(!this.props.isLoggedIn && !this.props.isAdmin){
    //   this.props.navigation.navigate("Auth");
    //   return;
    // }
    // this.props.fetchTopics();
    fetchAllMessagesForAdmin((data) => {
      this.setState({
        chats: data,
        isLoading: false,
      })
    });

  //   fetchAllMessagesForAdmin().then((data) => {
  //     this.setState({
  //       chats: data,
  //       isLoading: false,
  //     });
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  }

  render() {
    if(this.props.isLoading) {
      return <Spinner color="red" />
    }
    return (
      <Container>
        <Header
          title="Chats"
          left={{onPress: () => this.props.navigation.navigate("DrawerOpen"), icon: 'menu'}}
        />
        <Content style={{backgroundColor:"white"}}>
          <List
            dataArray={this.state.chats}
            renderRow={(chat) => <AVChatListItem chat={chat} key={chat.key} />}
          />
        </Content>
      </Container>
    )
  }
}

export default AVChatListAdminScreen