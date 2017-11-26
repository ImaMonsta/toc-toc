
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../containers/Index';
import NotFound from '../containers/NotFound';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';

export const RouteConfig = () =>  (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);