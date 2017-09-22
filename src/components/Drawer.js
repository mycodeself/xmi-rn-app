import React from 'react'
import { DrawerItems } from 'react-navigation'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Thumbnail } from 'native-base'

import {Avatar} from './'
import colors from '../constants/colors'

class Drawer extends React.Component {

  userInfo() {
    if(this.props.isLoggedIn) {
      return (
        <View>
          <Text style={styles.userInfoText}>{this.props.user.displayName}</Text>
          <Text style={styles.userInfoText}>{this.props.user.email}</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/drawer-header-background.jpg')}
            style={styles.headerBackgroundImage}
          >
                {
                  (this.props.isLoggedIn)
                    ?
                    <View>
                      <View style={styles.avatarContainer}>
                        <Avatar large user={this.props.user} />
                      </View>
                      <View style={styles.headerTextContainer}>
                        <Text style={styles.userInfoText}>{this.props.user.displayName}</Text>
                        <Text style={styles.userInfoText}>{this.props.user.email}</Text>
                      </View>
                    </View>
                    : null
                }

          </Image>
        </View>
        <DrawerItems
          {...this.props}
          activeTintColor={colors.arsenic}
          activeBackgroundColor={colors.rgba.secondary(0.3)}
          items={this.props.items.filter((item) => !((this.props.isLoggedIn && item.routeName === "Auth")
            || (!this.props.isLoggedIn && item.routeName === "Profile")))}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 160,
  },
  headerBackgroundImage: {
    resizeMode: 'stretch',
    flex: 1,
    padding: 15
  },
  avatarContainer: {
    marginBottom: 10,
  },
  headerTextContainer: {
    marginLeft: 12,
    marginTop: 6,
  },
  userInfoText: {
    fontSize: 12,
    color: "white",
  }
});

export default Drawer