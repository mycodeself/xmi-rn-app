import React from 'react'
import { Icon } from 'native-base'

import { Fab } from '../../native-base-theme/Fab'

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