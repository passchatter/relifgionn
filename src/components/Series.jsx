import React from 'react'

import gambar5 from '../images/baju6.jpg'
import gambar6 from '../images/baju8.jpg'
import gambar7 from '../images/baju9.jpg'
import gambar8 from '../images/baju10.jpg'

const Series = () => {
  return (
    <>
     <div className="container pb-20 pt-14">
        <div data-aos ="fade-right" className="mt-20 flex flex-col md:flex-row md:items-center  justify-between md:px-8">
            <div className="max-w-md">
                <h1 className='text-4xl max-w-lg text-slate-950 font-titleFont'>Exclusive Series</h1>
                <p className='mt-3 text-[.9rem] font-titleFont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sed iure accusantium alias sequi eum dolore!</p>
            </div>
            <div className="flex items-center space-x-10"> {/* Menggunakan space-x untuk memberi jarak antara teks dan tombol */}
                <button className='mt-4 md:mt-0 text-slate-950 border border-orange-400 px-3 py-2 md:px-5 md:py-3 rounded-md flex items-center gap-3'>
                    See More <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
            </div>
        </div>

        <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               <div className="">
                    <img className=' w-full h-[310px] md:h-[400px] shadow-md rounded-md' src={gambar5} alt="" />
                    <p className='font-titleFont text-[.9rem] mt-3'>Tronw Borow</p>
                    <h1 className='font-titleFont font-bold text-[1rem] mt-2 text-slate-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, id.</h1>
                    <p className='font-semibold mt-1'>Rp.300.000.00</p>
               </div>
               <div className="">
                    <img className=' w-full h-[310px] md:h-[400px] shadow-md rounded-md' src={gambar6} alt="" />
                    <p className='font-titleFont text-[.9rem] mt-3'>Tronw Borow</p>
                    <h1 className='font-titleFont font-bold text-[1rem] mt-2 text-slate-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, id.</h1>
                    <p className='font-semibold mt-1'>Rp.300.000.00</p>
               </div>
               <div className="">
                    <img className=' w-full h-[310px] md:h-[400px] shadow-md rounded-md' src={gambar7} alt="" />
                    <p className='font-titleFont text-[.9rem] mt-3'>Tronw Borow</p>
                    <h1 className='font-titleFont font-bold text-[1rem] mt-2 text-slate-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, id.</h1>
                    <p className='font-semibold mt-1'>Rp.300.000.00</p>
               </div>
               <div className="">
                    <img className=' w-full h-[310px] md:h-[400px] shadow-md rounded-md' src={gambar8} alt="" />
                    <p className='font-titleFont text-[.9rem] mt-3'>Tronw Borow</p>
                    <h1 className='font-titleFont font-bold text-[1rem] mt-2 text-slate-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, id.</h1>
                    <p className='font-semibold mt-1'>Rp.300.000.00</p>
               </div>
                
            </div>
        </div>
     </div>
    </>
  )
}

export default Series