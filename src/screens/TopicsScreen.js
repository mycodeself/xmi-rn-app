import React from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Spinner } from 'native-base'

import {
  Header,
  SimpleFab,
  Modal,
  ChatTopicForm,
  TopicList
} from '../components';
import colors from '../constants/colors'

class TopicsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    }
  }

  componentWillMount() {
    if(!this.props.isLoggedIn){
      this.props.navigation.navigate("Auth");
      return;
    }
    this.props.fetchTopics();
  }

  componentWillReceiveProps() {
    if(this.props.pushSuccess) {
      this.props.navigation.navigate("Messages", this.props.topic)
    }
  }

  onSubmit(form) {
    this.props.pushTopic(form, this.props.user);
  }

  onClose() {
    this.setState({modalVisible: false});
    if(this.props.error) this.props.topicsErrorClear();
  }

  render() {
    if(this.props.isLoading) {
      return <Spinner color="red" />
    }
    return (
      <Container>
        <Header
          title="Comunícate"
          left={{onPress: () => this.props.navigation.navigate("DrawerOpen"), icon: 'menu'}}
        />
        <Content style={{backgroundColor:"white"}}>
          <TopicList
            navigation={this.props.navigation}
            topics={this.props.topics}
          />
        </Content>
        <SimpleFab
          icon="add"
          backgroundColor={colors.secondary}
          onPress={() => {this.setState({modalVisible: true})}}
        />
        <View>
          <Modal
            onBackButtonPress={this.onClose.bind(this)}
            onBackdropPress={this.onClose.bind(this)}
            isVisible={this.state.modalVisible}
          >
            <ChatTopicForm
              onSubmit={this.onSubmit.bind(this)}
              onClose={this.onClose.bind(this)}
            />
            {
              (this.props.error) ?
                <Text style={{color: "red"}}>{this.props.errorMessage}</Text>
                :null
            }
          </Modal>
        </View>
      </Container>
    )
  }
}

export default TopicsScreen