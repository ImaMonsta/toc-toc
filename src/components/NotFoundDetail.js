import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundDetail extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="container">
                    <div className="tr-found section">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="found-image">
                                    <img src="/images/others/404.jpg" alt="Not Found" className="img-responsive" />
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="found-info">
                                    <h1>404</h1>
                                    <h2>Page Not Found</h2>
                                    <p>We can't seem to find the page you're looking for.</p>
                                    <Link to="/" className="btn btn-primary">Back to home</Link>
                                </div>
                            </div>
                        </div>{/*<!-- /.row */}
                    </div>{/*<!-- /.section */}
                </div>{/*<!-- /.container */}
            </div>
        );
    }
}

export default NotFoundDetail;