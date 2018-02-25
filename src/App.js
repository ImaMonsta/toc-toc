import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Raven from 'raven-js'
import './App.css';
import store from './store'
import Main from './containers/Main'


class App extends Component {

  componentWillMount() {
    Raven.config('https://df4abb34618e4ef981cac63f82abb797@sentry.io/250533', {
      //👾
    }).install();
  }

  render() {
    return (
      <Provider store={store}>
          <Main />
      </Provider>
    );
  }
}

export default App;
