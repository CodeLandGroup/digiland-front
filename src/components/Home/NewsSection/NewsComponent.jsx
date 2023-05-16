import { Grid } from '@mui/material'
import React from 'react'
import { newsData } from '../../../assets/Data/NewsData'
import NewsItem from './NewsItem'
import '../../../assets/css/Home/NewsSection.css'
import TitleProdoct from '../TitleProdoct'
export default function NewsComponent() {
    return (
        <div className='news-section container'>
            <TitleProdoct titleName='در جریان باش'/>
            <div className='news-items'>
            <Grid container spacing={6}>
                {
                    newsData.map(item => (
                        <Grid item xs={6} >
                           <NewsItem key={item.id} data={item}/>
                        </Grid>
                    )
                    )
                }
            </Grid>
            </div>
      
        </div>
    )
}
