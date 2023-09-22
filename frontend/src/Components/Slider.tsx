import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
    const CarouselSlides  = {
        height : '25%'
    }
  return (
    <div className=' py-3'>
       <div className=''>
       <Carousel showThumbs={false}  showArrows={false} showStatus={false}  autoPlay infiniteLoop >
                <div className=''>
                    <img src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt='...' className='' />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt='...' />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                    alt='...' />
                </div>
            </Carousel>
       </div>
    </div>
  )
}
