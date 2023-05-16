import React from 'react'
import HeaderSliderComponent from '../../components/Home/HeaderSliderComponent'
import PopularCategorieComponent from '../../components/Home/PopularCategories/PopularCategorieComponent'
import GoldenOfferCopmonent from '../../components/Home/GoldenOffer/GoldenOfferCopmonent'
import ImageCoverComponent from '../../components/Home/ImageCover/ImageCoverComponent'
import PopularMobilesComponent from '../../components/Home/PopularMobiles/PopularMobilesComponent'
import PopularAccessoriesComponent from '../../components/Home/PopularAccessories/PopularAccessoriesComponent'
import TrailerComponent from '../../components/Home/TrailerComponent'
import { ImageCoverComputerLaptopData, ImageCoverData, ImageCoverVideoAudioData } from '../../assets/Data/ImageCoverItemData'
import NewsComponent from '../../components/Home/NewsSection/NewsComponent'
export default function Home() {
    return (
        <>
            <HeaderSliderComponent />
            <PopularCategorieComponent />
            <GoldenOfferCopmonent />
            <ImageCoverComponent data={ImageCoverData} titleName="گوشی موبایل" />
            <PopularMobilesComponent />
            <NewsComponent />
            <ImageCoverComponent data={ImageCoverVideoAudioData} titleName="صوتی تصویری" />
            <TrailerComponent />
            <ImageCoverComponent data={ImageCoverComputerLaptopData} titleName="کامپیوتر لب تاب" />
           


        </>
    )
}
