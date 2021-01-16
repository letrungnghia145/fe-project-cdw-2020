import * as Types from "../contants";
export const fetchProducts = () => {
    return {
        type: Types.FETCH_PRODUCTS,
    };
};
export const fetchProductsSuccess = (products) => {
    return {
        type: Types.FETCH_PRODUCTS_SUCCESS,
        payload: products,
    };
};
export const fetchProductsFailed = (error) => {
    return {
        type: Types.FETCH_PRODUCTS_FAILED,
        payload: error,
    };
};
