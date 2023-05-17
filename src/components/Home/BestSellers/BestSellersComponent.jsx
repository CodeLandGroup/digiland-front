import React from 'react'
import { Grid } from '@mui/material'
import '../../../assets/css/Home/BestSellers.css'
import SliderItemComponent from '../SliderItemComponent'
import { BestSellersData } from '../../../assets/Data/BestSellers'
export default function BestSellersComponent() {
  return (
    <div className='bestSellers-section'>
        <div className='bestSellers-wrapper container'>
              <div className='bestSellesr-header'>
                <img src={require('../../../assets/images/BestSellers/HeaderSection.png')} alt="" />
              </div>
              <div className='bestSellesrs-items'>
                 <Grid container columns={10} spacing={2}>
                    {
                    BestSellersData.map(item => (
                        <Grid item xs={2}>
                        <SliderItemComponent key={item.id} item={item}/>
                     </Grid>

                    ))
                    }
                  
                 </Grid>
              </div>
              <div className='bestSellesrs-btn'>
                   <button>مشاهده همه</button>
              </div>
        </div>
    </div>
  )
}
