import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import createHistory from 'history/createBrowserHistory';
import firebase from 'firebase';

export const history = createHistory()

firebase.initializeApp({
  apiKey: "AIzaSyCUC5wXW3fcPHy4SPFjPNIQyzHlI7D3RiE",
  authDomain: "toc-toc-network.firebaseapp.com",
  databaseURL: "https://toc-toc-network.firebaseio.com",
  projectId: "toc-toc-network",
  storageBucket: "toc-toc-network.appspot.com",
  messagingSenderId: "872153099985"
});

const defaultState = {
  candidates: {},
  user: {},
  appcontrol: {
    registerIsCandidate: true,
    editCandidate: false,
    optionMenuCandidate: 1
  }
}

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

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, {}), 
)(createStore)

const store = createStoreWithFirebase(rootReducer, defaultState, enhancer);

export default store;