import { all, put, takeEvery } from "redux-saga/effects";
import { fetchProductsFailed, fetchProductsSuccess } from "../actions";
import { callApi } from "../api/api";
import * as Types from "../contants";

export default function* productSaga() {
    yield all([watchFetchProducts()]);
}

export function* watchFetchProducts() {
    yield takeEvery(Types.FETCH_PRODUCTS, handleFetchProducts);
}

export function* handleFetchProducts() {
    try {
        const res = yield callApi("products", "get");
        yield put(fetchProductsSuccess(res.data));
    } catch (error) {
        yield fetchProductsFailed(error);
    }
}
