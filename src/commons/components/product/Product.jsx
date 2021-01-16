import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

import productImg from "../../../assets/img/product/3.jpg";

export const Product = (props) => {
    const { product } = props;
    return (
        <div className="body">
            <a href="#favorites" className="favorites" data-favorite="inactive">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
            </a>
            <Link to="/product">
                <img
                    src={product.img ? product.img : productImg}
                    alt="Apple iMac 27 Retina"
                />
            </Link>
            <div className="content align-center">
                <p className="price">{product.price}</p>
                <h2 className="h3">{product.name}</h2>
                <hr className="offset-sm" />
                <Link className="btn btn-link" to={{pathname:`/product/${product.id}`, state:product}}>
                    <i className="fa fa-eye" aria-hidden="true"></i> Details
                </Link>
                <a className="btn btn-primary btn-sm rounded">
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>{" "}
                    Add to cart
                </a>
            </div>
        </div>
    );
};

export default Product;
