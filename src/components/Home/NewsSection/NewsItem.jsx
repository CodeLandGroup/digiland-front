import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='news-item'>
        <img src={props.data.img} alt="" />
        <h3>{props.data.title}</h3>
    </div>
  )
}
