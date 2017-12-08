import React, { Component } from 'react';
import Banner from '../components/Banner';
import CreateAccount from '../components/CreateAccount';

class SignUp extends Component {
    render() {
        const { appcontrol, toogleRegister, dispatch } = this.props;
        return ([
            <Banner key="Banner" title="Create A New Account" detail="Let us know you" search={false} />,
            <CreateAccount key="CreateAccount" registerIsCandidate={appcontrol.registerIsCandidate} toogleRegister={toogleRegister} dispatch={dispatch}  />,
        ]);
    }
}

export default SignUp;