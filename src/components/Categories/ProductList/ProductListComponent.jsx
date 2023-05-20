import React from 'react'
import '../../../assets/css/Categories/productList.css'
import ProductOrderbyComponent from './ProductOrderbyComponent'
import ProductItemComponent from './ProductItemComponent'
import { Grid, Pagination } from '@mui/material'
import { useSelector } from 'react-redux'
import { productSliceData } from '../../../Redux/Slice/Product/ProductSlice'

export default function ProductListComponent() {
    const product = useSelector(productSliceData);
    return (
        <div className='product-list container mt-20'>
            <ProductOrderbyComponent />
            <Grid container className='product background-light_grey p-5 mt-20'>
                {
                    product.map((item) => (
                        <ProductItemComponent item={item} />
                    ))
                }
            </Grid>
            <Pagination count={10} className='mt-30 d-flex mb-20' />
        </div>
    )
}
