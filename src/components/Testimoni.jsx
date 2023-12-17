import React from 'react'
import header1 from '../images/iklan.jpg'

const Testimoni = () => {
  return (
    <>
       

        <div className="container pt-20 section px-8 md:px-0">
            <div className="text-center mx-auto mb-7">
                <h1 className='text-3xl font-titleFont font-bold text-slate-950'>Why Customer Love Us</h1>
            </div>

            <div className="grid gap-7 md:grid-cols-3">
                <div className="p-3 md:p-8 shadow-md bg-slate-200/20 rounded-md">
                   <ul className='flex gap-1 mb-2'>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
                    <p className='text-[.8rem] text-slate-900 font-titleFont font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est. Suscipit, modi natus maxime recusandae enim similique. Laborum, consequuntur maxime!</p>
                    <div className="flex items-center gap-4 mt-6">
                       
                        <div className="">
                            <h1 className='text-lg text-slate-950'>Kevin Adreas</h1>
                            
                        </div>
                    </div>
                </div>
                <div className="p-3 md:p-8 shadow-md bg-slate-200/20 rounded-md">
                   <ul className='flex gap-1 mb-2'>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
                    <p className='text-[.8rem] text-slate-900 font-titleFont font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est. Suscipit, modi natus maxime recusandae enim similique. Laborum, consequuntur maxime!</p>
                    <div className="flex items-center gap-4 mt-6">
                       
                        <div className="">
                            <h1 className='text-lg text-slate-950'>Kevin Adreas</h1>
                            
                        </div>
                    </div>
                </div>
                <div className="p-3 md:p-8 shadow-md bg-slate-200/20 rounded-md">
                   <ul className='flex gap-1 mb-2'>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
                    <p className='text-[.8rem] text-slate-900 font-titleFont font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est. Suscipit, modi natus maxime recusandae enim similique. Laborum, consequuntur maxime!</p>
                    <div className="flex items-center gap-4 mt-6">
                       
                        <div className="">
                            <h1 className='text-lg text-slate-950'>Kevin Adreas</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className=" section text-slate-950 py-8 container ">
            <div className="grid gap-9 grid-cols-1 md:grid-cols-2 items-center">
                <div className="orde order-1">
                    <h2 className="md:text-5xl md:leading-[4rem] text-3xl font-titleFont mb-4">
                    Get Your Exclusive Custom Shirt!
                    </h2>
                    <p className="text-sm mb-6 font-titleFont">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate in ipsa at cum labore rerum ea cumque molestias, suscipit harum asperiores nostrum debitis adipisci! Porro excepturi omnis aliquid explicabo modi.
                    </p>
                    <button className="border border-orange-300 text-slate-950 py-3 px-6 rounded-lg ">
                    Buy Now
                    </button>
                </div>
                <div className="px-9">
                    <img
                    src={header1}
                    alt="Promo Baju"
                    className='rounded-xl'
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimoni