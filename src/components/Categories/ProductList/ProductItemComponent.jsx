import React from 'react'
import { Grid } from '@mui/material'

export default function ProductItemComponent() {
    return (
        <Grid item xs={3}>
            <div className='product-item p-5 background-white w-90 mt-5 transition'>
                <a href="" className=''>
                    <div className='item-top'>
                        <div className='item-img text-center'>
                            <img className='w-100' src={require('../../../assets/images/Product/product1.png')} alt="" />
                        </div>
                        <div className='item-color d-flex justify-center p-5  w-20 background-light_grey'>
                            <div className='color' style={{ background: 'red' }}></div>
                            <div className='color  mr-5' style={{ background: 'green' }}></div>
                        </div>
                        <div className='item-title w-100 text-center mt-20'>
                            این یک گوشی هست بله قطعا یک گوشی هست ایا میخواهی
                        </div>
                    </div>
                    <div className='item-price mt-40 text-red-primary d-flex'>
                        <h3>13,000 </h3>
                        <span className='mr-5'>تومان</span>
                    </div>
                </a>
            </div>

        </Grid>
    )
}
