import { useState } from 'react'
import blog1 from '../assets/images/blog-1.png'
import blog2 from '../assets/images/blog-2.png'
import blog3 from '../assets/images/blog-3.png'

function Blog() {
  const [activeModal, setActiveModal] = useState(null)
  const posts = [
    {
      img: blog1,
      category: 'Life Insurance',
      date: '01 Jan, 2025',
      title: 'How to Grow Your Business While You Sleep',
      author: 'Admin'
    },
    {
      img: blog2,
      category: 'General Insurance',
      date: '15 Jan, 2025',
      title: 'Comprehensive Protection With General Insurance',
      author: 'Admin'
    },
    {
      img: blog3,
      category: 'Health Insurance',
      date: '20 Jan, 2025',
      title: 'Protect Your Health With Medical Insurance Coverage',
      author: 'Admin'
    }
  ]

  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">From Blog</h4>
          <h1 className="display-4 mb-4">News And Updates</h1>
          <p className="mb-0">Stay updated with the latest financial insights, loan tips, insurance guides, and credit card advice from FinMitra's expert team to make informed financial decisions.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {posts.map((post, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-xl-4 animated fadeInUp">
              <div className="blog-item">
                <div className="blog-img">
                  <img src={post.img} className="img-fluid rounded-top w-100" alt="" />
                  <div className="blog-categiry py-2 px-4">
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="blog-content p-4">
                  <div className="blog-comment d-flex justify-content-between mb-3">
                    <div className="small"><span className="fa fa-user text-primary"></span> {post.author}</div>
                    <div className="small"><span className="fa fa-calendar text-primary"></span> {post.date}</div>
                    <div className="small"><span className="fa fa-comment-alt text-primary"></span> 6 Comments</div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-4">{post.title}</a>
                  <p className="mb-4">
                    {post.category === 'General Insurance' 
                      ? 'Learn about comprehensive general insurance coverage including property, liability, and other non-life insurance policies to protect your assets and business.'
                      : post.category === 'Health Insurance'
                      ? 'Discover the importance of health insurance coverage for medical emergencies, hospitalization costs, and ensuring your family\'s well-being with comprehensive health plans.'
                      : 'Discover practical tips and strategies to grow your business with smart financial planning and the right loan options from FinMitra.'
                    }
                  </p>
                  <button 
                    className="btn btn-light rounded-pill py-2 px-4"
                    onClick={() => setActiveModal(post.category)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Life Insurance Modal */}
      {activeModal === 'Life Insurance' && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title text-primary fw-bold">Secure Your Family's Future with Life Insurance</h5>
                <button type="button" className="btn-close" onClick={() => setActiveModal(null)}></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-4">
                  <h4 className="fw-bold text-dark">Finmitra Finance and Insurance</h4>
                </div>
                
                <p className="lead mb-4">
                  Ensure your family's financial security with comprehensive life insurance plans from Finmitra Finance and Insurance. Protect your loved ones' future with guaranteed coverage and smart investment options.
                </p>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <h6 className="text-primary fw-bold mb-3">Key Features:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Guaranteed death benefit</li>
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Flexible premium payment options</li>
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Tax-free maturity benefits</li>
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Tax benefits under Section 80C</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-primary fw-bold mb-3">Plan Options:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Term Life Insurance</li>
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Whole Life Coverage</li>
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Endowment Plans</li>
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>ULIPs (Investment + Insurance)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="alert alert-info text-center mb-4">
                  <h5 className="alert-heading fw-bold">
                    <i className="fa fa-heart me-2"></i>Protect What Matters Most - Your Family's Future
                  </h5>
                </div>
                
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="fa fa-home fa-2x text-primary mb-2"></i>
                      <h6 className="fw-bold">Home Loan Protection</h6>
                      <small className="text-muted">Cover your outstanding loans</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="fa fa-graduation-cap fa-2x text-primary mb-2"></i>
                      <h6 className="fw-bold">Child Education</h6>
                      <small className="text-muted">Secure their educational future</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="fa fa-piggy-bank fa-2x text-primary mb-2"></i>
                      <h6 className="fw-bold">Wealth Creation</h6>
                      <small className="text-muted">Build long-term wealth</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary rounded-pill" onClick={() => setActiveModal(null)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary rounded-pill">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* General Insurance Modal */}
      {activeModal === 'General Insurance' && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title text-primary fw-bold">Comprehensive Protection with General Insurance</h5>
                <button type="button" className="btn-close" onClick={() => setActiveModal(null)}></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-4">
                  <h4 className="fw-bold text-dark">Finmitra Finance and Insurance</h4>
                </div>
                
                <p className="lead mb-4">
                  Safeguard your assets and business with comprehensive general insurance solutions from Finmitra Finance and Insurance. Get complete protection against unexpected events and financial losses.
                </p>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <h6 className="text-primary fw-bold mb-3">Coverage Types:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Property & Asset Insurance</li>
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Vehicle Insurance</li>
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Business Liability Coverage</li>
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Travel & Marine Insurance</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-primary fw-bold mb-3">Key Benefits:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Risk transfer solutions</li>
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Business continuity protection</li>
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Legal liability coverage</li>
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Asset value preservation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="alert alert-warning text-center mb-4">
                  <h5 className="alert-heading fw-bold">
                    <i className="fa fa-exclamation-triangle me-2"></i>Don't Risk Your Assets - Get Comprehensive Coverage Today
                  </h5>
                </div>
                
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="fa fa-building fa-2x text-primary mb-2"></i>
                      <h6 className="fw-bold">Property Insurance</h6>
                      <small className="text-muted">Protect your buildings & contents</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="fa fa-car fa-2x text-primary mb-2"></i>
                      <h6 className="fw-bold">Motor Insurance</h6>
                      <small className="text-muted">Comprehensive vehicle coverage</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="fa fa-briefcase fa-2x text-primary mb-2"></i>
                      <h6 className="fw-bold">Business Insurance</h6>
                      <small className="text-muted">Protect your enterprise</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary rounded-pill" onClick={() => setActiveModal(null)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary rounded-pill">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Health Insurance Modal */}
      {activeModal === 'Health Insurance' && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title text-primary fw-bold">Health Insurance That Secures Your Health</h5>
                <button type="button" className="btn-close" onClick={() => setActiveModal(null)}></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-4">
                  <h4 className="fw-bold text-dark">Finmitra Finance and Insurance</h4>
                </div>
                
                <p className="lead mb-4">
                  Protect yourself and your loved ones with trusted health insurance plans from Finmitra Finance and Insurance. We offer affordable coverage, cashless hospitalization, and expert support—so you can focus on recovery, not expenses.
                </p>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <h6 className="text-primary fw-bold mb-3">Key Features:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Comprehensive medical coverage</li>
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Cashless treatment at network hospitals</li>
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Family, individual & senior citizen plans</li>
                      <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i>Tax benefits under Section 80D</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-primary fw-bold mb-3">Coverage Benefits:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Hospitalization expenses</li>
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Pre and post hospitalization care</li>
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Day care procedures</li>
                      <li className="mb-2"><i className="fa fa-shield text-primary me-2"></i>Ambulance services</li>
                    </ul>
                  </div>
                </div>
                
                <div className="alert alert-success text-center mb-4">
                  <h5 className="alert-heading fw-bold">
                    <i className="fa fa-gift me-2"></i>Exclusive Cashback Offer Available on Health Insurance Plan
                  </h5>
                </div>
                
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="fa fa-users fa-2x text-primary mb-2"></i>
                      <h6 className="fw-bold">Family Protection</h6>
                      <small className="text-muted">Complete family coverage</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="fa fa-hospital fa-2x text-primary mb-2"></i>
                      <h6 className="fw-bold">Network Hospitals</h6>
                      <small className="text-muted">5000+ hospitals nationwide</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="fa fa-headset fa-2x text-primary mb-2"></i>
                      <h6 className="fw-bold">24/7 Support</h6>
                      <small className="text-muted">Round-the-clock assistance</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary rounded-pill" onClick={() => setActiveModal(null)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary rounded-pill">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog
