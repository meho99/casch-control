// --------------- REDUCERS ---------------

import { combineReducers } from 'redux'
import actionsReducer  from './redux/actions'

const rootReducer = combineReducers({
  actions: actionsReducer,
})

export default rootReducer