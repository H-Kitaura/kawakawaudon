import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Top = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src="kawakawa-gaikan.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="naisou.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="logo512.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Top