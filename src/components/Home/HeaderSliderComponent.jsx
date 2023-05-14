import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import '../../assets/css/Home/slider.css'

// import required modules
import { Pagination,Autoplay } from "swiper";

export default function HeaderSliderComponent() {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={require('../../assets/images/slider/slide1.jpeg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../../assets/images/slider/slide3.jpeg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../../assets/images/slider/slide2.jpeg')} alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}
