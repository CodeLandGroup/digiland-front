import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../assets/css/Product/ProductInfo.css'
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export default function SlidePreview() {
  return (
    <div className="Slide-Preview">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require('../../assets/images/Product/product1.png')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/images/Product/product2.png')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/images/Product/product3.png')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/images/Product/product4.png')} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="slider-bottom">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="preview-item">
              <img src={require('../../assets/images/Product/product1.png')} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="preview-item">
              <img src={require('../../assets/images/Product/product2.png')} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="preview-item">
              <img src={require('../../assets/images/Product/product3.png')} alt="" />
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="preview-item">
              <img src={require('../../assets/images/Product/product3.png')} alt="" />
            </div>

          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}
