import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends Component {
    render() {
        return (
            <div className="tr-account section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="user-account">
                                {/*<!-- Nav tabs -->*/}
                                <ul className="nav nav-tabs  nav-justified" role="tablist">
                                    <li role="presentation" className="active"><a href="#seeker" aria-controls="seeker" role="tab" data-toggle="tab">Job Seeker</a></li>
                                    <li role="presentation"><a href="#employers" aria-controls="employers" role="tab" data-toggle="tab">Employers</a></li>
                                </ul>

                                {/*<!-- Tab panes -->*/}
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="seeker">
                                        <div className="account-content">
                                            <form action="" className="tr-form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Full Name"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Username"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="your Email"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Confirm Password"/>
                                                </div>
                                                <div className="dropdown tr-change-dropdown">
                                                    <a data-toggle="dropdown" href="" aria-expanded="false"><span className="change-text">Gender</span><i className="fa fa-angle-down"></i></a>
                                                    <ul className="dropdown-menu tr-change">
                                                        <li><a href="">Male</a></li>
                                                        <li><a href="">Female</a></li>
                                                    </ul>								
                                                </div>{/*<!-- /.category-change -->*/}
                                                <button type="submit" className="btn btn-primary">Sign Up</button>
                                            </form>	
                                            <div className="new-user text-center">
                                                <span>Already Registered? <Link to="/signin">Sign In</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="employers">
                                        <div className="account-content">
                                            <form action="" className="tr-form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Your Full Name"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Username"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="your Email"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Confirm Password"/>
                                                </div>
                                                <div className="dropdown tr-change-dropdown">
                                                    <a data-toggle="dropdown" href="" aria-expanded="false"><span className="change-text">Industry Type</span><i className="fa fa-angle-down"></i></a>
                                                    <ul className="dropdown-menu tr-change">
                                                        <li><a href="">Industry 1</a></li>
                                                        <li><a href="">Industry 2</a></li>
                                                        <li><a href="">Industry 3</a></li>
                                                    </ul>								
                                                </div>{/*<!-- /.category-change -->*/}												
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