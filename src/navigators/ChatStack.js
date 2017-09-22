import { StackNavigator } from 'react-navigation'
import {
  ChatScreen,
} from '../screens'

import TopicsScreen from '../containers/TopicsContainer'
import MessagesContainer from '../containers/MessagesContainer'

const ChatStack = StackNavigator({
  Topics: {
    screen: TopicsScreen
  },
  Messages: {
    screen: MessagesContainer
  }
}, {
  headerMode: 'none'
});

export default ChatStack