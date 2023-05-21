import React from 'react'
import { TbTruck } from 'react-icons/tb'
export default function ProductTips() {
  return (
    <div className='Product-Tips'>
      <div className='tip'>
        <TbTruck />
        <h3>
          ارسال رایگان ویژه پیشنهاد طلایی
        </h3>
      </div>
      <div className='tip'>
        <TbTruck />
        <h3>
          کالا در انبار موجود و آماده ارسال است
        </h3>
      </div>
    </div>
  )
}
