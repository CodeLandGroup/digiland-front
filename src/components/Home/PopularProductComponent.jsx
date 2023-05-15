import React from 'react'
// import components
import PopularProductItem from './PopularProductItem'
import TitleProdoct from './TitleProdoct'
// import style css
import '../../assets/css/Home/PopularProduct.css'
import {Grid} from '@mui/material'

export default function PopularProductComponent() {
    return (
        <div className='popular-product container'>
            <TitleProdoct titleName='دسته بندی پر بازدید' />
            <div className='popular-items'>
                <Grid container spacing={4} columns={14}>
                    <Grid item xs={2}>
                    <PopularProductItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularProductItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularProductItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularProductItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularProductItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularProductItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularProductItem />
                    </Grid>
                </Grid>
            </div>

            <div>
                
            </div>
          
        </div>
    )
}
