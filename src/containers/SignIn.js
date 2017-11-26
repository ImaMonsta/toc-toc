import React, { Component } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Login from '../components/Login';

class SignIn extends Component {
    render() {
        return ([
            <Header key="Header"/>,
            <Banner key="Banner" title="Sign In" detail="Let's find new opportunities" search={false}/>,
            <Login key="Login"/>,
            <Footer key="Footer"/>
        ]);
    }
}

export default SignIn;