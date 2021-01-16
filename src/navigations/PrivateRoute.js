import React from "react";
import { Route } from "react-router-dom";

export const PrivateRoute = ({ to, component, isExact }) => {
    return <Route component={component} path={to} exact={isExact} />;
};
