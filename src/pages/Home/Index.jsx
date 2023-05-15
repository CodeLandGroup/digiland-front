import React from 'react'
import HeaderSliderComponent from '../../components/Home/HeaderSliderComponent'
import PopularCategorieComponent from '../../components/Home/PopularCategories/PopularCategorieComponent'
import GoldenOfferCopmonent from '../../components/Home/GoldenOffer/GoldenOfferCopmonent'

export default function Home() {
    return (
        <>
            <HeaderSliderComponent />
            <PopularCategorieComponent />
            <GoldenOfferCopmonent />
        </>
    )
}
