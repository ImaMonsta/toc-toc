import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="tr-header">
                <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html"><img className="img-responsive" src="images/logo.png" alt="Logo"/></a>
                    </div>
                    {/*<!-- /.navbar-header -->*/}
                    
                    <div className="navbar-left">
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                        <li className="tr-dropdown active"><a href="">Home</a>
                            <ul className="tr-dropdown-menu left tr-list fadeInUp" role="menu">
                                <li className="active"><a href="index.html">Home Page V-1</a></li>
                                <li><a href="index1.html">Home Page V-2</a></li>
                            </ul>
                        </li>
                        <li><a href="job-post.html">Post A Job</a></li>
                        <li><a href="listing.html">Job List</a></li>
                        <li><a href="job-details.html">Job Details</a></li>
                        <li className="tr-dropdown"><a href="">Pages</a>
                            <ul className="tr-dropdown-menu tr-list fadeInUp" role="menu">
                                <li><a href="employee-profile.html">Employee Profile</a></li>
                                <li><a href="employer-profile.html">Employer Profile</a></li>
                                <li><a href="view-compnay.html">View Compnay</a></li>
                                <li><a href="view-resume.html">View Resume</a></li>
                                <li><a href="coming-soon.html">Coming Soon</a></li>
                                <li><a href="notification.html">Notification</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="signup.html">Sign Up</a></li>
                                <li><a href="signin.html">Sign In</a></li>
                                <li><a href="500.html">500 Opsss</a></li>
                                <li><a href="404.html">404 Error</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>{/*<!-- /.navbar-left -->*/}

                    <div className="navbar-right">			
                    <div className="dropdown tr-change-dropdown">
                        <i className="fa fa-globe"></i>
                        <a data-toggle="dropdown" href="" aria-expanded="false"><span className="change-text">United Kingdom</span><i className="fa fa-angle-down"></i></a>
                        <ul className="dropdown-menu tr-change tr-list">
                        <li><a href="">United Kingdom</a></li>
                        <li><a href="">United States</a></li>
                        <li><a href="">China</a></li>
                        <li><a href="">Russia</a></li>
                        </ul>								
                    </div>{/*<!-- /.language-dropdown -->*/}		
                    <ul className="sign-in tr-list">
                        <li><i className="fa fa-user"></i></li>
                        <li><a href="signin.html">Sign In </a></li>
                        <li><a href="signup.html">Register</a></li>
                    </ul>{/*<!-- /.sign-in -->*/}		

                    <a href="job-post.html" className="btn btn-primary">Post Job</a>
                    </div>{/*<!-- /.nav-right -->*/}
                </div>{/*<!-- /.container -->*/}
                </nav>{/*<!-- /.navbar -->*/}
            </header>
        );
    }
}

export default Header;