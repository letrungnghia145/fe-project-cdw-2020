import React from "react";
import { ProductItem } from "./product-item";

export const ProductSection = () => {
    return (
        <div className="col-md-5 white">
            <hr className="offset-md visible-xs visible-sm" />
            <div className="checkout-cart">
                <div className="content">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
            <hr className="offset-md visible-xs visible-sm" />
        </div>
    );
};
