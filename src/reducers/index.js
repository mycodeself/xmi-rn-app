import { combineReducers } from 'redux'

import auth from './auth'
import topics from './topics'
import messages from './messages'
import user from './user'

const reducer = combineReducers({
  auth,
  user,
  topics,
  messages
});

export default reducer