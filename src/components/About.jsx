import { useState, useEffect, useRef } from 'react'
import aboutImg from '../assets/images/about-1.png'

function About() {
  const [counters, setCounters] = useState([
    { target: 129, current: 0, label: 'Insurance Policies' },
    { target: 99, current: 0, label: 'Awards WON' },
    { target: 556, current: 0, label: 'Skilled Agents' },
    { target: 967, current: 0, label: 'Team Members' }
  ])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    counters.forEach((counter, index) => {
      let start = 0
      const end = counter.target
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          start = end
          clearInterval(timer)
        }
        setCounters(prev => {
          const newCounters = [...prev]
          newCounters[index] = { ...newCounters[index], current: Math.floor(start) }
          return newCounters
        })
      }, 16)
    })
  }

  return (
    <div className="container-fluid bg-light about pb-5" ref={sectionRef}>
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-xl-6 animated fadeInLeft">
            <div className="about-item-content contact-card glass rounded-4 p-5 h-100 shadow">
              <div className="d-flex align-items-center mb-2">
                <h4 className="text-primary mb-0">About Our Company</h4>
                <div className="ms-3 flex-grow-1 gradient-bar"></div>
              </div>
              <h1 className="display-6 mb-4">High Range of Exploring Protection</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt debitis sint tempora. Corporis consequatur illo blanditiis voluptates aperiam quos aliquam totam aliquid rem explicabo,</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium recusandae eligendi modi hic</p>
              <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>We can save your money.</p>
              <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>Production or trading of good</p>
              <p className="text-dark mb-4"><i className="fa fa-check text-primary me-3"></i>Our life insurance is flexible</p>
              <a className="btn btn-primary rounded-pill py-3 px-5 shadow" href="#">More Information</a>
            </div>
          </div>
          <div className="col-xl-6 animated fadeInRight">
            <div className="about-media glass rounded-4 p-5 h-100 shadow">
              <div className="row g-4 justify-content-center">
                <div className="col-12">
                  <div className="about-image rounded-4 overflow-hidden">
                    <img src={aboutImg} className="img-fluid w-100" alt="" />
                  </div>
                </div>
                {counters.map((counter, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="counter-item about-counter rounded-4 p-3 h-100">
                      <div className="counter-counting">
                        <span className="text-primary fs-2 fw-bold">{counter.current}</span>
                        <span className="h1 fw-bold text-primary">+</span>
                      </div>
                      <h4 className="mb-0 text-dark">{counter.label}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
