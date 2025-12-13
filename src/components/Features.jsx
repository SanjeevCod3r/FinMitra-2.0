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
      title: 'Cashback',
      description: 'Get exciting cashback offers on loans, insurance, and credit cards. Save money while accessing the best financial solutions for your needs.',
      details: 'FinMitra offers attractive cashback rewards on various financial products. Earn cashback on loan disbursals, insurance policy purchases, and credit card activations. Our cashback program is designed to help you save money while accessing premium financial services. The more you use our services, the more rewards you earn. All cashback amounts are credited directly to your account within 7 business days.'
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
                
                {selectedFeature.title === 'Cashback' && (
                  <div className="mt-4">
                    <h6 className="text-primary mb-4">🎉 Cashback Offers Available</h6>
                    
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-3 h-100">
                          <div className="card-body p-3">
                            <h6 className="text-primary mb-2">🏥 Health Insurance</h6>
                            <p className="mb-2"><strong>💰 Cashback on Policy Purchase</strong></p>
                            <p className="small text-muted mb-0">Secure your health & earn cashback with every health insurance policy purchase</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-3 h-100">
                          <div className="card-body p-3">
                            <h6 className="text-primary mb-2">💳 Personal Loan</h6>
                            <p className="mb-2"><strong>💰 Cashback on Loan Disbursal</strong></p>
                            <p className="small text-muted mb-0">Instant funds with added rewards on personal loan approvals</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-3 h-100">
                          <div className="card-body p-3">
                            <h6 className="text-primary mb-2">🚗 Car Loan</h6>
                            <p className="mb-2"><strong>💰 Cashback on Car Loan Approval</strong></p>
                            <p className="small text-muted mb-0">Drive your dream car & save more with exclusive cashback offers</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-3 h-100">
                          <div className="card-body p-3">
                            <h6 className="text-primary mb-2">🏢 Business Loan</h6>
                            <p className="mb-2"><strong>💰 Cashback on Business Loan Disbursal</strong></p>
                            <p className="small text-muted mb-0">Grow your business with extra benefits and cashback rewards</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-3 h-100">
                          <div className="card-body p-3">
                            <h6 className="text-primary mb-2">🚗 Car Insurance</h6>
                            <p className="mb-2"><strong>💰 Cashback on Policy Issuance</strong></p>
                            <p className="small text-muted mb-0">Protect your vehicle & get rewarded with instant cashback</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-3 h-100">
                          <div className="card-body p-3">
                            <h6 className="text-primary mb-2">💰 Life Insurance</h6>
                            <p className="mb-2"><strong>💰 Cashback on Policy Activation</strong></p>
                            <p className="small text-muted mb-0">Secure your family's future with cashback on life insurance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="alert alert-success mt-4 rounded-3" role="alert">
                      <h6 className="alert-heading mb-2">💡 How to Claim Cashback:</h6>
                      <ol className="mb-0 small">
                        <li>Apply for any financial product through FinMitra</li>
                        <li>Complete the required documentation and verification</li>
                        <li>Get your loan/insurance/credit card approved</li>
                        <li>Cashback automatically credited within 7 business days</li>
                      </ol>
                    </div>
                  </div>
                )}
                
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
