import React, { useState, ChangeEvent, useEffect } from 'react'
import '../../../assets/css/Categories/productList.css'
import ProductOrderbyComponent from './ProductOrderbyComponent'
import ProductItemComponent from './ProductItemComponent'
import { Grid, Pagination } from '@mui/material'
import { useSelector } from 'react-redux'
import { productSliceData } from '../../../Redux/Slice/Product/ProductSlice'

export default function ProductListComponent() {
    const product = useSelector(productSliceData);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(product.length % 10 - 1);

    useEffect(() => {
        setPage(1);
        setPageCount(Math.ceil(product.length / 10));
    }, [product])
    const pageChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <div className='product-list container mt-20'>
            <ProductOrderbyComponent />
            <Grid container className='product background-light_grey p-5 mt-20'>
                {
                    product.length != 0
                        ? product.slice((page - 1) * 10, (page - 1) * 10 + 10).map((item) => (
                            <ProductItemComponent item={item} />
                        )) : <h2 className='p-10 mt-10 mb-10 justify-center text-gray'>محصولی یافت نشد</h2>
                }
            </Grid>
            <Pagination count={pageCount} page={page} className='mt-30 d-flex mb-20' onChange={pageChange} />
        </div>
    )
}
