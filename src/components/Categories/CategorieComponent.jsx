import { Grid } from '@mui/material'
import React from 'react'

export default function CategorieComponent() {
  return (
    <div className='categorie-section container'>
        <Grid container>
            <Grid item xs={3}  style={{ backgroundColor: 'green'}}>
               xx
            </Grid>
            <Grid item xs={9} style={{ backgroundColor: 'red'}}>
                bb
            </Grid>

        </Grid>
    </div>
  )
}
