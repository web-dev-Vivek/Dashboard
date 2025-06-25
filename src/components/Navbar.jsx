import React from 'react'
import Img from '../assets/home.svg'
import Img1 from '../assets/contact.svg'
import Img2 from '../assets/project.svg'
import Img3 from '../assets/working.svg'

function Navbar() {
  return (
    <>
    <div className='flex w-[20vw] rounded-r-xl text-md flex-col  shadow-xl bg-white/20 backdrop-blur-md border border-white/20 flex-start h-screen gap-5 text-white/70 font-bold p-4'>
      <div className="text-xl flex  justify-center pb-3 font-extrabold border-b-2 w- border-white">Web_dev_vivek</div>
      <div className="flex justify-start pl-10 flex items-center gap-3"><img width="21"  className="font-white" src={Img} alt="contact-card"/>HOME</div>
      <div className="flex items-center justify-start pl-10 gap-3 flex justify-center"><img width="21"  className="font-white" src={Img1} alt="contact-card"/>CONTACT</div>
      <div className="flex items-center justify-start pl-10 gap-3 flex justify-center"><img width="21"  className="font-white" src={Img2} alt="contact-card"/>PROJECTS</div>
      <div className="flex items-center justify-start pl-10 gap-3 flex justify-center"><img width="21"  className="font-white" src={Img3} alt="contact-card"/>WORKING ON....</div>
    </div>
    </>
  )
}

export default Navbar