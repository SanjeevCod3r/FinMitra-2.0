import HeroCarousel from '../components/HeroCarousel'
import Features from '../components/Features'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Stats from '../components/Stats'
import Services from '../components/Services'
import CallToAction from '../components/CallToAction'
import FAQ from '../components/FAQ'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'

function Home() {
  return (
    <>
      <HeroCarousel />
      <Features />
      <About />
      <WhyChooseUs />
      <Stats />
      <Services />
      <CallToAction />
      <FAQ />
      <Testimonial />
      <Blog />
    </>
  )
}

export default Home
