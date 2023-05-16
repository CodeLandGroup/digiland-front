import React from 'react'
import Title2Product from '../Title2Product'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import '../../../assets/css/Home/slider.css'
import '../../../assets/css/Home/GoldenOffer.css'
// import required modules
import { FreeMode, Pagination } from "swiper";
import { productData } from '../../../assets/Data/ProductData'
import '../../../assets/css/Home/PopularMobiles.css'
import SliderItemComponent from '../SliderItemComponent';

export default function PopularMobilesComponent() {
    return (
     
            <div className='popular-mobiles'>
                <Title2Product  titleName="محبوبترین موبایل ها"/>

                <div className='popularMobiles-slider container overflow-hidden'>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={60}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper  pt-20 pb-20"
                    >
                        {productData.map((item) => (
                            <SwiperSlide>
                                <SliderItemComponent
                                    item={item}>
                                </SliderItemComponent>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>



            </div>
        

    )
}
