import React from 'react'
import Footer from '../Components/Footer'
export default function Venues() {
  return (
    <div className=' min-h-screen  flex overflow-x-hidden'>
    <div className='  lg:flex-[0.25] flex-[1] '>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
    <div className=' lg:px-10 px-6 lg:py-8 py-5 flex-[10]'>
        <a href='/'><h1 className=' lg:text-5xl text-3xl pl-5 font-[Raleway] tracking-[1.0rem] text-gray-800 text-center lg:mb-8 mb-5'>STHANAM</h1></a>
        <div className=' min-h-screen'>
    
        </div>
        <Footer/>
    </div>
    <div className=' lg:flex-[0.25] flex-[1] '>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
   </div>
  )
}
