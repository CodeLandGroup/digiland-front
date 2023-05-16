import React from 'react'

export default function TrailerComponent() {
    return (
        <div className='trailer container mt-20'>
            <a href="" className='overflow-hidden  w-100'>
                <img src={require('../../assets/images/trailer/trailerImage.webp')} alt="" className='h-100 w-100' style={{ borderRadius: "15px" }} />
            </a>
        </div>
    )
}
