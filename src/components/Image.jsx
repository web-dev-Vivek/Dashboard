import React from 'react';


function Image({ image }) {
  return (
    <div className="w-full max-w-[80vw] mx-10 p-4">
      <img
        src={image}
        alt="Background"
        className="w-full h-auto rounded-[2vw]  object-cover"
      />
    </div>
  );
}

export default Image;
