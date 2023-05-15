import React from 'react'

export default function PopularCategorieItem() {
  return (
    <div className='popular-item'>
        <div className='item-image'>
           <img src={require('../../../assets/images/popular-product/image1.png')} alt="" />
        </div>
        <div className='item-name'>
          <h3>هدفون</h3>
        </div>
    </div>
  )
}
