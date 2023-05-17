import React from 'react'

export default function PopularCategorieCover(props) {
  return (
    <div className='cover'>
      <img src={props.data.img} alt="" />
    </div>
  )
}
