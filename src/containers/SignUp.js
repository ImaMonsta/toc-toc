import React, { Component } from 'react';
import Banner from '../components/Banner';
import CreateAccount from '../components/CreateAccount';

class SignUp extends Component {
    render() {
        const { signup } = this.props;
        return ([
            <Banner key="Banner" title="Create A New Account" detail="Let us know you" search={false} />,
            <CreateAccount key="CreateAccount" signup={signup} />,
        ]);
    }
}

export default SignUp;