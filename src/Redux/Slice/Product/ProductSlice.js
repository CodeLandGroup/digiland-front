import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../../assets/Data/ProductData";
import { useSearchParams } from "react-router-dom";

export const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: productData,
    reducers: {
        ProductFilter: (state) => {
            let product = [];
            let checkColor = 0;
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

                    if (product.length == 0 && param.get('brand') == null) {
                        let p = productData.filter(x => x.color.includes(item));
                        p.forEach((item) => {
                            product.push(item)
                        })
                    }
                    else {
                        let p = product.filter(x => x.color.includes(item));
                        if (p.length == 0)
                            checkColor++;
                        else{
                            product =[]
                            p.forEach((item) => {
                                product.push(item)
                            })
                        }

                    }
                    console.log(item)
                })
                console.log(checkColor , param.get('color').split(',').length)
                if (checkColor == param.get('color').split(',').length)
                    product = []
            }
            if (param.size == 0)
                product = productData;
            console.log(product);
            return product;
        }
    }
});


export const { ProductFilter } = ProductSlice.actions
export const productSliceData = (state) => state.productReducer
export default ProductSlice.reducer