import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "auth/components/ProvideAuth"
import PropTypes from "prop-types";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const auth = useAuth();
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            auth.user && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;
PublicRoute.propTypes = {
    component: PropTypes.elementType,
    restricted: PropTypes.bool,
  };
  