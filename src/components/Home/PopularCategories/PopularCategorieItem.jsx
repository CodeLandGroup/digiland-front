import React from 'react'

export default function PopularCategorieItem(props) {
  return (
    <div className='popular-item'>
        <div className='item-image' style={{ backgroundColor: props.data.backColor}}>
           <img src={props.data.img} alt="" />
        </div>
        <div className='item-name'>
          <h3>{props.data.productName}</h3>
        </div>
    </div>
  )
}
