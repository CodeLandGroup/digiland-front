import React from 'react'
// import components
import PopularCategorieItem from './PopularCategorieItem'
import TitleProdoct from '../TitleProdoct'
import PopularCategorieCover from './PopularCategorieCover'
// import style css
import '../../../assets/css/Home/PopularCategorie.css'
// import mui Component
import {Grid} from '@mui/material'


export default function PopularProductComponent() {
    return (
        <div className='popular-Categorie container'>
            <TitleProdoct titleName='دسته بندی پر بازدید' />
            <div className='popular-items'>
                <Grid container spacing={4} columns={14}>
                    <Grid item xs={2}>
                    <PopularCategorieItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularCategorieItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularCategorieItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularCategorieItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularCategorieItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularCategorieItem />
                    </Grid>
                    <Grid item xs={2}>
                    <PopularCategorieItem />
                    </Grid>
                 
                </Grid>
            </div>

            <div className='popular-cover'>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                    <PopularCategorieCover />
                    </Grid>
                    <Grid item xs={6}>
                    <PopularCategorieCover />
                    </Grid>
                </Grid>
            </div>
          
        </div>
    )
}
