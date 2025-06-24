import React from 'react';

function Card() {
  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg relative bg-white">
      <img
        className="w-full h-48 object-cover border-5 border-white rounded-t-xl"
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Property"
      />
      <div className="p-4">
        <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-xl hover:bg-black transition">
          Reserve
        </button>
      </div>
    </div>
  );
}

export default Card;
