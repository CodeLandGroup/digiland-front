import React from 'react'
// import components
import PopularCategorieItem from './PopularCategorieItem'
import TitleProdoct from '../TitleProdoct'
import PopularCategorieCover from './PopularCategorieCover'
// import style css
import '../../../assets/css/Home/PopularCategorie.css'
// import mui Component
import { Grid } from '@mui/material'
// import data file
import { PopularCategoryData } from '../../../assets/Data/PopularCategoryData'
import { PopularCategorieCoverData } from '../../../assets/Data/PopularCategoryData'
import { Link } from 'react-router-dom'
export default function PopularProductComponent() {
    return (
        <div className='popular-Categorie container'>
            <TitleProdoct titleName='دسته بندی پر بازدید' />
            <div className='popular-items'>
                <Grid container spacing={4} columns={14}>
                    {
                        PopularCategoryData.map(item => (
                            <Grid item xs={2}>
                                <Link to='/categories'>
                                    <PopularCategorieItem key={item.id} data={item} />
                                </Link>

                            </Grid>
                        ))
                    }


                </Grid>
            </div>

            <div className='popular-cover'>
                <Grid container spacing={2} >
                    {
                        PopularCategorieCoverData.map(item => (
                            <Grid item xs={6}>
                                <PopularCategorieCover key={item.id} data={item} />
                            </Grid>
                        ))
                    }

                </Grid>
            </div>

        </div>
    )
}
