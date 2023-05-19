import React from 'react'
import { Grid } from '@mui/material'
import { MdOutlineFormatIndentIncrease } from 'react-icons/md'

export default function ProductOrderbyComponent() {
    return (
        <div className='product-orderby p-5'>
            <Grid container>
                <Grid item xs={6}>
                    <div className='orderby d-flex'>
                        <MdOutlineFormatIndentIncrease className='text-gray' />
                        <span>مرتب سازی بر اساس:</span>
                        <div className='d-flex orderby-item'>
                            <span className='transition cursor-pointer mr-15 text-gray active'>کمترین قیمت</span>
                            <span className='transition cursor-pointer mr-15 text-gray'> بیشترین قیمت</span>
                            <span className='transition cursor-pointer mr-15 text-gray'>چدید ترین ها</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className='product-count w-100 text-end text-gray'>
                        <span>22 کالا</span>
                    </div>
                </Grid>
            </Grid>
        </div>)
}
