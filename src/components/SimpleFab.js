import React from 'react'
import { Icon } from 'native-base'

import platform from '../../native-base-theme/variables/platform'
import { Fab } from '../../native-base-theme/Fab'
import colors from '../constants/colors'

const SimpleFab = (props) => {
  const { icon, ...fabProps } = props;
  return (
    <Fab
      {...fabProps}
    >
      <Icon name={icon} />
    </Fab>
  )
};

export default SimpleFab