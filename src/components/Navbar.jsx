import React from 'react';

import header1 from '../images/header1.jpg'
import header2 from '../images/header2.jpg'
import header3 from '../images/header3.jpg'
import header4 from '../images/header4.jpg'

const Headers = () => {


  return (
    <>
      <div className="relative">
        {/* <div className="h-[500px] w-[500px] left-[-10rem] top-0 absolute rounded-full bg-blue-400/10 filter blur-xl"></div>
        <div className="h-[150px] w-[150px] transform rotate-45 top-0 right-0 absolute rounded-lg bg-orange-400/10 filter blur-xl"></div>
        <div className="h-[500px] w-[500px] bottom-[25rem] md:bottom-0 right-[-17rem] absolute rounded-full bg-green-500/10 filter blur-xl"></div> */}
        <div className="container py-14 pb-28">
          <div className="text-slate-950 text-center mx-auto mt-5 font-titleFont font-bold md:leading-[6rem] text-4xl md:text-6xl max-w-4xl">
            "discovering the luxury <br /> fashion brand <div className="mt-1 text-orange-400 inline-block"><ion-icon name="bag-handle-outline"></ion-icon> </div> for your life"
          </div>
          <div className='mt-4 max-w-3xl mx-auto text-center font-titleFont'><p className='text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium, ducimus pariatur expedita saepe numquam molestias odit esse molestiae repellat amet doloremque.</p></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
             <div className="">
                <img className='rounded-xl shadow-lg' src={header1} alt="" />
             </div>
             <div className="">
                <div className=" relative">
                     <img className='w-full h-[50%] rounded-xl shadow-lg' src={header2} alt="" />
                </div>
                <div className="mt-6 text-slate-950">
                    <p className='mb-2'>custom</p>
                    <p>Kaos choose isra 120</p>
                    <p>Rp100.000.00</p>
                    <hr />
                    <p className='text-[.9rem] font-titleFont mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
                </div>
             </div>
             <div className="">
                 <div className="mb-6 text-slate-950">
                    <p className='mb-2'>custom</p>
                    <p>Kaos choose isra 120</p>
                    <p>Rp100.000.00</p>
                    <hr />
                    <p className='text-[.9rem] font-titleFont mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
                </div>
                <div className="relative">
                     <img className='w-full h-[50%] rounded-xl shadow-lg' src={header3} alt="" />
                </div>
             </div>
             <div className="">
                <img className='rounded-xl shadow-lg' src={header4} alt="" />
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;
