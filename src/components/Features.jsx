import { useState } from 'react'

function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: 'far fa-handshake',
      title: 'Trusted Company',
      description: 'FinMitra is a trusted financial partner with a proven track record of helping thousands of customers secure loans, insurance, and credit cards.',
      details: 'With over 10 years of experience in the financial services industry, FinMitra has built a reputation for reliability and trustworthiness. We are registered with all major financial regulatory bodies and maintain strict compliance with industry standards. Our team of certified financial advisors works tirelessly to ensure that every customer receives personalized attention and the best possible financial solutions tailored to their unique needs.'
    },
    {
      icon: 'fa fa-rupee-sign',
      title: 'Anytime Money Back',
      description: 'Our transparent policies ensure hassle-free refunds and cancellations within specified periods. No hidden charges, complete peace of mind.',
      details: 'FinMitra offers a comprehensive money-back guarantee on all our services. If you are not satisfied with any of our financial products within the first 30 days, you are eligible for a full refund. Our transparent pricing model ensures no hidden charges or unexpected fees. All terms and conditions are clearly explained upfront, and our customer service team is always available to address any concerns about our refund policy.'
    },
    {
      icon: 'fa fa-bullseye',
      title: 'Flexible Plans',
      description: 'Choose from a wide range of loan amounts, insurance coverage, and credit card limits tailored to your specific financial needs and goals.',
      details: 'At FinMitra, we understand that every individual has unique financial requirements. That is why we offer highly customizable financial plans. Our loan amounts range from ₹10,000 to ₹50 lakhs, with flexible repayment tenures from 12 months to 7 years. Our insurance coverage can be tailored to your specific needs, and our credit cards come with various credit limits and reward programs. Our financial advisors work with you to create a personalized plan that fits your budget and helps you achieve your financial goals.'
    },
    {
      icon: 'fa fa-headphones',
      title: '24/7 Fast Support',
      description: 'Our dedicated support team is available round the clock to assist you with queries, applications, and any financial guidance you need.',
      details: 'FinMitra provides 24/7 customer support through multiple channels including phone, email, live chat, and WhatsApp. Our average response time is under 2 minutes for calls and under 5 minutes for emails. Our support team consists of trained financial professionals who can provide expert guidance on all our products and services. We also offer a comprehensive FAQ section and video tutorials to help you understand our offerings better.'
    }
  ]

  const openModal = (feature) => {
    setSelectedFeature(feature)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedFeature(null)
  }

  return (
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Features</h4>
          <h1 className="display-4 mb-4">Financial Solutions for a Better Future</h1>
          <p className="mb-0">FinMitra provides comprehensive financial services including loans, insurance, and credit cards to help you achieve your dreams and secure your family's future with confidence.</p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-xl-3 animated fadeInUp">
              <div className="feature-item glass rounded-4 p-4 pt-0 shadow-sm h-100 d-flex flex-column">
                <div className="feature-icon badge-gradient p-4 mb-4 rounded-4">
                  <i className={`${feature.icon} fa-2x`}></i>
                </div>
                <h4 className="mb-4">{feature.title}</h4>
                <p className="mb-4">{feature.description}</p>
                <a className="btn btn-primary rounded-pill py-2 px-4 shadow mt-auto" onClick={() => openModal(feature)}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Feature Detail Modal */}
      {isModalOpen && selectedFeature && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content glass rounded-4 shadow-lg">
              <div className="modal-header border-0 p-4">
                <div className="d-flex align-items-center">
                  <div className="feature-icon badge-gradient p-3 me-3 rounded-3">
                    <i className={`${selectedFeature.icon} fa-2x`}></i>
                  </div>
                  <h5 className="modal-title mb-0">{selectedFeature.title}</h5>
                </div>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body p-4">
                <p className="lead">{selectedFeature.description}</p>
                <p>{selectedFeature.details}</p>
                <div className="mt-4">
                  <h6 className="text-primary mb-3">Key Benefits:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Professional and reliable service</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Transparent pricing with no hidden fees</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Expert financial guidance and support</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Customized solutions for your needs</li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer border-0 p-4">
                <button type="button" className="btn btn-secondary rounded-pill px-4" onClick={closeModal}>Close</button>
                <button type="button" className="btn btn-primary rounded-pill px-4">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Features
