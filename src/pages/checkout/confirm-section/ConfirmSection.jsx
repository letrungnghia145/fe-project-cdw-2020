import React from "react";

export const ConfirmSection = () => {
    return (
        <div className="col-sm-12 white">
            <hr className="offset-md" />
            <div className="row">
                <div className="col-xs-6 col-md-4">
                    <h3 className="h5 no-margin">Sub total: $1 200</h3>
                    <h3 className="h4 no-margin">Total: $1 200</h3>
                </div>
                <div className="col-md-4 hidden-xs"></div>
                <div className="col-xs-6 col-md-4">
                    <button
                        className="btn btn-primary pull-right"
                        type="submit"
                    >
                        Confirm order
                    </button>
                </div>
            </div>
            <hr className="offset-md" />
        </div>
    );
};
