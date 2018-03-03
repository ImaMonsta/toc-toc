import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions'

class Header extends Component {
    render() {
        const { user } = this.props;
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
                            <Link className="navbar-brand" to="/"><img style={{height:"50px"}} className="img-responsive" src="/images/logo.png" alt="Logo" /></Link>
                        </div>
                        {/*<!-- /.navbar-header -->*/}

                        <div className="navbar-left">
                            <div className="collapse navbar-collapse" id="navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li className="tr-dropdown active"><Link to="/">Home</Link></li>
                                    <li><Link to="/jobpost">Post A Job</Link></li>
                                    <li><Link to="/joblist">Job List</Link></li>
                                    {/* <li><a href="job-details.html">Job Details</a></li> */}
                                </ul>
                            </div>
                        </div>{/*<!-- /.navbar-left -->*/}

                        <div className="navbar-right">
                            <ul className="sign-in tr-list">
                                <li><i className="fa fa-user"></i></li>
                                {
                                user.email
                                    ? [
                                        <li key="user"><Link to={`/profile/${user.uid}`}>{user.email}</Link>{` ${user.emailVerified ? '👌' :'(Not Verified)'}`}</li>,
                                        <li key="signout"><a onClick={e => this.props.dispatch(logout())}>Sign Out</a></li>
                                    ]
                                    : [
                                        <li key="sigin"><Link to="/signin">Sign In </Link></li>,
                                        <li key="signup"><Link to="/signup">Register</Link></li>
                                    ]
                                }
                            </ul>{/*<!-- /.sign-in -->*/}

                            {/* <a href="job-post.html" className="btn btn-primary">Post Job</a> */}
                        </div>{/*<!-- /.nav-right -->*/}
                    </div>{/*<!-- /.container -->*/}
                </nav>{/*<!-- /.navbar -->*/}
            </header>
        );
    }
}

export default Header;