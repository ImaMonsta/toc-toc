import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';

class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let { dispatch } = this.props;
        e.preventDefault();
        const user = {
            password: this.refs.password.value,
            email: this.refs.email.value
        }
        dispatch(login(user.email, user.password));
        this.refs.login.reset()
    }

    render() {
        return (
            <div className="tr-account section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="user-account">
                                <div className="account-content">
                                    <form ref="login" action="" className="tr-form" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input ref="email" type="email" className="form-control" placeholder="Please Enter Your Email" />
                                        </div>
                                        <div className="form-group">
                                            <input ref="password" type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="user-option">
                                            <div className="checkbox">
                                                <label htmlFor="logged"><input type="checkbox" name="logged" id="logged" />Remember me</label>
                                            </div>
                                            <div className="forgot-password">
                                                <a href="">I forgot password</a>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </form>
                                    <div className="new-user text-center">
                                        <span><Link to="/signup">Create a New Account</Link></span>
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

export default Login;