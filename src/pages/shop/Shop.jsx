import React, { useEffect } from "react";
import { FilterSection } from "./filter-section";
import { TagSection } from "./tag-section";
import { ProductSection } from "./product-section";
import { PaginationSection } from "../../commons";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions";

export const Shop = () => {
    const products = useSelector((state) => state.productReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <React.Fragment>
            <hr className="offset-top" />
            <TagSection />
            <div className="container">
                <div className="row">
                    <FilterSection />
                    <div className="col-sm-8 col-md-9">
                        <ProductSection products={products} />
                        <PaginationSection />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
