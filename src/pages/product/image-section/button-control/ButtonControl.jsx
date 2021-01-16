import React from "react";

export const ButtonControl = (props) => {
    return (
        <button className="btn btn-control" data-direction={props.directive} >
            <i className={`fa fa-arrow-${props.directive}`} aria-hidden="true"></i>
        </button>
    );
};
