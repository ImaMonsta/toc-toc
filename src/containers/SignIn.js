import React, { Component } from 'react';
import Banner from '../components/banner/Banner';
import Login from '../components/Login';

class SignIn extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <React.Fragment>
                <Banner title="Sign In" detail="Let's find new opportunities" search={false} />,
                <Login dispatch={dispatch} />,
            </React.Fragment>
        );
    }
}

export default SignIn;