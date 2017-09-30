import React from 'react'
import {Icon} from 'native-base'
import { DrawerNavigator } from 'react-navigation'

import {TestimonyScreen} from '../screens'
import Drawer from '../containers/DrawerContainer'
import HomeScreen from '../containers/HomeContainer'
import AssociationStack from './AssociationStack'
import AuthStack from "./AuthStack";
import ChatStack from './ChatStack'
import ProfileScreen from "../containers/ProfileContainer";
import AlasVivasStack from "./AlasVivasStack";
import AVChatAdminScreen from "../screens/alas-vivas/AVChatAdminScreen";
import AVChatListAdminScreen from "../screens/alas-vivas/AVChatListAdminScreen";
import ResourcesTab from "./ResourcesTab";

const MainDrawerNavigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Inicio",
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" />
      )
    }
  },
  Association: {
    screen: AssociationStack,
    navigationOptions: {
      title: "Asociaciones",
      drawerIcon: ({ tintColor }) => (
        <Icon name="hand" />
      )
    }
  },
  Resources: {
    screen: ResourcesTab,
    navigationOptions: {
      title: "Recursos",
      drawerIcon: ({ tintColor }) => (
        <Icon name="woman" />
      )
    }
  },
  Chat: {
    screen: ChatStack,
    navigationOptions: {
      title: "Conversaciones",
      drawerIcon: ({ tintColor }) => (
        <Icon name="chatbubbles" />
      )
    }
  },
  AlasVivas: {
    screen: AlasVivasStack,
    navigationOptions: {
      title: "Alas Vivas",
      drawerIcon: ({ tintColor }) => (
        <Icon name="contacts" />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Perfil",
      drawerIcon: ({ tintColor }) => (
        <Icon name="person" />
      )
    }
  },
  Auth: {
    screen: AuthStack,
    navigationOptions: {
      title: "Únete",
      drawerIcon: ({ tintColor }) => (
        <Icon name="log-in" />
      )
    },
  },
}, {
  drawerWidth: 270,
  contentComponent: (props) => <Drawer {...props} />
});

export default MainDrawerNavigator