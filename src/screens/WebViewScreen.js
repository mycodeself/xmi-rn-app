import React from 'react'
import {WebView,View} from 'react-native'
import {Container, Content, Spinner} from 'native-base'

import { Header } from '../components'

class WebViewScreen extends React.Component {
  constructor(props) {
    super(props);

    this.title = this.props.navigation.state.params.title;
    this.uri = this.props.navigation.state.params.uri;

    this.state = {
      isLoading: true,
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          back
          title={this.title}
          left={{onPress: () => this.props.navigation.goBack(), icon: 'arrow-back'}}
        />
          {(this.state.isLoading) ? <Spinner color="red" /> : null}
            <WebView
              source={{uri: this.uri}}
              onLoadStart={() => this.setState({isLoading: true})}
              onLoadEnd={() => this.setState({isLoading: false})}
            />

      </View>
    )
  }

}

export default WebViewScreen