import { call, put, takeLatest } from "redux-saga/effects";
import { setProducts, setLoading, setError } from "../slices/productSlice";
import { fetchProducts } from "../../services/api";
import { Product } from "../../types";

function* fetchProductsSaga(): Generator<unknown, void, Product[]> {
  try {
    yield put(setLoading(true));
    const products = yield call(fetchProducts);
    yield put(setProducts(products));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setError(error.message || "Failed to fetch products"));
    } else {
      yield put(setError("An unknown error occurred"));
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* watchFetchProducts() {
  yield takeLatest("FETCH_PRODUCTS", fetchProductsSaga);
}
