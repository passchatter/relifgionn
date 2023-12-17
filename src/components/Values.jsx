import React from 'react'

import logo1 from '../images/value1.png'
import logo2 from '../images/value2.png'
import logo3 from '../images/value3.png'

import iklan1 from '../images/series1.jpg'
import iklan2 from '../images/series2.jpg'
import iklan3 from '../images/series3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import file CSS utama Swiper
import 'swiper/css/navigation'; // Jika Anda memerlukan navigasi (contoh: tombol next/prev)
import 'swiper/css/pagination'; // Jika Anda memerlukan pagination


const Values = () => {
  return (
    <>
      <div className="container section z-20 relative mt-20">
        <h1 className='font-titleFont text-3xl font-bold text-slate-950 text-center'>Best Value Relifgion you will enjoy do it</h1>
        <div className="max-w-6xl mx-auto mt-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center bg-white shadow-md rounded-lg p-6">
                <div className="max-w-max p-5 rounded-full mx-auto">
                    <div className="bg-slate-100 max-w-max p-5 rounded-full inline-block">
                    <img src={logo1} className="w-[40px] h-[40px]" alt="" />
                    </div>
                    <h1 className="mt-2">100% Good quality</h1>
                    <p className='font-titleFont mt-4 text-[.9rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, cum sed accusamus aperiam quis repellendus?</p>
                </div>
                <div className="max-w-max p-5 rounded-full mx-auto">
                    <div className="bg-slate-100 max-w-max p-5 rounded-full inline-block">
                    <img src={logo2} className="w-[40px] h-[40px]" alt="" />
                    </div>
                    <h1 className="mt-2">Satisvacion guaranted</h1>
                    <p className='font-titleFont mt-4 text-[.9rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, cum sed accusamus aperiam quis repellendus?</p>
                </div>
                <div className="max-w-max p-5 rounded-full mx-auto">
                    <div className="bg-slate-100 max-w-max p-5 rounded-full inline-block">
                    <img src={logo3} className="w-[40px] h-[40px]" alt="" />
                    </div>
                    <h1 className="mt-2">Trusted Custommer</h1>
                    <p className='font-titleFont mt-4 text-[.9rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, cum sed accusamus aperiam quis repellendus?</p>
                </div>
            </div>
        </div>
      </div>
     <div className="mt-[-10rem]">
      <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            // Untuk perangkat dengan lebar lebih kecil dari 768px (mobile)
            0: {
              slidesPerView: 1,
              spaceBetween:0
            },
            550: {
              slidesPerView: 2, // Tampilkan 2 slide pada tampilan mobile
              spaceBetween:10
            },
            // Untuk perangkat dengan lebar lebih besar dari 768px (desktop)
            1024: {
              slidesPerView: 3, // Tampilkan 3 slide pada tampilan desktop
            },
          }}
          >
          <SwiperSlide><img className='w-full z-0 h-[450px]' src={iklan1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full z-0 h-[450px]' src={iklan2} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full z-0 h-[450px]' src={iklan3} alt="" /></SwiperSlide>
      </Swiper>
     </div>
    </>
  )
}

export default Values