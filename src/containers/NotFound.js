import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundDetail from '../components/NotFoundDetail'

class NotFound extends Component {
    render() {
        return ([
            <Header key="Header"/>,
            <NotFoundDetail key="NotFoundDetail"/>,
            <Footer key="Footer"/>
        ]);
    }
}

export default NotFound;