import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../../assets/Data/ProductData";

export const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: productData,
    reducers: {
    }
});

export const {  } = ProductSlice.actions
export const productSliceData = (state) => state.ProductSlice
export default ProductSlice.reducer