'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Slider({spaceBetween = 0 , slidesPerView = 1 , listOfImages} : {spaceBetween? : number , slidesPerView? : number , listOfImages : string[] } ) {
  return (
    <Swiper className='absolute inset-0 bg-linear-to-r from-green/70 via-navy/30 to-transparent'
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      style={{ width: '100%', height: '300px' }}
        modules={[Navigation, Pagination ]}
       navigation
      pagination={{ clickable: true }}
   >
       { listOfImages.map((src  , index ) => (
              <SwiperSlide key={src} >
                  
               <img  src={src} alt={index}
                  style={{
              width: '100%',
             height: '100%',
             objectFit: 'cover',
           }} />
              
               </SwiperSlide>

       ))}
     </Swiper>
  );
};


    
 