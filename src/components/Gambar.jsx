import React from 'react'

import iklan1 from '../images/iklan1.jpg'
import iklan2 from '../images/iklan2.jpg'
import iklan3 from '../images/iklan3.jpg'

const Gambar = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-[-9rem] z-0">
           <img className='w-full z-0 h-[500px]' src={iklan1} alt="" />
           <img className='w-full z-0 h-[500px]' src={iklan2} alt="" />
           <img className='w-full z-0 h-[500px]' src={iklan3} alt="" />
        </div>
    </>
  )
}

export default Gambar