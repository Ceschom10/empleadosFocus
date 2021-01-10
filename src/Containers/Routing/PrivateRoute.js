import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({children, ...rest}) {
    const {isAuthenticated, isLoading} = useAuth0()

    return (
        <Route {...rest}>
            {
                !isLoading && isAuthenticated ?
                (children)
                :
                (<Redirect to = {{pathname: '/'}}/>)
            }
        </Route>
    )
}

export default PrivateRoute
