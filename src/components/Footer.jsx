import React from 'react'


const Footer = () => {
  return (
   <>
     
    <footer class="py-14 pt-14 mt-14 md:mt-36 bg-slate-100">
        <div class="container lg:flex grid md:grid-cols-2 gap-y-5 gap-x-10 justify-between text-slate-900">
            <div class="footer-card lg:max-w-sm">
                
              <div className="flex items-center gap-2">
          
                <h1 className='text-2xl text-slate-950 font-semibold'>Relifgion</h1>
              </div>
             
                <p class="mt-6">Wumbo is a team of creative developers who have an interest in design. We create design templates, UI kits and other products that make people's work easier and faster.</p>
                <ul class="flex gap-3 mt-3">
                    <li><a href="#"><ion-icon class="text-xl border p-2 rounded-full" name="logo-instagram"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="text-xl border p-2 rounded-full" name="logo-tiktok"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="text-xl border p-2 rounded-full" name="logo-whatsapp"></ion-icon></a></li>
                </ul>
            </div>
            <ul>
                <li><p class="text-xl text-slate-950 mb-2">Product</p></li>
                <li class="mb-1"><a href="#">social feed</a></li>
                <li class="mb-1"><a href="#">reach UI kit</a></li>
                <li class="mb-1"><a href="#">statisla design</a></li>
                <li class="mb-1"><a href="#">more product</a></li>
               
            </ul>
            <ul>
                <li><p class="text-xl text-slate-950 mb-2">Company</p></li>
                <li class="mb-1"><a href="#">about us</a></li>
                <li class="mb-1"><a href="#">contacts</a></li>
                <li class="mb-1"><a href="#">privaci policy</a></li>
                <li class="mb-1"><a href="#">team of services</a></li>
                <li class="mb-1"><a href="#">helf</a></li>
            </ul>
            <ul>
                <li><p class="text-xl text-slate-950 mb-2">Get in touch</p></li>
                <li class="mb-1"><a href="#">twitter</a></li>
                <li class="mb-1"><a href="#">facebook</a></li>
                <li class="mb-1"><a href="#">dribble</a></li>
            </ul>
        </div>
        <div class="container  mt-16 md:mt-36 text-slate-950">
            <p class="text-center text-[.9rem0">COPYRIGHT © 2023 all right reserved</p>
        </div>
    </footer>

   </>
  )
}

export default Footer