import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'

const defaultState = {
    candidates: {},
    user: {},
    appcontrol: {
        registerIsCandidate: true
    }
}

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
    // other store enhancers if any
  );

const store = createStore(rootReducer, defaultState, enhancer);

export default store;