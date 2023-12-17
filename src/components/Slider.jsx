import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 2000 }}
      grabCursor={true}
    >
      <SwiperSlide>
        <div className="bg-gray-200 p-4">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gray-300 p-4">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gray-400 p-4">Slide 3</div>
      </SwiperSlide>
      {/* Add more SwiperSlide components for additional slides */}
    </Swiper>
  );
};

export default Slider;
