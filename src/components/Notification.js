import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notification extends Component {
    componentDidMount() {
        if(this.props.action) this.props.action();
    }
    
    render() {
        const {header, description, icon} = this.props;
        return (
            <div className="tr-notification section text-center">
                <div className="icon">
                    <i className={`fa ${icon}`} aria-hidden="true"></i>
                </div>
                <h1>{header}</h1>
                <div>{description}</div>
                <Link to="/" className="btn btn-primary">Back to home</Link>
            </div>
        );
    }
}

export default Notification;