

import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import ShowProducts from "./components/ShowProducts"

import { BrowserRouter , Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>  
      <Navbar /> 
      <Routes> 
      <Route path="/" element={<Products/>} />
      <Route path="/product/:id" element={<ShowProducts/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      
      </Routes>
      <h1>PinguCoder www </h1>    

      </BrowserRouter>    
    </>
  )
}

export default App
