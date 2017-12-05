import { combineReducers } from 'redux'

import user from './user'
import candidates from './candidates'

const rootReducer = combineReducers({user, candidates});

export default rootReducer;