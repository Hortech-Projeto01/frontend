
import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "auth/components/ProvideAuth"
import UrlRouter from "core/constants/UrlRouter";

import PropTypes from "prop-types";

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useAuth();
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            auth.user ?
                <Component {...props} />
            : <Redirect to={UrlRouter.auth.login} />
        )} />
    );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    component: PropTypes.elementType,
  };