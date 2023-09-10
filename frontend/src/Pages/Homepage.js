import React, { useState } from 'react'
import { VscThreeBars } from 'react-icons/vsc'
import { RxCross1 } from 'react-icons/rx'
import Slider from '../Components/Slider'
import Info from '../Components/Info'
import Footer from '../Components/Footer'

export default function Homepage() {

 const [dropdown,Setdropdown] = useState(false)

  return (
   <div className=' min-h-screen  flex overflow-x-hidden'>
    <div className='  lg:flex-[0.25] flex-[0.5] '>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
    <div className=' lg:px-10 px-6 lg:py-8 py-5 flex-[10]'>
        <a href='/'><h1 className=' lg:text-5xl text-3xl pl-5 font-[Raleway] tracking-[1.5rem] text-gray-800 text-center lg:mb-8 mb-5'>UTSAVA</h1></a>
        <div className=' border-t-2 border-gray-800 border-b-2 lg:h-14 lg:p-[10px] p-1'>
        { dropdown ? 
             <>
            <div className=' flex justify-end items-center py-1'>
            <RxCross1 className=' cursor-pointer text-xl' onClick={()=>{Setdropdown(false)}}/>
            </div>
             <ul className=' flex-col justify-between gap-5 font-[Cinzel] text-gray-600 lg:text-2xl text-center text-xl py-2'>
             <a href="/venues"><li className='cursor-pointer hover:text-gray-900' title='Venue'>sthanam</li></a>
             <a href="/services"><li title='Services' className='cursor-pointer hover:text-gray-900'>seva</li></a>
             <a href="/gallery"><li title='photos' className='cursor-pointer hover:text-gray-900'>gallery</li></a>
             <a href="/contact"><li title='contact' className='cursor-pointer hover:text-gray-900 '>sampark</li></a>
         </ul>
         </>
         :
         <div className=' text-3xl flex justify-center items-center lg:hidden mx-auto'>
                <VscThreeBars className=' cursor-pointer ' onClick={()=>{Setdropdown(true)}}/>
        </div>
            }
            <ul className=' lg:flex lg:justify-between font-[Cinzel] text-gray-600 lg:text-2xl hidden text-xl'>
            <a href="/venues"><li className='cursor-pointer hover:text-gray-900' title='Venue'>sthanam</li></a>
            <a href="/services"><li title='Services' className='cursor-pointer hover:text-gray-900'>seva</li></a>
                <a href="/gallery"><li title='photos' className='cursor-pointer hover:text-gray-900'>gallery</li></a>
                <a href='/contact'><li title='contact' className='cursor-pointer hover:text-gray-900 '>sampark</li></a>
            </ul>
        </div>
        <Slider/>
        <Info/>
        <Footer/>
    </div>
    <div className=' lg:flex-[0.25] flex-[0.5] '>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
   </div>
  )
}
