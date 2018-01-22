import React, { Component } from 'react';
import queryString from 'query-string';

import Questionary from '../components/Questionary'

class Verification extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="container">
                    <Questionary {...this.props} urlTokens={queryString.parse(this.props.search)} />
               </div>
            </div>
        );
    }
}

export default Verification;