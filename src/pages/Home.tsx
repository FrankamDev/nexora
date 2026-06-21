import { Faq } from "../components/Faq"
import { Features } from "../components/Features"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Services } from "../components/Services"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services />
      <Features/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home
