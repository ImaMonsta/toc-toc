import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../containers/Index';
import NotFound from '../containers/NotFound';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
//<!--global components-->
import Header from '../components/Header';
import Footer from '../components/Footer';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header key="Header" />
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer key="Footer" />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;