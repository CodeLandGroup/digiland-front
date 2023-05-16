import React from 'react'
import TitleProdoct from '../TitleProdoct'
import '../../../assets/css/Home/ImageCover.css'
import { ImageCoverData } from '../../../assets/Data/ImageCoverItemData'
import ImageCoverItem from './ImageCoverItemComponent'


export default function ImageCoverComponent(props) {
  

    return (
        <div className='image-cover mt-20 p-10'>
            <TitleProdoct titleName={props.titleName} />

            <div className='image-cover-item container d-flex w-100 mt-20'>
                {
                    props.data.map((item) => (
                        <ImageCoverItem item={item} />
                    ))
                }
            </div>
        </div>
    )
}
