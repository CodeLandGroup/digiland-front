import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaRegNewspaper } from 'react-icons/fa'
import { TbDiscount2 } from 'react-icons/tb'
import {HiOutlineLogin , HiOutlineLocationMarker} from 'react-icons/hi'
import {SlBasket} from 'react-icons/sl'
import { Container } from '@mui/material'



export default function NavbarComponent() {
  return (
    <div  className='navbar container'>
                <div className='navbar-right'>
                    <ul>
                        <li>
                            <img src={require('../../assets/images/dgland.svg').default} alt="" />
                        </li>
                        <li className='navbar-item'>
                            <i><AiOutlineMenu /></i>
                            <h3>دسته بندی کالا ها</h3>
                        </li>
                        <li className='navbar-item'>
                            <i><FaRegNewspaper /></i>
                            <h3>مجله دیجی لند</h3>

                        </li>
                        <li className='navbar-item'>
                            <i><TbDiscount2 /></i>
                            <h3>پیشنهاد طلایی</h3>
                        </li>
                    </ul>
                </div>


                <div className='navbar-left'>
                    <div className='navbar-search'>
                        <input type="text" />
                    </div>
                    <div className='navbar-login'>
                        <i><HiOutlineLogin /></i>
                         <h3>وارد شوید</h3>
                    </div>
                    <div className='navbar-icons'>
                       <i><HiOutlineLocationMarker /></i>
                       <i><SlBasket /></i>
                    </div>
                </div>
            </div>
  )
}
