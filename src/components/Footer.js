import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-top section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="footer-widget">
                                    <h3>About Us</h3>
                                    <ul className="tr-list">
                                        <li><Link to="about">About knocknock</Link></li>
                                        <li><Link to="contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="footer-widget">
                                    <h3>Job Seekers</h3>
                                    <ul className="tr-list">
                                        <li><Link to="/signup">Create Account</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="footer-widget">
                                    <h3>Employers</h3>
                                    <ul className="tr-list">
                                        <li><Link to="/signup">Create Account</Link></li>
                                        <li><Link to="/jobpost">Post a Job</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-sm-3">
                                <div className="footer-widget">
                                    <h3>Newsletter</h3>
                                    <p>Earum cumque doloribus, incidunt! Tempora voluptatibus</p>
                                    <form className="contact-form" method="post" action="">
                                        <div className="form-group">
                                            <input type="email" className="form-control" required="required" placeholder="Your email Id" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                        </div>{/*<!-- /.row -->*/}
                    </div>{/*<!-- /.container -->*/}
                </div>{/*<!-- /.footer-top -->*/}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="copyright">
                            <p>Copyright © 2018 <Link to="/">knocknock.network.</Link> All rights reserved.</p>
                         </div>{/*
                        <div className="footer-social pull-right">
                            <ul className="tr-list">
                                <li><a href="" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="" title="Youtube"><i className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>{/*<!-- /.footer-bottom -->*/}
            </div>
        );
    }
}

export default Footer;