import React from 'react'

export default function ImageCoverItem(props) {
    console.log(props.item.title);
    return (
        <a href="">
            <div className='item overflow-hidden  position-relative'>
                <img className='w-100 transition' src={props.item.img} alt="" />
                <div className='item-title justify-center w-100 background-red-primary d-flex position-absolute text-white transition'>
                    <h3>{props.item.title}</h3>
                </div>
            </div>
        </a>
    )
}
