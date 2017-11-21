import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="tr-banner section-before bg-image">
                <div className="container">
                    <div className="banner-content text-center">
                        <h1>The Easiest Way to Get Your New Job</h1>
                        <h2>We offer 12000 jobs vacation right now</h2>
                        <div className="banner-form">
                            <form action="">
                                <input type="text" className="form-control" placeholder="Job Keyword"/>
                                <div className="dropdown tr-change-dropdown">
                                    <a data-toggle="dropdown" href="" aria-expanded="false"><span className="change-text">Location</span><i className="fa fa-angle-down"></i></a>
                                    <ul className="dropdown-menu tr-change">
                                        <li><a href="">Location</a></li>
                                        <li><a href="">Location 1</a></li>
                                        <li><a href="">Location 2</a></li>
                                        <li><a href="">Location 3</a></li>
                                    </ul>								
                                </div>{/*<!-- /.category-change -->*/}
                                <button type="submit" className="btn btn-primary" value="Search">Search</button>
                            </form>
                        </div>{/*<!-- /.banner-form -->*/}				
                    </div>{/*<!--/. banner-content -->*/}
                </div>{/*<!-- /.container -->*/}
            </div>
        );
    }
}

export default Banner;