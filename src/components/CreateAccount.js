import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createLogin } from '../actions/userActions'


class CreateAccount extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let { dispatch } = this.props;
        e.preventDefault();
        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value,
            fullName: this.refs.fullName.value,
            email: this.refs.email.value
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
                                            <form action="" className="tr-form" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <input ref="fullName" type="text" className="form-control" placeholder="Full Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input ref="username" type="text" className="form-control" placeholder="Username" />
                                                </div>
                                                <div className="form-group">
                                                    <input ref="email" type="email" className="form-control" placeholder="your Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input ref="password" type="password" className="form-control" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <input ref="passwordConfirmation" type="password" className="form-control" placeholder="Confirm Password" />
                                                </div>
                                                {
                                                    !registerIsCandidate && 
                                                    <div className="dropdown tr-change-dropdown">
                                                        <a data-toggle="dropdown" href="" aria-expanded="false"><span className="change-text">Industry Type</span><i className="fa fa-angle-down"></i></a>
                                                        <ul className="dropdown-menu tr-change">
                                                            <li><a href="">Industry 1</a></li>
                                                            <li><a href="">Industry 2</a></li>
                                                            <li><a href="">Industry 3</a></li>
                                                        </ul>
                                                    </div>
                                                }
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