import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Shops } from './pages/Shops'
import { Home } from './pages/Home'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shops' element={<Shops />} />

        </Routes>
      </Router>



      {/* </div> */}

    </>

  )
}

export default App
