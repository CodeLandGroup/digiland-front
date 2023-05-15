import React from 'react'
import '../../assets/css/Home/TitleProduct.css'
export default function TitleProdoct(props) {
    return (
        <div className='title-product'>
            <h3 className='title-name'>{props.titleName}</h3>
            <svg width="46" height="4" viewBox="0 0 46 4" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="46" y1="1.99609" y2="1.99609" stroke="#E10A0A" stroke-width="3"></line></svg>
        </div>
    )
}
