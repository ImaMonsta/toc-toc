import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';
import { ConnectedRouter } from 'react-router-redux'
import firebase from 'firebase';
import { history } from '../store'
import * as userActions from '../actions/userActions';
import * as controlActions from '../actions/controlActions';
import Index from '../containers/Index';
import NotFound from '../containers/NotFound';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
//<!--global components-->
import Header from '../components/Header';
import Footer from '../components/Footer';

class Main extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCUC5wXW3fcPHy4SPFjPNIQyzHlI7D3RiE",
            authDomain: "toc-toc-network.firebaseapp.com",
            databaseURL: "https://toc-toc-network.firebaseio.com",
            projectId: "toc-toc-network",
            storageBucket: "toc-toc-network.appspot.com",
            messagingSenderId: "872153099985"
        });
    }

    render() {
        const { user } = this.props;
        return (
            <ConnectedRouter history={history}>
                <div>
                    <ReduxToastr
                        timeOut={4000}
                        newestOnTop={false}
                        preventDuplicates
                        position="top-left"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar />
                    <Header key="Header" user={user} />
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/signin" render={(props) => (<SignIn {...this.props} />)} />
                        <Route exact path="/signup" render={(props) => (<SignUp {...this.props} />)} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer key="Footer" />
                </div>
            </ConnectedRouter>
        );
    }
}

Main.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { candidates, user, appcontrol } = state
    return {
        candidates,
        user,
        appcontrol
    }
}

function mapDispatchToProps(dispatch) {
    return { dispatch, ...bindActionCreators({ ...userActions, ...controlActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);