function CallToAction() {
  return (
    <div className="container-fluid bg-primary py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-8">
            <div className="text-white">
              <h4 className="text-white mb-3">Need Financial Assistance?</h4>
              <h1 className="display-4 mb-4">Get Expert Guidance Today</h1>
              <p className="mb-4">Our team of financial experts is ready to help you find the perfect loan, insurance, or credit card solution. Get personalized advice and competitive rates tailored to your needs.</p>
              <div className="d-flex flex-wrap gap-3">
                <a href="tel:+918178625027" className="btn btn-light rounded-pill py-3 px-5">
                  <i className="fa fa-phone-alt me-2"></i> Call Now
                </a>
                <a href="/contact" className="btn btn-outline-light rounded-pill py-3 px-5">
                  <i className="fa fa-envelope me-2"></i> Send Message
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <div className="bg-white rounded-4 p-4 shadow-lg position-relative overflow-hidden">
                {/* Highlight Badge */}
                <div className="position-absolute top-0 end-0 bg-warning text-dark rounded-start-pill px-3 py-1">
                  <small className="fw-bold">Quick Contact</small>
                </div>
                
                <h4 className="text-primary mb-3 mt-2">Quick Contact</h4>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-phone-alt text-primary me-3"></i>
                  <span>+91 81786 25027</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-envelope text-primary me-3"></i>
                  <span className="small">info@finmitrafinanceinsurance.com</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-clock text-primary me-3"></i>
                  <span className="small">Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
