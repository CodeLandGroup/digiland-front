import React from 'react'
import '../../assets/css/Home/TitleProduct.css'
export default function Title2Product(props) {
  return (
    <div className='title2-Product'>
        <div className='line'></div>
        <h3>{props.titleName}</h3>
        <div className='line'></div>
    </div>
  )
}
