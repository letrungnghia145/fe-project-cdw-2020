import React from "react";

export const FilterSection = () => {
    return (
        <React.Fragment>
            {/* Filter */}
            <div className="col-sm-4 col-md-3">
                <hr className="offset-lg" />
                <div className="filter">
                    <div className="item">
                        <div className="title">
                            <a
                                href="#clear"
                                data-action="open"
                                className="down"
                            >
                                {" "}
                                <i className="ion-android-arrow-dropdown" />{" "}
                                Open
                            </a>
                            <a href="#clear" data-action="clear">
                                {" "}
                                <i className="ion-ios-trash-outline" /> Clear
                            </a>
                            <h1 className="h4">Type</h1>
                        </div>
                        <div className="controls">
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Desktops">
                                    Desktops
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Laptops">
                                    Laptops
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Tablets">
                                    Tablets
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Hybrid">
                                    Hybrids
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="item">
                        <div className="title">
                            <a
                                href="#clear"
                                data-action="open"
                                className="down"
                            >
                                {" "}
                                <i className="ion-android-arrow-dropdown" />{" "}
                                Open
                            </a>
                            <a href="#clear" data-action="clear">
                                {" "}
                                <i className="ion-ios-trash-outline" /> Clear
                            </a>
                            <h1 className="h4">Screen</h1>
                        </div>
                        <div className="controls grid">
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="7 in">
                                    7 in
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="10 in">
                                    10 in
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="11 in">
                                    11 in
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="14 in">
                                    14 in
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="15 in">
                                    15 in
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="17 in">
                                    17 in
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="item">
                        <div className="title">
                            <a
                                href="#clear"
                                data-action="open"
                                className="down"
                            >
                                {" "}
                                <i className="ion-android-arrow-dropdown" />{" "}
                                Open
                            </a>
                            <a href="#clear" data-action="clear-price">
                                {" "}
                                <i className="ion-ios-trash-outline" /> Clear
                            </a>
                            <h1 className="h4">Price</h1>
                        </div>
                        <div className="controls">
                            <br />
                            <div id="slider-price" />
                            <br />
                            <p id="amount" />
                        </div>
                    </div>
                    <br />
                    <div className="item lite">
                        <div className="title">
                            <a
                                href="#clear"
                                data-action="open"
                                className="down"
                            >
                                {" "}
                                <i className="ion-android-arrow-dropdown" />{" "}
                                Open
                            </a>
                            <a href="#clear" data-action="clear">
                                {" "}
                                <i className="ion-ios-trash-outline" /> Clear
                            </a>
                            <h1 className="h4">Manufacturer</h1>
                        </div>
                        <div className="controls">
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Hp">
                                    Hp
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="ASUS">
                                    ASUS
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Acer">
                                    Acer
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Dell">
                                    Dell
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Sony">
                                    Sony
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Apple">
                                    Apple
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Lenovo">
                                    Lenovo
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                            <div
                                className="checkbox-group"
                                data-status="inactive"
                            >
                                <div className="checkbox">
                                    <i className="ion-android-done" />
                                </div>
                                <div className="label" data-value="Microsoft">
                                    Microsoft
                                </div>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    defaultValue
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
