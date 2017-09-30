import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import {Icon} from 'native-base'

import {
  AlasVivasScreen,
  AVInformationScreen,
  AVChatScreen,
  AVChatListAdminScreen,
  AVChatAdminScreen
} from '../screens'

import colors from '../constants/colors'

const AVAdminChatStack = StackNavigator({
  AVChatListAdmin: {
    screen: AVChatListAdminScreen,
    navigationOptions: {
      title: 'Mensajes',
    },
  },
  AVChatAdmin: {
    screen: AVChatAdminScreen,
    navigationOptions: {
      title: 'Habla',
    }
  }
}, {
  headerMode: 'none'
});

const AlasVivasStack = TabNavigator({
  AlasVivasHome: {
    screen: AlasVivasScreen,
    navigationOptions: {
      title: 'Alas Vivas',
      tabBarIcon: ({focused, tintColor}) =>
        <Icon style={{color: tintColor}} name="home" />,
    }
  },
  AVInformation: {
    screen: AVInformationScreen,
    navigationOptions: {
      title: 'Información',
      tabBarIcon: ({focused, tintColor}) =>
        <Icon style={{color: tintColor}} name="information-circle" />,
    },
  },
  AVChat: {
    screen: AVChatScreen,
    navigationOptions: {
      title: 'Habla con especialistas',
      tabBarIcon: ({focused, tintColor}) =>
        <Icon style={{color: tintColor}} name="paper" />,
    },
  },
  AVAdminChat: {
    screen: AVAdminChatStack
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    showIcon: false,
    activeTintColor: 'white',
    inactiveTintColor: '#F7F7F7',
    style: {
      backgroundColor: colors.secondary,
    },
    indicatorStyle: {
      backgroundColor: '#ffdcf9'
    }
  },
  order: ['AVInformation', 'AlasVivasHome', 'AVChat', 'AVAdminChat'],
  initialRouteName: 'AlasVivasHome'
});

export default AlasVivasStack