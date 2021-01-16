import React from "react";

export const CartModal = () => {
    return (
        <div className="cart" data-toggle="inactive">
            <div className="label">
                <i className="ion-bag" /> 7
            </div>
            <div className="overlay" />
            <div className="window">
                <div className="title">
                    <button type="button" className="close">
                        <i className="ion-android-close" />
                    </button>
                    <h4>Shopping cart</h4>
                </div>
                <div className="content">
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img
                                    className="media-object"
                                    src="assets/img/products/chrome-book-11.jpg"
                                    alt="HP Chromebook 11"
                                />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">HP Chromebook 11</h4>
                            <label>Laptops</label>
                            <p className="price">$199.99</p>
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
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img
                                    className="media-object"
                                    src="assets/img/products/chrome-book-14.jpg"
                                    alt="HP Chromebook 11"
                                />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="h4 media-heading">
                                HP Chromebook 14
                            </h4>
                            <label>Laptops</label>
                            <p className="price">$209.99</p>
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
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img
                                    className="media-object"
                                    src="assets/img/products/ipad-air.jpg"
                                    alt="iPad Air"
                                />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="h4 media-heading">iPad Air</h4>
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
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img
                                    className="media-object"
                                    src="assets/img/products/mi-pad-2.jpg"
                                    alt="HP Chromebook 11"
                                />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="h4 media-heading">Mi Pad 2</h4>
                            <label>Tablets</label>
                            <p className="price">$199.99</p>
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
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img
                                    className="media-object"
                                    src="assets/img/products/lenovo-yoga.jpg"
                                    alt="Lenovo Yoga"
                                />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="h4 media-heading">Lenovo Yoga</h4>
                            <label>Hybrid</label>
                            <p className="price">$199.99</p>
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
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img
                                    className="media-object"
                                    src="assets/img/products/surface-pro.jpg"
                                    alt="HP Chromebook 11"
                                />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="h4 media-heading">Surface Pro</h4>
                            <label>Hybrid</label>
                            <p className="price">$199.99</p>
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
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img
                                    className="media-object"
                                    src="assets/img/products/asus-transformer.jpg"
                                    alt="HP Chromebook 11"
                                />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="h4 media-heading">
                                ASUS Transformer
                            </h4>
                            <label>Hybrid</label>
                            <p className="price">$199.99</p>
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
                </div>
                <div className="checkout container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 align-right">
                            <a className="btn btn-primary" href="checkout/">
                                {" "}
                                Checkout order{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

