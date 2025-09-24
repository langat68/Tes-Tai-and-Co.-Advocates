import Navbar from './components/Navabar'
import Hero from './components/Hero'
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"
import Footer from './components/Footer'
import About from "./components/About"
import PracticeAreas from './components/PracticeAreas'


import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Testimonials />
      <CallToAction />
      <Footer />

    </>
  )
}

export default App
