import React, { Component } from 'react';
// import queryString from 'query-string';
//import Notification from '../components/Notification'
import Questionary from '../components/Questionary'

class Verification extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="container">
                    {/* <p>{JSON.stringify(queryString.parse(this.props.location.search))}</p> */}
                    {/* <Notification header={"Token Expired"} description={"This token was already submited."} icon={"fa-hand-spock-o"} /> */}
                    <Questionary />
               </div>
            </div>
        );
    }
}

export default Verification;