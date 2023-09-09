import React from 'react'
import Footer from '../Components/Footer'
export default function Contact() {
  return (
    <div className=' min-h-screen  flex overflow-x-hidden'>
    <div className='  lg:flex-[0.25] flex-[1] '>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
    <div className=' lg:px-10 px-6 lg:py-8 py-5 flex-[10]'>
        <a href='/'><h1 className=' lg:text-5xl text-3xl pl-5 font-[Raleway] tracking-[1.0rem] text-gray-800 text-center lg:mb-8 mb-5'>SAMPARK</h1></a>
            <div className=''>
                <h1 className=' font-[Cinzel] text-red-500 lg:text-3xl text-xl text-center mb-5'>
                     संसारे च सुज्ञानं, बुद्धेः सहायतां विना।
                    आत्मन्येव विशेषेण, प्राप्नुयात् विजयं सदा॥
                </h1>
               <div className=' flex justify-center items-center '>
                    <div className=' bg-blue-200 min-h-[400px] w-full px-8 lg:py-5 py-0'>
                    <h1 className=' font-[Cinzel] text-lg lg:text-left text-center my-2 text-red-600'>Enquire us for marriage/ceremony related queries...</h1>
                    <h1 className=' font-[Quicksand] lg:text-5xl text-3xl lg:text-left text-center text-gray-950 my-7 lg:my-16 '>Schedule an appoinment!</h1>
                    <div className=' my-6 font-[Cinzel] text-gray-900 text-xl '>
                        Hey my name is  &nbsp;<span><input type="text" className=' outline-none border-b-2 border-gray-800 w-52 h-8 bg-transparent' placeholder=' name'/></span> and I am a little confused/ having a complaint/ providing a suggestion about &nbsp; <span><input type="text" className=' outline-none border-b-2 border-gray-800 w-52 h-8 bg-transparent' placeholder=' state here'/></span>. Here is my number &nbsp; <span><input type="text" className=' outline-none border-b-2 border-gray-800 w-52 h-8 bg-transparent' placeholder='Phone'/></span> .
                     </div>
                        <button  className='my-4 px-2 lg:w-1/4 py-2 lg:block hidden lg:mt-16 bg-cyan-400 text-black hover:bg-cyan-600 hover:text-white rounded font-[Cinzel]'>SEND ENQUIRY</button>
                        <div className=' lg:hidden flex justify-center items-center'>
                        <button  className='my-4 px-2 lg:w-1/4 py-2  lg:mt-16 bg-cyan-400 text-black hover:bg-cyan-600 hover:text-white rounded font-[Cinzel]'>SEND ENQUIRY</button>
                        </div>
                </div>
               </div>
            </div>
        <Footer/>
    </div>
    <div className=' lg:flex-[0.25] flex-[1]'>
    <img src="https://images.unsplash.com/photo-1551893478-d726eaf0442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className=' h-full w-full object-cover rounded '/>
    </div>
   </div>
  )
}
