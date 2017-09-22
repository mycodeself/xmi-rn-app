import React from 'react';
import { Provider } from 'react-redux'
import { Spinner, StyleProvider, Root } from 'native-base'

import getTheme from './../native-base-theme/components'
import platform from './../native-base-theme/variables/platform'
import store from './store'
import AppNavigator from './navigators'
import {appStart} from "./actions/statistics";

class XmiApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { fontsLoaded: true };
  }

  componentDidMount() {
    appStart();
  }

  render() {
    if(!this.state.fontsLoaded) return <Spinner color="red" />;
    return (
      <Root>
        <Provider store={store}>
          <StyleProvider style={getTheme(platform)}>
            <AppNavigator/>
          </StyleProvider>
        </Provider>
      </Root>
    )
  }
}

export default XmiApp