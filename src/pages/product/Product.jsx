import React from "react";

import { ImageSection } from "./image-section";
import { ProductDetailsSection } from "./product-details-section";
import { DescriptionSection } from "./description-section";
import { EvaluateSection } from "./evaluate-section";

import * as api from "../../helpers/FakeApi";
import { RelateProductSection } from "./relate-product-section";

export const Product = (props) => {
    const { state } = props.location;
    console.log(state);
    const product = state ? state : api.getSingleProduct(1);
    return (
        <React.Fragment>
            <hr className="offset-lg" />
            <hr className="offset-lg" />
            <hr className="offset-lg hidden-xs" />
            <section className="product">
                <div className="container">
                    <div className="row">
                        <ImageSection images={product.images} />
                        {/* <ProductDetailsSection product={product} /> */}
                    </div>
                    <hr className="offset-sm hidden-xs" />
                    <div className="row">
                        <DescriptionSection description={product.description} />
                        <EvaluateSection
                            evaluates={api.getAllProductEvaluates(product.id)}
                        />
                    </div>
                </div>
            </section>
            <hr className="offset-lg" />
            <RelateProductSection products={api.fetchProducts()} />
        </React.Fragment>
    );
};
