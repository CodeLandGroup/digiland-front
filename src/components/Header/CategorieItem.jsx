import React from 'react'
// import react icons
import {AiOutlineMobile} from 'react-icons/ai'
import {GrFormPrevious} from 'react-icons/gr'
export default function () {
  return (
    <div className='categorie-item'>
           <div className='categorie-title'>
               <i><AiOutlineMobile /></i>
               <h3>گوشی موبایل</h3>
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
