import { useRef } from 'react';
import './App.css';
import img1 from './assets/bgblur.jpg';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import Image from './components/Image.jsx';
import card from './assets/netflix.png';
import card1 from './assets/sundown.png';
import card2 from './assets/todoist.png';
import card3 from './assets/theartisticwing.png';
import defaultImg from './assets/bg2.jpg';  // ⬅️ default image

function App() {
  const imageRef = useRef(null);

  const handleHover = (imgSrc) => {
    if (imageRef.current) {
      imageRef.current.src = imgSrc;
    }
  };

  const handleLeave = () => {
    if (imageRef.current) {
      imageRef.current.src = defaultImg;
    }
  };

  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="flex justify-center items-center h-full absolute left-[30vw] bottom-20">
        <Image ref={imageRef} image={defaultImg} />
      </div>

      <div className="group inline-block relative">
        <Navbar />

        {/* Each card gets both onHover and onLeave */}
        <div
          className="absolute top-[29vh] left-[10vw] opacity-0 scale-95 group-hover:opacity-100 hover:z-[9] group-hover:scale-100 transition-all duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto"
          onMouseEnter={() => handleHover(card3)}
          onMouseLeave={handleLeave}
        >
          <Card name="theartisticwing" link="https://github.com/web-dev-Vivek/theartisticwing#" image={card3} />
        </div>

        <div
          className="absolute top-[39vh] left-[10vw] opacity-0 scale-95 group-hover:opacity-100 hover:z-[9] group-hover:scale-100 transition-all duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto"
          onMouseEnter={() => handleHover(card2)}
          onMouseLeave={handleLeave}
        >
          <Card name="Todoist" link="https://github.com/web-dev-Vivek/Today-Todoist" image={card2} />
        </div>

        <div
          className="absolute top-[49vh] left-[10vw] opacity-0 scale-95 group-hover:opacity-100 hover:z-[9] group-hover:scale-100 transition-all duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto"
          onMouseEnter={() => handleHover(card)}
          onMouseLeave={handleLeave}
        >
          <Card name="Netflix-Clone" link="https://github.com/web-dev-Vivek/Netflix_clone" image={card} />
        </div>

        <div
          className="absolute top-[59vh] left-[10vw] opacity-0 scale-95 group-hover:opacity-100 hover:z-[9] group-hover:scale-100 transition-all duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto"
          onMouseEnter={() => handleHover(card1)}
          onMouseLeave={handleLeave}
        >
          <Card name="Sundown" link="https://github.com/web-dev-Vivek/Sundown" image={card1} />
        </div>
      </div>
    </div>
  );
}

export default App;
