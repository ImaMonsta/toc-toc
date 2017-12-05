import { createStore, compse } from 'redux'
import rootReducer from './reducers/index'

const defaultState = {
    candidates: {}
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;