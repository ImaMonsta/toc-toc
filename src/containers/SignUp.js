import React, { Component } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CreateAccount from '../components/CreateAccount';

class SignUp extends Component {
    render() {
        return ([
            <Header key="Header"/>,
            <Banner key="Banner" title="Create A New Account" detail="Let us know you" search={false}/>,
            <CreateAccount key="CreateAccount"/>,
            <Footer key="Footer"/>
        ]);
    }
}

export default SignUp;