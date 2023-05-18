import React from 'react'
// import react icons
import {AiOutlineMobile} from 'react-icons/ai'
import {GrFormPrevious} from 'react-icons/gr'
import { Link } from 'react-router-dom'
export default function () {
  return (
    <div className='categorie-item'>
           <div className='categorie-title'>
               <i><AiOutlineMobile /></i>
               <Link to="/categories">گوشی موبایل</Link>
               <i><GrFormPrevious /></i>
           </div>
           <div className='categorie-tag'>
                 <div className='tag-name'>
                    <a href="">اپل</a>
                 </div>
               
           </div>
    </div>
  )
}
