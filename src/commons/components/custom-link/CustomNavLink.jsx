import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const CustomNavLink = ({ activeOnlyWhenExact, to, label }) => {
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });
    return (
        <li className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
        </li>
    );
};
