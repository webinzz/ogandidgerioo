import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../page/Product/index'
import Contact from '../page/Contact'
import ProductDetail from '../page/ProductDetail'
import Home from '../page/Home'
import Navbar from '../components/Layout/Navbar'
import About from '../page/About'
import ScrollToTop from './ScrollTop'



function Routing() {
  return (
    <BrowserRouter>
      <Navbar/>
      <ScrollToTop/>

      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='about' element={<About />}> </Route>
        <Route path='product' element={<Product />}> </Route>
        <Route path='contact' element={<Contact />}> </Route>
        <Route path='product/:id' element={<ProductDetail />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
