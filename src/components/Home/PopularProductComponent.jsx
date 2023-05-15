import React from 'react'
// import components
import PopularProductItem from './PopularProductItem'
import TitleProdoct from './TitleProdoct'
import PopularProductCover from './PopularProductCover'
// import style css
import '../../assets/css/Home/PopularProduct.css'
// import mui Component
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

            <div className='popular-cover'>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                    <PopularProductCover />
                    </Grid>
                    <Grid item xs={6}>
                    <PopularProductCover />
                    </Grid>
                </Grid>
            </div>
          
        </div>
    )
}
