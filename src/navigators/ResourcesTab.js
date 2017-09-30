import React from 'react'
import {TabNavigator, StackNavigator} from 'react-navigation'
import VideosScreen from "../screens/resources/VideosScreen";
import StudiesScreen from "../screens/resources/StudiesScreen";
import InfoScreen from "../screens/resources/InfoScreen";
import colors from '../constants/colors'
import {WebViewScreen} from "../screens/index";

const StudiesStack = StackNavigator({
  StudiesList: {
    screen: StudiesScreen
  },
  WebView: {
    screen: WebViewScreen
  }
}, {headerMode: 'none'});

const ResourcesTab = TabNavigator({
  VideosResources: {
    screen: VideosScreen,
    navigationOptions: {
      title: 'Vídeos'
    }
  },
  StudiesResources: {
    screen: StudiesStack,
    navigationOptions: {
      title: 'Estudios'
    }
  },
  InfoResources: {
    screen: InfoScreen,
    navigationOptions: {
      title: 'Información'
    }
  },
}, {
  tabBarPosition: 'bottom',
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
  order: ['VideosResources', 'StudiesResources', 'InfoResources'],
  initialRouteName: 'VideosResources'
});

export default ResourcesTab