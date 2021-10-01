import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { dashboardRoutes } from './index';
import DashboardLayout from '../layout/Dashboard';

const getRoute = (Layout, Component, componentProps, index, path) => {
    const renderFn = props =>
        Layout ? (
            <Layout>
                <Component {...props} {...componentProps} />
            </Layout>
        ) : (
            <Component {...props} {...componentProps} />
        );

    return <Route key={index} path={path} exact render={props => renderFn(props)} />
};

const childRoutes = (Layout, routes) =>
    routes.map(({ path, component: Component, props: componentProps }, index) => {
        return getRoute(Layout, Component, componentProps, index, path);
    });

const Routes = () => (
    <Router>
        <Switch>{childRoutes(DashboardLayout, dashboardRoutes)}</Switch>
    </Router>
);

export default Routes;
