import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { CardGroup } from './components/CardsShoes/CardGroup'
import { Header } from './components/Header'
import { Carousel } from './components/Carousel/Carousel'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Canvas camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3]
      }}>
        <Experience />
      </Canvas>
      <Header title={"Trending"} />
      <CardGroup />

      <Header title={"Some Product"} />
      <Carousel />

      {/* </div> */}

    </>

  )
}

export default App
