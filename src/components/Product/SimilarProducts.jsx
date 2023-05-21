import React from 'react'
import { productData } from '../../assets/Data/ProductData'
import Title2Product from '../Home/Title2Product'
import SliderItemComponent from '../Home/SliderItemComponent'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import '../../assets/css/Home/slider.css'
import '../../assets/css/Product/SimilarProduct.css'
import { FreeMode, Pagination } from "swiper";

export default function SimilarProducts() {
    return (
        <div className='similar-product container'>
            <Title2Product titleName="محصولات مشابه"/>

            <div className='similarProduct-slider container overflow-hidden'>
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
                            <SliderItemComponent  item={item}>
                            </SliderItemComponent>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
