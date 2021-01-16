import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions";
import { BannerSection } from "./banner-section";
import { ProductSession } from "./product-section";

export const Home = () => {
    const categories = [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <React.Fragment>
            <BannerSection />
            <hr className="offset-lg" />
            <hr className="offset-lg" />
            {categories
                ? categories.map((category, index) => {
                      return <ProductSession category={category} key={index} />;
                  })
                : []}
            <hr className="offset-lg" />
            <hr className="offset-sm" />
        </React.Fragment>
    );
};
