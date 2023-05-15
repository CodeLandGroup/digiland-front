import React from 'react'

export default function SliderItemComponent(props) {
    return (
        <div className='slider-item w-100 h-100'>
            <a href="#">
                <div className='item position-relative d-flex'>
                    <div className='item-hover background-white position-absolute transition'></div>
                    <div className='item-list text-center w-100 h-100 overflow-hidden'>
                        <div className='image p-10 position-relative'>
                            <div className='w-100 h-100 transition'>
                                <img className='w-100' src={props.item.img} alt="" />
                                <div className="d-flex w-100 justify-center transition">
                                    <div className="shadow-product transition"></div>
                                </div>
                            </div>
                        </div>
                        <div className='title mt-10 overflow-hidden position-relative'>
                            {props.item.title}
                        </div>
                        <div className='d-flex justify-end text-center w-100 mt-10'></div>
                        <div className='slider-footer d-flex'>
                            {props.children}
                            <div className='price justify-end d-flex w-100'>
                                {props.offerPrice}
                                <div className='text-red-primary position-relative mt-10 mb-10'>
                                    <span>{props.item.price}</span>
                                    <span className='mr-5'>تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
