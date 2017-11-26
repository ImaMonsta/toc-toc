import React, { Component } from 'react';
import Banner from '../components/Banner';
import Login from '../components/Login';

class SignIn extends Component {
    render() {
        return ([
            <Banner key="Banner" title="Sign In" detail="Let's find new opportunities" search={false} />,
            <Login key="Login" />,
        ]);
    }
}

export default SignIn;