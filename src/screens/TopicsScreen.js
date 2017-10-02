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

  componentWillReceiveProps(nextProps) {
    if(nextProps.pushSuccess) {
      this.setState({modalVisible: false});
      this.props.navigation.navigate("Messages", {topic: nextProps.topic})
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
          title="Conversaciones"
          left={{onPress: () => this.props.navigation.goBack(), icon: 'arrow-back'}}
        />
        <Content style={{backgroundColor:colors.contentBackgroundColor}}>
          {
            (this.props.topics.length > 0)
              ?
              <TopicList
                navigation={this.props.navigation}
                topics={this.props.topics}
              />
              :
              <Text style={{textAlign: 'center', marginTop: 8, fontSize: 18}}>
                No existen conversaciones actualmente... ¡Comienza una!
              </Text>
          }
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