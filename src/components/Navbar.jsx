import React from 'react'


function Navbar() {
  return (
    <>
    <div className='flex min-w-13 w-56 rounded-r-xl flex-col shadow-xl bg-white/20 backdrop-blur-md border border-white/20 text-white flex-start h-screen gap-10 text-white p-4'>
      <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
<path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
</svg>HOME</div>
      <div className="flex items-center"><img width="240" height="48" className="font-white" src="https://img.icons8.com/fluency-systems-regular/48/contact-card.png" alt="contact-card"/>CONTACT</div>
      <div className="flex items-center"><img width="2401" height="50" className="font-white" src="https://img.icons8.com/ios/50/project.png" alt="project"/>PROJECTS</div>
      <div className="flex items-center"><img width="2401" height="50" className="font-white" src="https://img.icons8.com/ios/50/under-computer.png" alt="under-computer"/>WORKING ON....</div>
    </div>1
    </>
  )
}

export default Navbar