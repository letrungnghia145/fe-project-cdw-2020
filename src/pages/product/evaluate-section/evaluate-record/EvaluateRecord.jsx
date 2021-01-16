import React from "react";

export const EvaluateRecord = (props) => {
    const { evaluate } = props;
    return (
        <React.Fragment>
            <h3>{evaluate.customerName}</h3>
            <label>{`${evaluate.value} star`}</label>
            <p>{evaluate.comment}</p>
        </React.Fragment>
    );
};
