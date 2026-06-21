import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contact } from "./components/Contact"
import Home from "./pages/Home"
import { Urgence237 } from "./pages/Urgence237"




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      {/* <Route path="/services237" element={<Home/>} /> */}
      <Route path="/services237" element={<Urgence237/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
