import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import ProductListComponent from './ProductList/ProductListComponent'
import FilterCategorieComponent from './FilterCategorieComponent'
import { useDispatch } from 'react-redux';
import { ProductFilter } from '../../Redux/Slice/Product/ProductSlice';

export default function CategorieComponent() {
  const dispatch = useDispatch();
  const product = dispatch(ProductFilter());

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
