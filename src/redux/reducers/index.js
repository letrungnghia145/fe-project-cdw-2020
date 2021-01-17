import { combineReducers } from "redux";
import categoryReducer from "./category";
import productReducer from "./product";
import userReducer from "./user";

const rootReducer = combineReducers({
    categoryReducer,
    productReducer,
    userReducer,
});

export default rootReducer;
