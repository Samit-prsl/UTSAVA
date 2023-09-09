import React from 'react'
import { FaInstagram,FaFacebook,FaYoutube } from 'react-icons/fa'
export default function Footer() {
  return (
    <>
    <div className=' border-t-2 border-gray-800 mt-5 lg:flex lg:justify-between p-5'>
      <div className=' flex flex-col lg:w-[33%] font-[Cinzel]'>
        <h1 className=' text-2xl text-black tracking-wide text-center py-2'>CONTACT US</h1>
        <h1 className=' text-gray-600 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore eaque commodi tenetur blanditiis quisquam beatae. Quae quo ducimus harum aut!</h1>
      </div>
      <div className='flex flex-col lg:w-[33%] font-[Cinzel] my-3 lg:my-0'>
        <h1 className=' text-2xl text-black tracking-wide text-center py-2'>ENQUIRE</h1>
        <div className=' flex justify-center items-center py-3'>
        <button className=' px-2 lg:w-1/2 py-2 bg-cyan-400 text-black hover:bg-cyan-600 hover:text-white'>WEDDING PLANNER</button>
        </div>
      </div>
      <div className='flex flex-col lg:w-[33%] font-[Cinzel] my-3 lg:my-0'>
      <h1 className=' text-2xl text-black tracking-wide text-center py-2'>FOLLOW US</h1>
      <div className=' flex justify-center gap-10 pt-3'>
        <FaFacebook className=' text-3xl'/>
        <FaInstagram className=' text-3xl'/>
        <FaYoutube className=' text-3xl'/>
      </div>
      </div>
     
    </div>
     <h1 className=' font-[Quicksand] py-2 text-lg text-gray-500 text-center'>COPYRIGHT &#169; 2023</h1>
     </>
  )
}
