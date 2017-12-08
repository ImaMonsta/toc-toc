import { combineReducers } from 'redux'

import user from './user';
import candidates from './candidates';
import appcontrol from './appcontrol';

const rootReducer = combineReducers({user, candidates, appcontrol});

export default rootReducer;