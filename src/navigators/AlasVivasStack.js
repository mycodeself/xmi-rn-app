import React from 'react'
import { TabNavigator } from 'react-navigation'
import {Icon} from 'native-base'

import AlasVivasScreen from "../screens/AlasVivasScreen";
import AVInformationScreen from "../screens/AVInformationScreen";
import AVChatScreen from "../screens/AVChatScreen";
import colors from '../constants/colors'
import AVMessagesAdminScreen from "../screens/AVChatListAdminScreen";

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
  AVMessagesAdmin: {
    screen: AVMessagesAdminScreen,
    navigationOptions: {
      title: 'Mensajes',
      tabBarIcon: ({focused, tintColor}) =>
        <Icon style={{color: tintColor}} name="paper" />,
    },
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
  order: ['AVInformation', 'AlasVivasHome', 'AVChat', 'AVMessagesAdmin'],
  initialRouteName: 'AlasVivasHome'
});

export default AlasVivasStack