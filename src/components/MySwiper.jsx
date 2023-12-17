import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import file CSS utama Swiper
import 'swiper/css/navigation'; // Jika Anda memerlukan navigasi (contoh: tombol next/prev)
import 'swiper/css/pagination'; // Jika Anda memerlukan pagination

import gambar1 from '../images/baju1.jpg'
import gambar2 from '../images/baju3.jpg'
import gambar3 from '../images/baju5.jpg'
import gambar4 from '../images/baju6.jpg'
import gambar5 from '../images/baju7.jpg'
import gambar6 from '../images/baju8.jpg'
import gambar7 from '../images/baju9.jpg'
import gambar8 from '../images/baju10.jpg'

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }} // Jika Anda ingin menggunakan pagination
      breakpoints={{
        // Untuk perangkat dengan lebar lebih kecil dari 768px (mobile)
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3, // Tampilkan 2 slide pada tampilan mobile
        },
        // Untuk perangkat dengan lebar lebih besar dari 768px (desktop)
        1024: {
          slidesPerView: 4, // Tampilkan 3 slide pada tampilan desktop
        },
      }}
     
    >
      <SwiperSlide>
        <img src={gambar5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={gambar8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={gambar3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={gambar4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={gambar1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={gambar6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={gambar7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={gambar2} alt="" />
      </SwiperSlide>
      {/* Tambahkan SwiperSlide lebih banyak untuk slide tambahan */}
    </Swiper>
  );
};

export default MySwiper;
