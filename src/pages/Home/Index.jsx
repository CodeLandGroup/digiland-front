import React from 'react'
import HeaderSliderComponent from '../../components/Home/HeaderSliderComponent'
import PopularCategorieComponent from '../../components/Home/PopularCategories/PopularCategorieComponent'
import GoldenOfferCopmonent from '../../components/Home/GoldenOffer/GoldenOfferCopmonent'
import ImageCoverComponent from '../../components/Home/ImageCover/ImageCoverComponent'

export default function Home() {
    return (
        <>
            <HeaderSliderComponent />
            <PopularCategorieComponent />
            <GoldenOfferCopmonent />
            <ImageCoverComponent itemType='ImageCoverData' titleName="گوشی مبایل" >
            </ImageCoverComponent>
        </>
    )
}
