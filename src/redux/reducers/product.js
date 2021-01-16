import * as Types from "../contants";
const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            return { ...state, isLoading: true };
        case Types.FETCH_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, data: action.payload };
        case Types.FETCH_PRODUCTS_FAILED:
            return { ...state, isLoading: false, error: action.payload };
        // ------------- //
        // case Types.FETCH_PRODUCT:
        //     return { ...state, isLoading: true };
        // case Types.FETCH_PRODUCT_SUCCESS:
        //     return { ...state, isLoading: false, data: action.payload };
        // case Types.FETCH_PRODUCT_FAILED:
        //     return { ...state, isLoading: false, error: action.payload };
        default:
            break;
    }
    return state;
};

export default productReducer;
