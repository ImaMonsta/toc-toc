
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../containers/Index';
import NotFound from '../containers/NotFound';

export const RouteConfig = () =>  (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);