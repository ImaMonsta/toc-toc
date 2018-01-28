import React, { Component } from 'react';

class SearchJobs extends Component {
    render() {
        return (
            <div className="banner-form">
                <form action="">
                    <input type="text" className="form-control" placeholder="Job Keyword" />
                    <div className="dropdown tr-change-dropdown">
                        <a data-toggle="dropdown" href="" aria-expanded="false"><span className="change-text">Location</span><i className="fa fa-angle-down"></i></a>
                        <ul className="dropdown-menu tr-change">
                            <li><a>Mexico</a></li>
                            <li><a>Spain</a></li>
                        </ul>
                    </div>{/*<!-- /.category-change -->*/}
                    <button type="submit" className="btn btn-primary" value="Search">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchJobs;