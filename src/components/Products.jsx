import React from 'react'

import colection1 from '../images/colection1.jpeg'
import colection2 from '../images/colection2.jpeg'
import colection3 from '../images/colection3.jpeg'
import colection4 from '../images/colection4.jpeg'
import colection5 from '../images/colection5.jpeg'
import colection6 from '../images/colection6.jpeg'

const Products = () => {
  return (
    <>
      <div className="container section">
        <div className="max-w-3xl mx-auto">
            <h1 className='font-titleFont text-4xl  mb-4 font-bold text-center'>Product Catalogue</h1>
            <p className='text-[.9rem] font-titleFont text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum expedita totam ducimus, aliquam explicabo possimus, eos, delectus illum libero suscipit architecto.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-8">
            <div className="p-4">
                <img src={colection1} className="w-full h-auto rounded-xl shadow-sm" alt="" />
                <div className="flex justify-between mt-4 font-titleFont">
                    <p className='text-titleFont'>Catunt</p>
                    <div className="transform rotate-45 text-black text-2xl"><ion-icon name="arrow-up-circle-outline"></ion-icon></div>
                </div>
                <h1 className='font-titleFont font-bold text-[.8rem] md:text-[.9rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, inventore.</h1>
                <h1 className="mt-2">Rp100.000.00</h1>
            </div>
            <div className="p-4">
                <img src={colection2} className="w-full h-auto rounded-xl shadow-sm" alt="" />
                <div className="flex justify-between mt-4 font-titleFont">
                    <p className='text-titleFont'>Catunt</p>
                    <div className="transform rotate-45 text-black text-2xl"><ion-icon name="arrow-up-circle-outline"></ion-icon></div>
                </div>
                <h1 className='font-titleFont font-bold text-[.8rem] md:text-[.9rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, inventore.</h1>
                <h1 className="mt-2">Rp100.000.00</h1>
            </div>
            <div className="p-4">
                <img src={colection3} className="w-full h-auto rounded-xl shadow-sm" alt="" />
                <div className="flex justify-between mt-4 font-titleFont">
                    <p className='text-titleFont'>Catunt</p>
                    <div className="transform rotate-45 text-black text-2xl"><ion-icon name="arrow-up-circle-outline"></ion-icon></div>
                </div>
                <h1 className='font-titleFont font-bold text-[.8rem] md:text-[.9rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, inventore.</h1>
                <h1 className="mt-2">Rp100.000.00</h1>
            </div>
            <div className="p-4">
                <img src={colection4} className="w-full h-auto rounded-xl shadow-sm" alt="" />
                <div className="flex justify-between mt-4 font-titleFont">
                    <p className='text-titleFont'>Catunt</p>
                    <div className="transform rotate-45 text-black text-2xl"><ion-icon name="arrow-up-circle-outline"></ion-icon></div>
                </div>
                <h1 className='font-titleFont font-bold text-[.8rem] md:text-[.9rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, inventore.</h1>
                <h1 className="mt-2">Rp100.000.00</h1>
            </div>
            <div className="p-4">
                <img src={colection5} className="w-full h-auto rounded-xl shadow-sm" alt="" />
                <div className="flex justify-between mt-4 font-titleFont">
                    <p className='text-titleFont'>Catunt</p>
                    <div className="transform rotate-45 text-black text-2xl"><ion-icon name="arrow-up-circle-outline"></ion-icon></div>
                </div>
                <h1 className='font-titleFont font-bold text-[.8rem] md:text-[.9rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, inventore.</h1>
                <h1 className="mt-2">Rp100.000.00</h1>
            </div>
            <div className="p-4">
                <img src={colection6} className="w-full h-auto rounded-xl shadow-sm" alt="" />
                <div className="flex justify-between mt-4 font-titleFont">
                    <p className='text-titleFont'>Catunt</p>
                    <div className="transform rotate-45 text-black text-2xl"><ion-icon name="arrow-up-circle-outline"></ion-icon></div>
                </div>
                <h1 className='font-titleFont font-bold text-[.8rem] md:text-[.9rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, inventore.</h1>
                <h1 className="mt-2">Rp100.000.00</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Products