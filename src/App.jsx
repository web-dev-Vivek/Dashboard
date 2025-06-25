  import './App.css'
   import img1 from './assets/bgblur.jpg'
  import Navbar from './components/Navbar.jsx'
  import Card from './components/Card.jsx'
  import Image from './components/Image.jsx'
  import card from './assets/netflix.png'
  import card1 from './assets/sundown.png'
  import card2 from './assets/todoist.png'

  function App() {
    return (
      <div
        className="w-[100vw] h-[100vh] bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${img1})` }}
      >

        {/* Wrap Navbar + Card in a group */}
        <div className="flex justify-center items-center h-full absolute left-[30vw] bottom-20">
              <Image />
        </div>
        <div className="group inline-block relative">
            <Navbar />




  <div className="absolute top-[30vh] left-[10vw] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto">
    <Card name="theartisticwing" link="https://github.com/web-dev-Vivek/theartisticwing#" image={card}  />
  </div>

  <div className="absolute top-[30vh] left-[10vw] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto">
    <Card name="theartisticwing" link="https://github.com/web-dev-Vivek/theartisticwing#" />
  </div>

  <div className="absolute top-[30vh] left-[10vw] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto">
    <Card name="theartisticwing" link="https://github.com/web-dev-Vivek/theartisticwing#" />
  </div>
</div>

      </div>
    )
  }

  export default App
