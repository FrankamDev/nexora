import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Contact  from "./pages/Contact"
import  About  from "./pages/About"
import Home from "./pages/Home"
import { Urgence237 } from "./pages/Urgence237"
import FloatingChat from "./components/FloatingChat"
import  NosServices from "./pages/NosServices"




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<NosServices/>} />
      <Route path="/services237" element={<Urgence237/>} />
    </Routes>
    </BrowserRouter>
    <FloatingChat/>
    </>
  )
}

export default App
