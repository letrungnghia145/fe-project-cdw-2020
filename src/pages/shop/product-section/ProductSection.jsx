import React from "react";
import { Product } from "../../../commons";

export const ProductSection = (props) => {
    const { products } = props;
    return (
        <React.Fragment>
            {/* Products */}
            <hr className="offset-lg" />
            <div className="products">
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div
                                className="col-sm-6 col-md-4 product"
                                key={index}
                            >
                                <Product product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
};
