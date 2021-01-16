import { combineReducers } from "redux";
import categoryReducer from "./category";
import productReducer from "./product";

const rootReducer = combineReducers({
    categoryReducer,
    productReducer,
});

export default rootReducer;
