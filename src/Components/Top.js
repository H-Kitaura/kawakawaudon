import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Top = () => {
  return (
    <div className="m-0">ここにトップ画像が入ります
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>画像１</SwiperSlide>
      <SwiperSlide>画像２</SwiperSlide>
      <SwiperSlide>画像３</SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Top