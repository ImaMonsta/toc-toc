import React, { Component } from 'react';
import SearchJobs from './SearchJobs';

class Banner extends Component {
    render() {
        const {title, detail, search} = this.props
        return (
            <div className="tr-banner section-before bg-image">
                <div className="container">
                    <div className="banner-content text-center">
                        <h1>{title}</h1>
                        <h2>{detail}</h2>
                        {search && <SearchJobs/>}
                    </div>{/*<!--/. banner-content -->*/}
                </div>{/*<!-- /.container -->*/}
            </div>
        );
    }
}

export default Banner;