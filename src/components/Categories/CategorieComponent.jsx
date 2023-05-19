import { Grid } from '@mui/material'
import React from 'react'
import FilterCategorieComponent from './FilterCategorieComponent'

export default function CategorieComponent() {
  return (
    <div className='categorie-section container'>
        <Grid container>
            <Grid item xs={3}  style={{ backgroundColor: 'green'}}>
               <FilterCategorieComponent />
            </Grid>
            <Grid item xs={9} style={{ backgroundColor: 'red'}}>
                bb
            </Grid>
        </Grid>
    </div>
  )
}
