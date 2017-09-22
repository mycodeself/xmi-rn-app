import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from '../reducers'

let store = createStore(reducer, applyMiddleware(thunk));
// let store = createStore(reducer);

export default store
