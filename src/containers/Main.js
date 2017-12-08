import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import Index from '../containers/Index';
import NotFound from '../containers/NotFound';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
//<!--global components-->
import Header from '../components/Header';
import Footer from '../components/Footer';

class Main extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCUC5wXW3fcPHy4SPFjPNIQyzHlI7D3RiE",
            authDomain: "toc-toc-network.firebaseapp.com",
            databaseURL: "https://toc-toc-network.firebaseio.com",
            projectId: "toc-toc-network",
            storageBucket: "toc-toc-network.appspot.com",
            messagingSenderId: "872153099985"
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header key="Header" />
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/signup" render={(props) => (<SignUp {...this.props} />)} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer key="Footer" />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;