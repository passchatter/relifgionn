import React from 'react'
import { useState } from 'react'


const Header = () => {
    let [open, setOpen] = useState(false)
  return (
    <>
     <header className='top-0 left-0 w-100 py-3 md:py-5 bg-slate-100/20 border-b border-slate-500/25'>
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-32">
                    <p className='text-slate-900 font-semibold text-2xl'>Relifgion</p>            
                                  
                </div>

                <ul className='md:flex hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                        <li><a href="/" className='text-slate-900 text-md'>Home</a></li>
                        <li><a href="/about" className=' text-slate-900 text-md'>About</a></li>
                        <li><a href="" className='text-slate-900 text-md'>Vegetables</a></li>
                        <li><a href="" className='text-slate-900 text-md'>Contact</a></li>      
                 </ul>     

        

                <nav className={`z-20 absolute lg:static duration-500 md:w-auto md:bg-transparand shadow-lg md:shadow-none top-0 left-0 w-full bg-slate-100 md:bg-transparent px-4 py-5 md:py-0 ${open ? 'top-0 pb-10' : 'top-[-1000%]'}`}>
                   <p className='md:hidden text-slate-900 font-semibold text-2xl'>Relifgion</p>            
                    <ul className='flex sm:hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                        <li><a href="/" className='text-slate-900 text-md'>Home</a></li>
                        <li><a href="/about" className=' text-slate-900 text-md'>About</a></li>
                        <li><a href="" className='text-slate-900 text-md'>Vegetables</a></li>
                        <li><a href="" className='text-slate-900 text-md'>Contact</a></li>
                        
                    </ul>     

                    <div className="flex md:hidden text-slate-900 mt-9 items-center gap-6 pr-6 pt-3 lg:pr-10">
                        <div className="text-2xl"><ion-icon name="logo-instagram"></ion-icon></div>
                        <div className="text-2xl"><ion-icon name="logo-tiktok"></ion-icon></div>
                        <div className="text-2xl"><ion-icon name="logo-whatsapp"></ion-icon></div>
                    </div>
                </nav>

               
                <div class="text-slate-900">
                    <div className="sm:flex items-center lg:gap-10 hidden ">
                        <div className="flex items-center gap-6 pr-6 pt-3 lg:pr-10">
                            <div className="text-2xl"><ion-icon name="logo-instagram"></ion-icon></div>
                            <div className="text-2xl"><ion-icon name="logo-tiktok"></ion-icon></div>
                            <div className="text-2xl"><ion-icon name="logo-whatsapp"></ion-icon></div>
                        </div>
                        <p class="relative hidden lg:block">
                            <span class="relative inline-block py-2">
                            Custommers Support
                            <span class="absolute inset-x-0 bottom-0 h-1 bg-orange-300 rounded-full"></span>
                            </span>
                        </p>
                    </div>
                </div>

                <div onClick={()=>setOpen(!open)} className="z-20 text-slate-900 text-3xl pt-3 md:hidden">
                  <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
            </div>
            
        </div>
     </header>
    </>
  )
}

export default Header