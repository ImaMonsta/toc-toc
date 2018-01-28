import React, { Component } from 'react';
import queryString from 'query-string';

import Notification from '../components/Notification'

class Verification extends Component {
    render() {
        const urlTokens = queryString.parse(this.props.search);
        return (
            <div className="page-content">
                <div className="container">
                    <Notification  
                        header="Verification confirmed" 
                        description="You will receive an email with your questionary" 
                        icon="fa-check-circle-o" 
                        action={e => { this.props.verifyEmail(urlTokens.oobCode); this.props.checkUserState();}}/>
               </div>
            </div>
        );
    }
}

export default Verification;