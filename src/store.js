import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

const defaultState = {
  candidates: {},
  user: {},
  appcontrol: {
    registerIsCandidate: true
  }
}

export const history = createHistory()
const middleware = routerMiddleware(history)

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware),
  applyMiddleware(middleware),
  // other store enhancers if any
);

const store = createStore(rootReducer, defaultState, enhancer);

export default store;