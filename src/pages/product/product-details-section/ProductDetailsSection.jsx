import React from "react";
import { DetailsListSection } from "./details-list-section/DetailsListSection";

export const ProductDetailsSection = (props) => {
    const { product } = props;
    return (
        <div className="col-sm-5 col-md-5 no-padding-xs">
            <div className="caption" style={{padding: "28px 40px"}}>
                {/* <img
                    src="../assets/img/brands/microsoft.png"
                    alt="Microsoft"
                    className="brand hidden-xs hidden-sm"
                /> */}
                <h1>{product.name}</h1>
                <DetailsListSection
                    properties={[
                        { name: "Manufacturer date", value: product.mfg },
                        { name: "Expired date", value: product.exp },
                        { name: "Stock", value: product.stock },
                        { name: "Category", value: product.category },
                    ]}
                />
                <hr className="offset-md hidden-sm" />
                <hr className="offset-sm visible-sm" />
                <hr className="offset-xs visible-sm" />
                <p className="price">{product.price}</p>
                <hr className="offset-md" />
                <button className="btn btn-primary rounded">
                    <i className="fa fa-shopping-bag" aria-hidden="true" style={{marginRight: 10}} />
                    Add to cart
                </button>
                <button className="btn btn-link">
                    <i className="fa fa-heart" aria-hidden="true"/> Add to
                    wishlist
                </button>
            </div>
        </div>
    );
};
