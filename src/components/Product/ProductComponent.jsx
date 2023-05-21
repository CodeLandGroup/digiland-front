import { Grid } from '@mui/material'
import React from 'react'
import ProductInfo from './ProductInfo'
import ProductTips from './ProductTips'
import SlidePreview from './SlidePreview'

export default function ProductComponent() {
    return (
        <div className='product-section container'>
            <Grid container>
                <Grid item xs={4}>
                  <SlidePreview />
                </Grid>
                <Grid item xs={5}>
                   <ProductInfo />
                </Grid>
                <Grid item xs={3}>
                   <ProductTips />
                </Grid>
            </Grid>
        </div>
    )
}
