import React from 'react'
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
import SliderItemComponent from '../SliderItemComponent';

export default function GoldenOfferCopmonent() {
    console.log(productData);
    return (
        <div className='golden-offer'>
            <div className='title'>
                <a href="">
                    <div className='d-flex justify-center p-20'>
                        <img src={require('../../../assets/images/big_white_golden_offer.svg').default} alt="پیشنهاد طلایی" />
                        <span className="text-[26px] text-white " title='پیشنهاد طلایی'>پیشنهاد طلایی</span>
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
                    {productData.map((item) => (
                        <SwiperSlide>
                            <SliderItemComponent
                                item={item}
                                offerPrice={
                                    <div className='offer-price d-flex text-gray position-relative'>
                                        <span class="line-through">{item.offerPrice}</span>
                                        <span class="mr-5">تومان</span>
                                    </div>
                                }
                            >
                                <div className='offer text-white p-5 background-red-primary justify-center d-flex position-relative'>%{item.offer}</div>
                            </SliderItemComponent>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
