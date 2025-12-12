import { useState, useEffect, useRef } from 'react'

function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState([])
  const [selectedReason, setSelectedReason] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef(null)

  const reasons = [
    {
      icon: 'fa fa-shield-alt',
      title: '100% Secure',
      description: 'Your data and financial information are protected with advanced encryption and security measures.',
      details: 'At FinMitra, we prioritize your security above everything else. Our state-of-the-art encryption technology ensures that all your personal and financial data is protected with bank-level security. We comply with all data protection regulations and regularly undergo security audits to maintain the highest standards of safety. Your information is stored in secure servers with multi-layer authentication, and we never share your data with third parties without your explicit consent.',
      bgClass: 'bg-primary'
    },
    {
      icon: 'fa fa-clock',
      title: 'Quick Approval',
      description: 'Get loan approvals within 24-48 hours with our streamlined application process.',
      details: 'Our automated approval system processes your applications in record time. Most loan applications are approved within 24-48 hours, and in some cases, you can get instant approval for smaller amounts. We have eliminated unnecessary paperwork and bureaucracy, allowing you to focus on what matters most - achieving your financial goals. Our dedicated team works around the clock to ensure quick processing without compromising on quality.',
      bgClass: 'bg-primary'
    },
    {
      icon: 'fa fa-percentage',
      title: 'Best Rates',
      description: 'Competitive interest rates and flexible terms tailored to your financial needs.',
      details: 'We offer some of the most competitive interest rates in the market, thanks to our strong partnerships with leading financial institutions. Our rates are transparent with no hidden charges or processing fees. We regularly compare our rates with market standards to ensure you get the best deal possible. Plus, our flexible repayment options allow you to choose terms that fit your budget perfectly.',
      bgClass: 'bg-primary'
    },
    {
      icon: 'fa fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you with any queries or concerns.',
      details: 'Our dedicated support team is available 24/7 through multiple channels including phone, email, live chat, and WhatsApp. Whether you have a question about your application, need help with documentation, or require financial guidance, our experts are always here to help. We maintain an average response time of under 2 minutes for calls and under 5 minutes for emails, ensuring you never have to wait long for assistance.',
      bgClass: 'bg-primary'
    },
    {
      icon: 'fa fa-file-contract',
      title: 'Simple Process',
      description: 'Easy online application with minimal documentation and hassle-free procedures.',
      details: 'Our application process has been designed to be as simple and user-friendly as possible. With just a few clicks, you can apply for loans, insurance, or credit cards from the comfort of your home. We require minimal documentation - just basic identity proof, address proof, and income documents. Our online portal guides you through each step, and our representatives are always available to help if you need any assistance.',
      bgClass: 'bg-primary'
    },
    {
      icon: 'fa fa-award',
      title: 'Expert Guidance',
      description: 'Professional financial advisors to help you make informed decisions.',
      details: 'Our team of certified financial advisors has years of experience in the financial services industry. They provide personalized guidance based on your unique financial situation and goals. Whether you need help choosing the right loan product, understanding insurance coverage, or managing your credit card effectively, our experts are here to help. We offer free financial consultation to all our customers, ensuring you make informed decisions that benefit your financial future.',
      bgClass: 'bg-primary'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index])
            }, index * 150)
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll('.why-choose-item')
    items.forEach(item => observer.observe(item))

    return () => {
      items.forEach(item => observer.unobserve(item))
    }
  }, [])

  const openModal = (reason) => {
    setSelectedReason(reason)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedReason(null)
  }

  return (
    <div className="container-fluid feature bg-light py-5" ref={sectionRef}>
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Why Choose Us</h4>
          <h1 className="display-4 mb-4">Your Trusted Financial Partner</h1>
          <p className="mb-0">FinMitra stands out as the preferred choice for financial services with our commitment to excellence, transparency, and customer satisfaction.</p>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="why-choose-item animated fadeInUp bg-white rounded-4 p-4 shadow-sm h-100 d-flex flex-column position-relative overflow-hidden"
                data-index={index}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: visibleItems.includes(index) ? 1 : 0,
                  transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget
                  const icon = card.querySelector('.why-choose-icon > div')
                  const border = card.querySelector('.position-absolute.top-0')
                  const button = card.querySelector('button')
                  
                  card.style.transform = 'translateY(-15px) scale(1.03) rotateX(2deg)'
                  card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)'
                  card.style.background = 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
                  
                  if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)'
                    icon.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)'
                  }
                  
                  if (border) {
                    border.style.height = '6px'
                    border.style.transition = 'height 0.3s ease'
                  }
                  
                  if (button) {
                    button.style.transform = 'translateX(10px) scale(1.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget
                  const icon = card.querySelector('.why-choose-icon > div')
                  const border = card.querySelector('.position-absolute.top-0')
                  const button = card.querySelector('button')
                  
                  card.style.transform = 'translateY(0) scale(1) rotateX(0deg)'
                  card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'
                  card.style.background = '#ffffff'
                  
                  if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)'
                    icon.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)'
                  }
                  
                  if (border) {
                    border.style.height = '12px'
                  }
                  
                  if (button) {
                    button.style.transform = 'translateX(0) scale(1)'
                  }
                }}
              >
                {/* Top Border Accent */}
                <div className={`position-absolute top-0 start-0 w-100 h-3 ${reason.bgClass} transition-all duration-300`}></div>
                
                {/* Icon Container */}
                <div className="why-choose-icon position-relative mb-4 mt-2">
                  <div className={`${reason.bgClass} text-white rounded-circle p-4 d-inline-flex shadow-lg transition-all duration-300`}>
                    <i className={`${reason.icon} fa-2x`}></i>
                  </div>
                </div>

                {/* Content */}
                <h4 className="fw-bold mb-3">{reason.title}</h4>
                <p className="text-muted flex-grow-1 mb-4">{reason.description}</p>
                
                {/* Learn More Button */}
                <div className="mt-auto">
                  <button 
                    className={`${reason.bgClass} text-white btn rounded-pill py-2 px-4 shadow-sm transition-all duration-300`}
                    onClick={() => openModal(reason)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(10px) scale(1.05)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0) scale(1)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                  >
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedReason && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4">
              <div className={`modal-header ${selectedReason.bgClass} text-white rounded-top-4`}>
                <h5 className="modal-title d-flex align-items-center">
                  <div className="bg-white bg-opacity-25 rounded-circle p-3 me-3">
                    <i className={`${selectedReason.icon} fa-2x`}></i>
                  </div>
                  {selectedReason.title}
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body p-4">
                <p className="lead">{selectedReason.description}</p>
                <hr />
                <p>{selectedReason.details}</p>
                <div className="mt-4">
                  <div className="d-flex flex-column flex-sm-row gap-3">
                    <button 
                      className={`${selectedReason.bgClass} text-white btn rounded-pill py-3 px-5 flex-grow-1 flex-sm-grow-0`}
                      onClick={closeModal}
                    >
                      <i className="fa fa-phone-alt me-2"></i> Contact Us
                    </button>
                    <button 
                      className="btn btn-outline-secondary rounded-pill py-3 px-5 flex-grow-1 flex-sm-grow-0"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WhyChooseUs
