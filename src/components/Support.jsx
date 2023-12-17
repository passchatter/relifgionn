import React from 'react'
import logo1 from '../images/logo2.png'
import logo2 from '../images/shopee.png'
import logo3 from '../images/tokopedia.png'
import logo4 from '../images/istyle.png'

const Support = () => {
  return (
   <>
    <div className="bg-slate-100/30 py-14">
        <div className="container">
            <div className="mx-auto">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-10 md:gap-4 text-center items-center justify-center ">
                    <div className="mx-auto">
                        <img src={logo1} alt="" className='filter grayscale w-[120px] md:w-[170px]'/>
                    </div>
                    <div className="mx-auto">
                        <img src={logo2} alt="" className='filter grayscale w-[120px] md:w-[170px]'/>
                    </div>
                    <div className="mx-auto">
                        <img src={logo3} alt="" className='filter grayscale w-[120px] md:w-[170px]' />
                    </div>
                    <div className="mx-auto">
                        <img src={logo4} alt="" className='filter grayscale w-[120px] md:w-[165px]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Support