import { Grid } from '@mui/material'
import React from 'react'
import ProductListComponent from './ProductList/ProductListComponent'
import FilterCategorieComponent from './FilterCategorieComponent'
import { useSearchParams } from 'react-router-dom';

export default function CategorieComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='categorie-section container'>
      <Grid container>
        <Grid item xs={3}>
          <FilterCategorieComponent />
        </Grid>
        <Grid item xs={9} >
          <ProductListComponent />
        </Grid>
      </Grid>

    </div >
  )
}
