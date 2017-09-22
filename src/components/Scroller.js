import React from 'react'
import { Keyboard, ScrollView, DeviceEventEmitter } from 'react-native'

class Scroller extends React.Component {
  constructor (props) {
    super(props);

    this.contentHeight = null;
    this.scrollHeight = null;
    this.scrollY = null;

    this._bind(
      '_handleKeyboardDidShow', '_handleKeyboardDidHide', '_scrollToEnd',
      '_handleContentChange'
    )
  }

  _bind(...methods) {
    methods.forEach((method) => {
      this[method] = this[method].bind(this);
    })
  }

  componentWillMount () {
    const KeyboardEmitter = Keyboard || DeviceEventEmitter;
    this.keyboardDidShowListener = KeyboardEmitter.addListener('keyboardDidShow', this._handleKeyboardDidShow);
    this.keyboardDidHideListener = KeyboardEmitter.addListener('keyboardDidHide', this._handleKeyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _handleKeyboardDidShow () {
    this._scrollToEnd();
  }
  _handleKeyboardDidHide () {

    // const { scrollY, scrollHeight, contentHeight } = this;
    //
    // // fix top blank if exsits
    // if (scrollY > contentHeight - scrollHeight) {
    //   this.refs.scrollView.scrollTo({ y: 0 })
    // }
    // // fix bottom blank if exsits
    // // else {
    // //   this.scrollToBottom()
    // // }
    // else {
    //   this.refs.scrollView.scrollTo({ y: scrollY })
    // }
  }

  handleScroll (e) {
    this.scrollY = e.nativeEvent.contentOffset.y
  }
  handleLayout (e) {
    this.scrollHeight = e.nativeEvent.layout.height
  }

  _handleContentChange (width, height) {
    this.contentHeight = height;
    this._scrollToEnd();

  }


  _scrollToEnd () {
      this.refs.scrollView.scrollToEnd()
  }

  render () {
    return (
      <ScrollView ref="scrollView"
                  scrollEventThrottle={16}
                  onScroll={this.handleScroll}
                  onLayout={this.handleLayout}
                  onContentSizeChange={this._handleContentChange}
                  {...this.props}>
      </ScrollView>
    )
  }
}

export default Scroller