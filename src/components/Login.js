import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="tr-account section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="user-account">
                                <div className="account-content">
                                    <form action="" className="tr-form">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Please Enter Your Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="user-option">
                                            <div className="checkbox">
                                                <label htmlFor="logged"><input type="checkbox" name="logged" id="logged"/>Remember me</label>
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