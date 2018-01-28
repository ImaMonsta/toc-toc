import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BannerPostResume extends Component {
    render() {
        return (
            <div className="tr-category section-padding">
                <div className="container">
                    <div className="cta-content section">
                        <div className="cta-info">
                            <div className="pull-left">
                                <h1>Add your resume and let your next job find you.</h1>
                            </div>
                            <Link to="/signup" className="btn btn-primary pull-right">Register</Link>
                        </div>
                    </div>{/*<!-- /.cta-content -->*/}
                </div>{/*<!-- /.container -->*/}
            </div>
        );
    }
}

export default BannerPostResume;