import React from 'react'
import '../../../assets/css/productList.css'
import ProductOrderbyComponent from './ProductOrderbyComponent'
import ProductItemComponent from './ProductItemComponent'
import { Grid, Pagination } from '@mui/material'

export default function ProductListComponent() {
    return (
        <div className='product-list container mt-20'>
            <ProductOrderbyComponent />
            <Grid container className='product background-light_grey p-5 mt-20'>
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />

            </Grid>
            <Pagination count={10}  className='mt-30 d-flex mb-20' />
        </div>
    )
}
