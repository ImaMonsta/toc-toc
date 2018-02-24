import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createLogin } from '../actions/userActions'


class CreateAccount extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let { dispatch, registerIsCandidate } = this.props;
        const { password, fullName, email, passwordConfirmation } = this.refs
        e.preventDefault();
        const user = {
            password: password.value,
            fullName: fullName.value,
            email: email.value,
            passwordConfirmation: passwordConfirmation.value,
            registerIsCandidate
        }
        dispatch(createLogin(user));
    }
    render() {
        const { registerIsCandidate, toogleRegister } = this.props;
        return (
            <div className="tr-account section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="user-account">
                                {/*<!-- Nav tabs -->*/}
                                <ul className="nav nav-tabs  nav-justified" role="tablist">
                                    <li onClick={toogleRegister.bind(null, true)} role="presentation" className={`${registerIsCandidate && 'active'}`}><a aria-controls="seeker" role="tab" data-toggle="tab">Job Seeker</a></li>
                                    <li onClick={toogleRegister.bind(null, false)} role="presentation" className={`${!registerIsCandidate && 'active'}`}><a aria-controls="employers" role="tab" data-toggle="tab">Employers</a></li>
                                </ul>

                                {/*<!-- Tab panes -->*/}
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="seeker">
                                        <div className="account-content">
                                            <form className="tr-form" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <input ref="fullName" type="text" className="form-control" placeholder={registerIsCandidate ? 'Full Name' : 'Company Name'} required/>
                                                </div>
                                                <div className="form-group">
                                                    <input ref="email" type="email" className="form-control" placeholder="Email" required/>
                                                </div>
                                                <div className="form-group">
                                                    <input ref="password" type="password" className="form-control" placeholder="Password" required/>
                                                </div>
                                                <div className="form-group">
                                                    <input ref="passwordConfirmation" type="password" className="form-control" placeholder="Confirm Password" required/>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Sign Up</button>
                                            </form>
                                            <div className="new-user text-center">
                                                <span>Already Registered? <Link to="/signin">Sign In</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/*<!-- /.row -->*/}
                </div>{/*<!-- container -->*/}
            </div>
        );
    }
}

export default CreateAccount;