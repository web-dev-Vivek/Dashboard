import React from 'react';
import arrow from '../assets/arrow.png';
import vite from '../assets/Vite.png';

function Card(project , link , image) {
  return (
    <div className="min-w-70 rounded-xl overflow-hidden shadow-xl relative bg-white/30 backdrop-blur-md border border-white/10 text-white">
      <div className="w-full h-48 border-5 rounded-t-xl overflow-hidden bg-black/20 backdrop-blur-md border border-white/5">
        <img
          className="w-full h-48 object-contain hover:scale-110 transition-transform duration-100"
          src={project.image}
          alt="Property"
        />
      </div>
      <div className=" pr-4 pl-4">
        <div className="flex text-black text-xl font-bold justify-center items-center">
          {project.name}
        </div>

        <div className="w-full h-10 flex justify-center gap-5 items-center ">
          <p className="text-black font-semibold">View On Github</p>
          <img className="w-5" src={arrow} alt="arrow" />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="hover:scale-110 transition-transform duration-100"
              height="32"
              aria-hidden="true"
              viewBox="0 0 24 24"
              version="1.1"
              width="32"
              data-view-component="true"
            >
              <path
                fill="black"
                d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"
              ></path>
            </svg>
          </a>
        </div>


      </div>
    </div>
  );
}

export default Card;
