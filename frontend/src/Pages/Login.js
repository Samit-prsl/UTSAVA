import React from 'react'
import Footer from '../Components/Footer'

export default function Login() {
  return (
    <div className=' min-h-screen overflow-x-hidden'>
    <div className=' min-h-screen  flex overflow-x-hidden'>
    <div className='  lg:flex-[0.25] flex-[0.5] '>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
    <div className='lg:px-48 px-3 lg:py-10 py-5 flex-[10]'>
    <h1 className=' lg:text-4xl text-2xl pl-5 font-[Raleway] tracking-[1.5rem] text-gray-800 text-center mb-14'>LOGIN</h1>
    <div className='  w-full flex justify-center items-center pb-10'>
        <div className=' bg-blue-50 min-h-[500px] w-full flex  ' >
            <div className=' lg:flex-[1] flex-[1]'>
                     <img src="https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" alt="" className='  h-full w-full object-cover rounded' />
            </div>
            <div className=' lg:flex-[12] flex-[10] flex flex-col justify-between '>
               <div className=' h-8 w-full '>
                     <img src="https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" alt="" className='  h-full w-full object-cover ' />
               </div>
               <div className=' flex flex-col justify-between lg:gap-12 gap-8 lg:p-8 p-5'>
               <h1 className=' font-[Cinzel] text-red-500 lg:text-3xl text-xl text-center'>सर्वस्य चाहं हृदि सन्निविष्टो
                मत्तः स्मृतिर्ज्ञानमपोहनञ्च।
                वेदैश्च सर्वैरहमेव वेद्यो
                वेदान्तकृद्वेदविदेव चाहम्।।</h1>
                        <div className=' flex justify-center items-center'>
                            <input type="text" className=' outline-none lg:w-3/4 bg-gray-300 h-16 p-2 font-[Quicksand] text-gray-900 lg:text-xl text-md placeholder:text-red-400 rounded-2xl' placeholder=' Email Address' />
                        </div>
                        <div className=' flex justify-center items-center'>
                            <input type="text" className=' outline-none lg:w-3/4 bg-gray-300 h-16 p-2 font-[Quicksand] text-gray-900 lg:text-xl text-md placeholder:text-red-400 rounded-2xl' placeholder=' Password' />
                        </div>
                <button className=' bg-red-700 px-5 py-2 rounded-2xl font-[Cinzel] hover:bg-red-500 text-gray-400'>Login</button>
               </div>
               <div className=' h-8 w-full'>
                    <img src="https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" alt="" className='  h-full w-full object-cover ' />
               </div>
            </div>
            <div className=' lg:flex-[1] flex-[1]'>
            <img src="https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" alt="" className='  h-full w-full object-cover rounded' />
            </div>
        </div>
    </div>
    <Footer/>
    </div>
    <div className=' lg:flex-[0.25] flex-[0.5] '>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
   </div>
   </div>
  )
}
