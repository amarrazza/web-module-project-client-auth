import React from "react";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { component:Component } = props;

    return <Route render={() => {
        if(localStorage.getItem('token')) {
            return <Component/>
        } else {
            return <Redirect to="/" />
        }
    }}/>
}

export default PrivateRoute;