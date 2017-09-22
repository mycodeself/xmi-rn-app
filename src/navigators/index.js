import React from 'react'
import { StackNavigator } from 'react-navigation'

import {
  TestimonyScreen
} from '../screens'
import MainDrawerNavigator from './MainDrawerNavigator'
import AssociationStack from './AssociationStack'
import AuthStack from "./AuthStack";
import ChatStack from './ChatStack'

const MainNavigator = StackNavigator({
  Drawer: {
    screen: MainDrawerNavigator
  },
  Association: {
    screen: AssociationStack
  },
  Auth: {
    screen: AuthStack
  },
  Chat: {
    screen: ChatStack
  }
}, {
  headerMode: 'none'
});

const AppNavigator = () => {
  return <MainNavigator/>
};

export default AppNavigator