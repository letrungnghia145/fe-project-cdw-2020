import React from "react";

export const DescriptionSection = (props) => {
    const { description } = props;
    return (
        <div className="col-sm-7 white sm-padding">
            <h2 className="h1">Product Description</h2>
            <br />
            <p>{description}</p>
            <hr className="offset-lg" />
            <div className="talk white" style={{ paddingLeft: "0" }}>
                <h2 className="h3">
                    Do you have any questions about this Product?
                </h2>
                <p>Tell for more information</p>
                <hr className="offset-md" />
                <a href="tel:+80005554465" className="btn btn-primary btn-sm">
                    <i className="fa fa-phone" aria-hidden="true" /> 8000
                    555-44-65{" "}
                </a>
                <hr className="offset-md visible-xs" />
            </div>
        </div>
    );
};
