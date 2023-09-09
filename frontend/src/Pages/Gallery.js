import React from 'react'
import Footer from '../Components/Footer'
export default function Gallery() {
  return (
    <div className=' min-h-screen  flex overflow-x-hidden'>
    <div className='  lg:flex-[0.25] flex-[2] '>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
    <div className=' lg:px-10 px-2 lg:py-8 py-5 flex-[10]'>
        <h1 className=' lg:text-5xl text-3xl pl-5 font-[Raleway] tracking-[1.5rem] text-gray-800 text-center lg:mb-8 mb-5'>GALLERY</h1>
        <div className=' min-h-screen lg:p-[10px] p-5'>
            <h1 className=' font-[Cinzel] text-red-500 lg:text-3xl text-xl text-center mb-5'>यत्र दृश्यं तत्र सत्यं, चित्रं क्षणिकदर्शनम्।
              तद्रूपं तद्रसं चैव, चित्रफलं तदैव नः॥
            </h1>
            <div className=' lg:grid lg:grid-cols-3 gap-8 mb-8'>
                <img src="https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmclMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className=' lg:h-[450px] h-[400px] w-full object-cover my-3 lg:my-0' />
                <img src="https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className=' lg:h-[450px] h-[400px] w-full object-cover my-3 lg:my-0'  />
                <img src="https://images.unsplash.com/photo-1507217633297-c9815ce2f885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' lg:h-[450px] h-[400px] w-full object-cover my-3 lg:my-0'  />
                <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className=' lg:h-[450px] h-[400px] w-full object-cover my-3 lg:my-0'  />
                <img src="https://plus.unsplash.com/premium_photo-1673896380752-0fd3d3980889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlZGRpbmclMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className=' lg:h-[450px] h-[400px] w-full object-cover my-3 lg:my-0'  />
                <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className=' lg:h-[450px] h-[400px] w-full object-cover my-3 lg:my-0'  />
            </div>
            <div>
            <div className=' bg-blue-50 min-h-[500px] w-full flex  ' >
            <div className=' lg:flex-[1] flex-[1]'>
                     <img src="https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" alt="" className='  h-full w-full object-cover rounded' />
            </div>
            <div className=' lg:flex-[12] flex-[10] flex flex-col justify-between '>
            <div className=' h-8 w-full '>
                     <img src="https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" alt="" className='  h-full w-full object-cover ' />
            </div>
               <div className=' flex flex-col justify-between lg:gap-12 gap-8 lg:p-8 p-5'>
                  <h1 className=' font-[Cinzel] text-red-500 lg:text-3xl text-xl text-center lg:mb-5'>
                  Want us or you to click these memories?
                  </h1>
                  <div className=' lg:flex lg:justify-between lg:px-20'>
                      <button className=' px-2 lg:w-1/4 py-2 my-2 lg:my-0 bg-cyan-400 text-black hover:bg-cyan-600 hover:text-white rounded font-[Cinzel]'>Hire us as a photographer!</button>
                      <button className=' px-2 lg:w-1/4 py-2 my-2 lg:my-0 bg-cyan-400 text-black hover:bg-cyan-600 hover:text-white rounded font-[Cinzel]'>Join us as a photographer!</button>
                  </div>
               </div>
               <div className=' h-8 w-full'>
                    <img src="https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" alt="" className='  h-full w-full object-cover ' />
               </div>
               </div>
               <div className=' lg:flex-[1] flex-[1] '>
            <img src="https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" alt="" className=' h-full w-full object-cover rounded '/>
          </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
    <div className=' lg:flex-[0.25] flex-[2] '>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
   </div>
  )
}
