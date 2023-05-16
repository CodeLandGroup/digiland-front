import { Grid } from '@mui/material'
import React from 'react'
import CategorieItem from './CategorieItem'

export default function CategoriesComponent(props) {
  return (
    <div className={`categorie ${props.isActive ? 'active': ''}`}>
        <Grid container >
            <Grid item xs={6}>
            <CategorieItem />
            </Grid>    
        </Grid>
    </div>
  )
}
