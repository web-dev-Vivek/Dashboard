import React, { forwardRef } from 'react'

const Image = forwardRef(({ image }, ref) => {
  return (
    <div className="w-full max-w-[80vw] mx-10 p-4">
      <img ref={ref} src={image} alt="preview" className="w-full h-auto rounded-[2vw]  object-contain" />
    </div>
  )
});

export default Image;
