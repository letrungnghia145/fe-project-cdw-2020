import React from "react";
import { Product } from "../../../commons";

export const ProductSession = (props) => {
    const category = null;
    const { products } = props;
    return (
        <section className="products">
            <div className="container">
                <h2 className="h2 upp align-center"> {category.name} </h2>
                <hr className="offset-lg" />
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div
                                className={`col-md-${
                                    12 / products.length
                                } product`}
                                key={index}
                            >
                                <Product product={product} />
                            </div>
                        );
                    })}
                </div>
                <div className="align-right align-center-xs">
                    <hr className="offset-sm" />
                    <a href="./store/">
                        {" "}
                        <h5 className="upp">View all {category.name} </h5>{" "}
                    </a>
                </div>
            </div>
        </section>
    );
};
