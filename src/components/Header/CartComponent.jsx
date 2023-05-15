import React from 'react'

export default function CartComponent(props) {
  return (
    <div className={`cart ${props.isActive ? 'active' : ''}`}>
        <div className='cart-header'>
            <h3>مشاهده سبد خرید</h3>
        </div>
        <div className='cart-content'>
               <div className='empty-cart'>
                 <img src={require('../../assets/images/header/emptyBasket.png')} alt="" />
                 <h3>سبد خرید شما خالی است</h3>
               </div>
        </div>
    </div>
  )
}
