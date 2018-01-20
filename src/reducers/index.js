import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'
import { routerReducer as router } from 'react-router-redux'
import { firebaseReducer } from 'react-redux-firebase'

import user from './user';
import candidates from './candidates';
import appcontrol from './appcontrol';

const rootReducer = combineReducers({ user, candidates, appcontrol, toastr, router, firabse: firebaseReducer });

export default rootReducer;