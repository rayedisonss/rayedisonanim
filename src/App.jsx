import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AllProducts } from './pages/AllProducts'
import { NotFound } from './pages/NotFound'
import { Product } from './pages/Product'
import { ProductViewer } from './pages/ProductViewer'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Cart } from './pages/Cart'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productviewer' element={<ProductViewer />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router>



      {/* </div> */}

    </>

  )
}

export default App
