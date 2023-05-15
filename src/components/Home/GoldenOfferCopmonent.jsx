import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import '../../assets/css/Home/slider.css'
import '../../assets/css/Home/GoldenOffer.css'
// import required modules
import { FreeMode, Pagination } from "swiper";

export default function GoldenOfferCopmonent() {
    return (
        <div className='golden-offer'>
            <div className='title'>
                <a href="">
                    <div className='d-flex justify-center p-20'>
                        <img src={require('../../assets/images/big_white_golden_offer.svg').default} alt="" />
                        <span class="text-[26px] text-white ">پیشنهاد طلایی</span>
                    </div>
                </a>
            </div>
            <div className='golden-slider container'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper  p-20"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
