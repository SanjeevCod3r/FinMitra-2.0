import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'
import FAQ from './pages/FAQ'
import Features from './pages/Features'
import EMICalculator from './pages/EMICalculator'
import NotFound from './pages/NotFound'
import Loader from './components/Loader'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800)
    const endTimer = setTimeout(() => setLoading(false), 2000)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(endTimer)
    }
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/features" element={<Features />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton phone="918178625027" message="Hi FinMitra, I have a query!" />
    </>
  )
}

export default App
