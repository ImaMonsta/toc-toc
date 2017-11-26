import React, { Component } from 'react';
import Raven from 'raven-js'
import './App.css';
import { RouteConfig } from './settings/RouteConfig'

class App extends Component {

  componentWillMount(){
    Raven.config('https://df4abb34618e4ef981cac63f82abb797@sentry.io/250533').install();
  }

  render() {
    return (<RouteConfig/>);
  }
}

export default App;
