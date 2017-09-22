import React from 'react'
import {StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import {Thumbnail} from 'native-base'

import colors from '../constants/colors'

// const DEFAULT_AVATAR_PATH = '../../assets/images/default-avatar.png';

const Avatar = (props) => {
  const source = (props.user.photoURL)
    ? {uri: props.user.photoURL}
    : require('../../assets/images/default-avatar.png');
  const large = !!props.large;
  const small = !!props.small;
  return (
    <Thumbnail
      large={large}
      small={small}
      circular
      source={source}
      style={styles.thumbnail}
    />
  )
};

const styles = StyleSheet.create({
  thumbnail: {
    borderWidth: 1,
    borderColor: colors.secondary
  }
});

export default Avatar