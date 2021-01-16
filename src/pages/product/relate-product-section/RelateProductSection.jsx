import React from "react";
import { Product } from "../../../commons";

export const RelateProductSection = (props) => {
    const { products } = props;
    return (
        <section className="products">
            <div className="container">
                <h2 className="upp align-center-xs"> Related products </h2>
                <hr className="offset-lg" />
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div
                                className="col-sm-4 col-md-3 product"
                                key={index}
                            >
                                <Product product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
