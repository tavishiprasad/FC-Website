'use client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Events/>
      <Testimonials/>
      <Contact/>
    </main>
  )
}

export default App
