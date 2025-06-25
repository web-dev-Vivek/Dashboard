import React from 'react';
import Img from '../assets/bg2.jpg';

function Image() {
  return (
    <div className="w-full max-w-[80vw] mx-10 p-4">
      <img
        src={Img}
        alt="Background"
        className="w-full h-auto rounded-[2vw]  object-cover"
      />
    </div>
  );
}

export default Image;
