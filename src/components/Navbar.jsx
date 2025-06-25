import React from 'react'


function Navbar() {
  return (
    <>
    <div className='flex w-[20vw] rounded-r-xl text-md flex-col  shadow-xl bg-white/20 backdrop-blur-md border border-white/20 flex-start h-screen gap-5 text-white/70 font-bold p-4'>
      <div className="text-xl flex justify-center pb-3 font-extrabold border-b-2 w- border-white">Web_dev_vivek</div>
      <div className="flex justify-center flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="" width="24" height="24" viewBox="0 0 24 24">
        <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
        </svg>HOME</div>
      <div className="flex items-center gap-3 flex justify-center"><img width="21"  className="font-white" src="https://img.icons8.com/fluency-systems-regular/48/contact-card.png" alt="contact-card"/>CONTACT</div>
      <div className="flex items-center gap-3 flex justify-center"><img width="21"  className="font-white" src="https://img.icons8.com/ios/50/project.png" alt="project"/>PROJECTS</div>
      <div className="flex items-center gap-3 flex justify-center"><img width="21"  className="font-white" src="https://img.icons8.com/ios/50/under-computer.png" alt="under-computer"/>WORKING ON....</div>
    </div>
    </>
  )
}

export default Navbar