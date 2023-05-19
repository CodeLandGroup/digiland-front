import React from 'react'
import Switch from '@mui/material/Switch';
import '../../assets/css/Categories/FilterCategorieComponent.css'
import FilterItemsComponent from './FilterItemsComponent';
import { ColorFilterData,BrandFilterData } from '../../assets/Data/FilterCategorieData';
export default function FilterCategorieComponent() {

    return (
        <div className='fliter-box'>
            <div className='filter-wrapper'>
                <h3>فیلتر ها</h3>
                <div className='inventory-checkbox'>
                    <Switch
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <label htmlFor="">فقط کالا های موجود</label>
                </div>
                <FilterItemsComponent filterName='برند' height='150px' data={BrandFilterData}/>
                <FilterItemsComponent filterName='رنگ' height='150px'   data={ColorFilterData}/>
                <FilterItemsComponent filterName='قیمت' height='150px'/>
            </div>

        </div>
    )
}