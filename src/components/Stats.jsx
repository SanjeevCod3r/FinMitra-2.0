import { useState, useEffect, useRef } from 'react'

function Stats() {
  const [counters, setCounters] = useState([
    { current: 0, target: 10000, label: 'Happy Clients', suffix: '+' },
    { current: 0, target: 500, label: 'Cr<br/>Disbursement', suffix: '+' },
    { current: 0, target: 50, label: 'Expert Advisors', suffix: '+' },
    { current: 0, target: 98, label: 'Success Rate', suffix: '%' }
  ])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = counters.map(counter => counter.target / steps)

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCounters(prevCounters => 
          prevCounters.map((counter, index) => ({
            ...counter,
            current: Math.round(increment[index] * currentStep)
          }))
        )
      } else {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <div className="container-fluid bg-light py-5" ref={sectionRef}>
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Achievements</h4>
          <h1 className="display-4 mb-4">Trusted by Thousands</h1>
          <p className="mb-0">Join thousands of satisfied customers who have chosen FinMitra for their financial needs. Our proven track record speaks for itself.</p>
        </div>
        <div className="row g-4">
          {counters.map((counter, index) => (
            <div key={index} className="col-6 col-lg-3 animated fadeInUp">
              <div className="stat-item text-center p-4">
                <div className="stat-number">
                  <span className="display-4 text-primary fw-bold">{counter.current}</span>
                  <span className="display-4 text-primary fw-bold">{counter.suffix}</span>
                </div>
                <h5 className="mt-3 mb-0" dangerouslySetInnerHTML={{ __html: counter.label }}></h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
