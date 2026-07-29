'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Pagination } from 'swiper/modules';
import "swiper/css/pagination";


export default function Slidder() {
  return (
    <>
      <Swiper
      modules={[ Pagination]}
      spaceBetween={50}
      pagination={{clickable : true}}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>

    </>
  )
}
/*

// Import Swiper React components

// Import Swiper styles

export default () => {
  return (
    
  );
};
*/