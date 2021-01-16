import React from "react";

export const ProductItem = () => {
    return (
        <div className="media">
            <div className="media-left">
                <a href="#">
                    <img
                        className="media-object"
                        src="../assets/img/products/ipad-air.jpg"
                        alt="iPad Air"
                    />
                </a>
            </div>
            <div className="media-body">
                <h2 className="h4 media-heading">iPad Air</h2>
                <label>Tablets</label>
                <p className="price">$449.99</p>
            </div>
            <div className="controls">
                <div className="input-group">
                    <span className="input-group-btn">
                        <button
                            className="btn btn-default btn-sm"
                            type="button"
                            data-action="minus"
                        >
                            <i className="ion-minus-round" />
                        </button>
                    </span>
                    <input
                        type="text"
                        className="form-control input-sm"
                        placeholder="Qty"
                        defaultValue={1}
                        readOnly
                    />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-default btn-sm"
                            type="button"
                            data-action="plus"
                        >
                            <i className="ion-plus-round" />
                        </button>
                    </span>
                </div>
                {/* /input-group */}
                <a href="#remove">
                    {" "}
                    <i className="ion-trash-b" /> Remove{" "}
                </a>
            </div>
        </div>
    );
};
