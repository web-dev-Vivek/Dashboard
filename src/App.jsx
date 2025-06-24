  import './App.css'
  import img from './assets/bg2.jpg'
  import Navbar from './components/Navbar.jsx'
  import Card from './components/Card.jsx'

  function App() {
    return (
      <div
        className="w-[100vw] h-[100vh] bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Wrap Navbar + Card in a group */}

        <div className="group inline-block relative">
  <Navbar />

  <div className="absolute top-[30vh] left-[10vw] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto">
    <Card name="theartisticwing" />
  </div>
</div>

      </div>
    )
  }

  export default App
