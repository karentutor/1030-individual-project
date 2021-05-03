import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isAuthenticated } from '../../auth';

const ProtectedRoute = ({path, component: Component, render, ...rest}) => {
    return ( 
        <Route
            path={path}
            {...rest}
            render={props => {
              if (!isAuthenticated()) return <Redirect to="/login" />
                return Component ? <Component {...props} /> : render(props);
            }}
            />
     );
}
 
export default ProtectedRoute;