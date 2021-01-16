import React from "react";
import { PaginationSection } from "../../commons";
import { ProductSection } from "./product-section";
import * as api from "../../helpers/FakeApi";

export const Favorite = () => {
    const products = api.fetchProducts();
    return (
        <React.Fragment>
            <hr className="offset-lg" />
            <hr className="offset-lg" />
            <hr className="offset-lg hidden-xs" />
            <div className="container">
                <div className="row">
                    {/* Products */}
                    <div className="col-sm-12">
                        <hr className="offset-lg" />
                        <ProductSection products={products} />
                        <PaginationSection />
                    </div>
                    {/* /// */}
                </div>
            </div>
            <hr className="offset-lg" />
            <hr className="offset-sm" />
        </React.Fragment>
    );
};
