import React from 'react'
import Img from '../assets/bg2.jpg'

function Image() {
  return (
    <div  className="w-[80vw] h-[70vh]">
      <img className="min-w-[30vw] w-[60vw] h-[70vh] min-h-[40vh] rounded-[2vw]" src={Img} alt="" />
    </div>
  )
}

export default Image