import React from 'react';

function Card({ name, link, image, onHover }) {
  return (
    <div
      onMouseEnter={() => onHover(image)}
      className="min-w-70 rounded-xl overflow-hidden shadow-xl relative bg-white/10 backdrop-blur-md border border-white/10 text-white cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline text-sm">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Card;
