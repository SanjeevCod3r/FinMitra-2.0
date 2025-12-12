function WhyChooseUs() {
  const reasons = [
    {
      icon: 'fa fa-shield-alt',
      title: '100% Secure',
      description: 'Your data and financial information are protected with advanced encryption and security measures.'
    },
    {
      icon: 'fa fa-clock',
      title: 'Quick Approval',
      description: 'Get loan approvals within 24-48 hours with our streamlined application process.'
    },
    {
      icon: 'fa fa-percentage',
      title: 'Best Rates',
      description: 'Competitive interest rates and flexible terms tailored to your financial needs.'
    },
    {
      icon: 'fa fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you with any queries or concerns.'
    },
    {
      icon: 'fa fa-file-contract',
      title: 'Simple Process',
      description: 'Easy online application with minimal documentation and hassle-free procedures.'
    },
    {
      icon: 'fa fa-award',
      title: 'Expert Guidance',
      description: 'Professional financial advisors to help you make informed decisions.'
    }
  ]

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Why Choose Us</h4>
          <h1 className="display-4 mb-4">Your Trusted Financial Partner</h1>
          <p className="mb-0">FinMitra stands out as the preferred choice for financial services with our commitment to excellence, transparency, and customer satisfaction.</p>
        </div>
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div key={index} className="col-md-6 col-lg-4 animated fadeInUp">
              <div className="why-choose-item bg-white rounded-4 p-4 shadow-sm h-100 d-flex flex-column">
                <div className="why-choose-icon bg-primary bg-gradient text-white rounded-3 p-3 mb-3 d-inline-flex">
                  <i className={`${reason.icon} fa-2x`}></i>
                </div>
                <h4 className="mb-3">{reason.title}</h4>
                <p className="mb-0 flex-grow-1">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
