import React from "react";
import { ConfirmSection } from "./confirm-section";
import { FormSection } from "./form-section";
import { ProductSection } from "./product-section";

export const Checkout = () => {
    return (
        <React.Fragment>
            <hr className="offset-top" />
            <div className="white">
                <div className="container checkout">
                    <h1>Checkout order</h1>
                    <hr className="offset-sm" />
                </div>
            </div>
            <hr className="offset-md" />
            <div className="container checkout">
                <form action="index.html" method="post">
                    <div className="row">
                        <FormSection />
                        <ProductSection />
                        <hr className="offset-lg hidden-xs" />
                        <ConfirmSection />
                    </div>
                </form>
            </div>
            <hr className="offset-lg" />
            <hr className="offset-sm" />
        </React.Fragment>
    );
};
