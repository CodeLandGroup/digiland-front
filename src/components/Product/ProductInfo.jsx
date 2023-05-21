import React from 'react'
import { BsShare, BsCheckCircle } from 'react-icons/bs'
import { AiOutlineHeart,AiTwotoneStar } from 'react-icons/ai'

import '../../assets/css/Product/ProductInfo.css'
export default function ProductInfo() {
    return (
        <div className='Product-Info'>
            <div className='brand-name'>
                <h3>برند : سامسونگ</h3>
                <div className='product-icon'>
                    <BsShare />
                    <AiOutlineHeart />
                </div>
            </div>
            <div className='product-title'>
                <h2>گوشی موبایل سامسونگ مدل Galaxy S23 Ultra 5G ظرفیت 256 گیگابایت و رم 12 گیگابایت</h2>
                <h3>
                    Samsung Galaxy S23 Ultra 5G Dual SIM 256GB And 12GB RAM Mobile Phone
                </h3>

            </div>
            <div className='product-status'>
                    <div className='product-star'>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                    </div>
                    <div className='product-inventory'>
                        <BsCheckCircle />
                        <h3>موجود</h3>
                    </div>
                </div>
            <div className='product-price'>
            
                <h3 className='price'>56,999,000 تومان</h3>
            </div>
            <div className='product-Attributes'>
                <ul>
                    <li>
                        <span>تعداد سیم کارت : </span>
                        <h3>دو سیم کارت</h3>
                    </li>
                    <li>
                        <span>فناوری صفحه نمایش :</span>
                        <h3>OLED</h3>
                    </li>
                    <li>
                        <span>ظرفیت حافظه RAM :</span>
                        <h3> 4 گیگ</h3>
                    </li>
                    <li>
                        <span>شبکه های ارتباطی :</span>
                        <h3>5G</h3>
                    </li>
                </ul>
            </div>
            <div className='product-color'>
                <h3>رنگ : سبز</h3>
                <div className='color-circle'>
                    <div style={{ backgroundColor: 'green' }}></div>
                    <div style={{ backgroundColor: 'yellow' }}></div>
                    <div style={{ backgroundColor: 'black' }}></div>
                </div>
            </div>
            <div className='product-garranty'>
                <h3>گارانتی:</h3>
                <div>
                    <h3>دی جی سرویس</h3>
                    <span>18 ماه گارانتی</span>
                </div>
            </div>
            <div className='add-btn'>
                <button>افزودن به سبد خرید</button>
            </div>
        </div>
    )
}
