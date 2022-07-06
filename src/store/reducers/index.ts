import { combineReducers } from "redux";

import { fetchProductsReducer } from "./order";

export const reducers = combineReducers({
    fetchProductsReducer: fetchProductsReducer,
})