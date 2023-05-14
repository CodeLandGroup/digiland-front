import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaRegNewspaper } from 'react-icons/fa'
import { MdLocalOffer } from 'react-icons/md'
import {HiOutlineLogin , HiOutlineLocationMarker} from 'react-icons/hi'
import {SlBasket} from 'react-icons/sl'



export default function NavbarComponent() {
  return (
    <div maxWidth="sm" className='navbar'>
                <div className='navbar-right'>
                    <ul>
                        <li>
                            <img src={require('../../assets/images/dgland.svg')} alt="" />
                        </li>
                        <li>
                            <i><AiOutlineMenu /></i>
                            <h3>دسته بندی کالا ها</h3>
                        </li>
                        <li>
                            <i><FaRegNewspaper /></i>
                            <h3>مجله دیجی لند</h3>

                        </li>
                        <li>
                            <i><MdLocalOffer /></i>
                            <h3>پیشنهاد طلایی</h3>

                        </li>
                    </ul>
                </div>


                <div className='navbar-left'>
                    <div>
                        <input type="text" />
                    </div>
                    <div className='login'>
                        <i><HiOutlineLogin /></i>
                         <h3>وارد شوید</h3>
                    </div>
                    <div className='icons'>
                       <i><HiOutlineLocationMarker /></i>
                       <i><SlBasket /></i>
                    </div>
                </div>
            </div>
  )
}
