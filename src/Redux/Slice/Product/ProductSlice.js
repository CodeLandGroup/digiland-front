import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../../assets/Data/ProductData";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: productData,
    reducers: {
        ProductFilter: (state) => {
            let product = [];
            const [param, setParam] = useSearchParams(); // Get Prams
            if (param.get('brand') != null) { // Check brand param
                param.get('brand').split(',').forEach((item) => {   // Filter by brand (param = asus,samsung)
                    let p = productData.filter(x => x.brand == item);
                    p.forEach((item) => {
                        product.push(item)  // push to product
                    })
                })
            }
            if (param.get('color') != null) { // check color param
                param.get('color').split(',').forEach((item) => {
                    if (product.length == 0) {
                        let p = productData.filter(x => x.color.includes(item));
                        p.forEach((item) => {
                            product.push(item)
                        })
                    }
                    else {
                        let p = product.filter(x => x.color.includes(item));
                        product.splice(0, product.length);
                        p.forEach((item) => {
                            product.push(item)
                        })
                    }
                })
            }
            if (param.size == 0)
                product = productData;
            return product;
        }
    }
});


export const { ProductFilter } = ProductSlice.actions
export const productSliceData = (state) => state.productReducer
export default ProductSlice.reducer