import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../store'
import * as userActions from '../actions/userActions';
import * as controlActions from '../actions/controlActions';
import Index from '../containers/Index';
import NotFound from '../containers/NotFound';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import Profile from '../containers/Profile';
import About from '../containers/About';
import Verification from '../containers/Verification';
//<!--global components-->
import Header from '../components/Header';
import Footer from '../components/Footer';
import { checkUserState } from '../actions/userActions'

class Main extends Component {
    componentWillMount() {
        this.props.dispatch(checkUserState());
    }

    render() {
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
                    <Header key="Header" {...this.props} />
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/signin" render={() => (<SignIn {...this.props}  />)} />
                        <Route exact path="/signup" render={() => (<SignUp {...this.props} store={{...this.context}}/>)} />
                        <Route exact path="/profile/:uid" render={(routeProps) => (<Profile props={{...routeProps, ...this.props }}/>)} />
                        <Route exact path="/verification" render={(self) => (<Verification {...this.props} search={self.location.search}/>)} />
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