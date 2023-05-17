import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slice/Product/ProductSlice";

const store = configureStore({
    reducer: {
        productReducer: ProductSlice
    }
});

export default store;