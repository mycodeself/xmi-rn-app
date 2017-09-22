import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import { Icon } from 'native-base'

class AlertMessage extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      translateY: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.showAnimation();
  }

  showAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: (55),
      duration: 400,
    }).start()
  }

  hideAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: -55,
      duration: 400,
    }).start(() => this.props.onHide());
  }

  getDangerStyles() {
    return {
      container: {
        backgroundColor: "rgba(255, 102, 102, 1)",
        borderColor: "rgba(230, 0, 0, 1)"
      }
    }
  }

  getWarningStyles() {
    return {
      container: {
        backgroundColor: "rgba(255, 171, 69, 1)",
        borderColor: "rgba(253, 155, 36, 1)",
      }
    }
  }

  getCustomStyles() {
    if(this.props.type === "danger") {
      return this.getDangerStyles()
    }
    if(this.props.type === "warning") {
      return this.getWarningStyles();
    }
  }

  getStyles() {
    const styles = this.getCustomStyles();
    return StyleSheet.create({
      container: {
        backgroundColor: (this.props.backgroundColor) ? this.props.backgroundColor : styles.container.backgroundColor,
        height: 60,
        justifyContent: 'center',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: (this.props.borderColor) ? this.props.borderColor : styles.container.borderColor,
        borderTopWidth: 0,
        position: "absolute",
        elevation: 1, // TODO CHANGE
        left: 0,
        right: 0,
        transform: [{translateY: this.state.translateY}]
      },
      content: {
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      text: {
        color: 'white',
        fontSize: 14,
        marginLeft: 12,
        marginTop: 4,
      },
      icon: {
        color: 'white',
        marginRight: 16,
      }
    });
  }

  render() {
    const styles = this.getStyles();
    return (
      <Animated.View
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.text}>
            {this.props.text}
          </Text>
          <TouchableOpacity onPress={() => {this.hideAnimation();}}>
            <Icon style={styles.icon} name="close" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    )

  }
}

export default AlertMessage