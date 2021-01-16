import React from "react";

export const TagSection = () => {
    return (
        <div className="tags">
            <div className="container">
                <div className="btn-group pull-right sorting">
                    <button
                        type="button"
                        className="btn btn-default btn-sm dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="ion-arrow-down-b" /> Sorting by name
                    </button>
                    <ul className="dropdown-menu">
                        <li className="active">
                            <a href="#">
                                {" "}
                                <i className="ion-arrow-down-c" /> Name [A-Z]
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                {" "}
                                <i className="ion-arrow-up-c" /> Name [Z-A]
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                {" "}
                                <i className="ion-arrow-down-c" /> Price
                                [Low-High]
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                {" "}
                                <i className="ion-arrow-up-c" /> Price
                                [High-Low]
                            </a>
                        </li>
                    </ul>
                </div>
                <p>Search by tags</p>
                <div className="btn-group" data-toggle="buttons">
                    <label className="btn btn-default btn-sm active">
                        <input
                            type="radio"
                            name="options"
                            id="option1"
                            defaultChecked
                        />{" "}
                        All products
                    </label>
                    <label className="btn btn-default btn-sm">
                        <input type="radio" name="options" id="option2" />{" "}
                        Desktops
                    </label>
                    <label className="btn btn-default btn-sm">
                        <input type="radio" name="options" id="option3" />{" "}
                        Laptops
                    </label>
                    <label className="btn btn-default btn-sm">
                        <input type="radio" name="options" id="option4" />{" "}
                        Tablets
                    </label>
                    <label className="btn btn-default btn-sm">
                        <input type="radio" name="options" id="option5" />{" "}
                        Hybrids
                    </label>
                </div>
            </div>
        </div>
    );
};
