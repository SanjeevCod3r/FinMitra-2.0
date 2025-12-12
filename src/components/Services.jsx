import { useState } from 'react'
import blog1 from '../assets/images/blog-1.png'
import blog2 from '../assets/images/blog-2.png'
import blog3 from '../assets/images/blog-3.png'
import blog4 from '../assets/images/blog-4.png'
import personalLoanImg from '../assets/images/personal_loan.png'
import businessLoanImg from '../assets/images/business_loan.png'
import usedCarLoanImg from '../assets/images/used_car_loan.png'
import homeLoanImg from '../assets/images/home_loan.png'
import carLoanImg from '../assets/images/car_loan.png'
import hdfcCardImg from '../assets/images/hdfc_card-removebg-preview.png'
import sbiCardImg from '../assets/images/sbi_card-removebg-preview.png'
import indusindCardImg from '../assets/images/induslnd_card-removebg-preview.png'
import idfcCardImg from '../assets/images/idfc_card-removebg-preview.png'
import bobCardImg from '../assets/images/bob_card-removebg-preview.png'

function Services() {
  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [activeCategory, setActiveCategory] = useState('Loans')
  const [query, setQuery] = useState('')

  const categories = [
    {
      name: 'Loans',
      items: [
        { title: 'Personal Loan', icon: 'fa fa-user', img: personalLoanImg },
        { title: 'Business Loan', icon: 'fa fa-briefcase', img: businessLoanImg },
        { title: 'Used Car Loan', icon: 'fa fa-car-side', img: usedCarLoanImg },
        { title: 'Home Loan', icon: 'fa fa-home', img: homeLoanImg },
        { title: 'Car Loan', icon: 'fa fa-car', img: carLoanImg }
      ]
    },
    {
      name: 'Insurance',
      items: [
        { title: 'Health Insurance', icon: 'fa fa-hospital', img: blog2 },
        { title: 'Life Insurance', icon: 'fa fa-heart', img: blog1 },
        { title: 'Auto Insurance', icon: 'fa fa-car', img: carLoanImg },
        { title: 'Commercial Vehicle', icon: 'fa fa-truck', img: carLoanImg },
        { title: 'Two Wheeler Insurance', icon: 'fa fa-motorcycle', img: blog3 }
      ]
    },
    {
      name: 'Card',
      items: [
        { title: 'HDFC Credit Card', icon: 'fa fa-credit-card', img: hdfcCardImg },
        { title: 'SBI Credit Card', icon: 'fa fa-credit-card', img: sbiCardImg },
        { title: 'INDUSIND Credit Card', icon: 'fa fa-credit-card', img: indusindCardImg },
        { title: 'IDFC Credit Card', icon: 'fa fa-credit-card', img: idfcCardImg },
        { title: 'Bank of Baroda Credit Card', icon: 'fa fa-credit-card', img: bobCardImg }
      ]
    }
  ]

  const openForm = (serviceTitle) => {
    setSelectedService(serviceTitle)
    setShowModal(true)
  }

  const closeForm = () => setShowModal(false)

  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '900px' }}>
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-4 mb-4">Explore and Apply</h1>
          <p className="mb-0">Choose a category below and apply. Fill out the quick form and our team will get back to you.</p>
        </div>

        <div className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-3 mb-4">
          <div className="btn-group flex-wrap" role="group" aria-label="Category filter">
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                className={`btn btn-sm ${activeCategory === cat.name ? 'btn-primary' : 'btn-outline-primary'} rounded-pill me-2 mb-2`}
                onClick={() => setActiveCategory(cat.name)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="ms-md-auto" style={{ minWidth: '260px' }}>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0"><i className="fa fa-search"></i></span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search services..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {categories.filter(c => c.name === activeCategory).map((cat, ci) => {
          const filteredItems = cat.items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
          if (filteredItems.length === 0) return null
          return (
          <div key={ci} className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <h3 className="mb-0">{cat.name}</h3>
              <div className="ms-3 flex-grow-1 border-top"></div>
            </div>
            <div className="row g-4">
              {filteredItems.map((item, i) => (
                <div key={i} className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="service-item h-100">
                    <div className="service-img">
                      <img src={item.img} className="img-fluid rounded-top w-100" alt={item.title} />
                      <div className="service-icon p-3">
                        <i className={`${item.icon} fa-2x`}></i>
                      </div>
                    </div>
                    <div className="service-content p-4 d-flex flex-column">
                      <div className="service-content-inner mb-0 w-100 d-flex flex-column">
                        <span className="d-inline-block h5 mb-2">{item.title}</span>
                        <p className="mb-3">Apply now to get started.</p>
                        <button className="btn btn-primary rounded-pill align-self-start py-2 px-4" onClick={() => openForm(`${cat.name} - ${item.title}`)}>Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )
        })}

        {showModal && (
          <div className="position-fixed top-0 start-0 w-100 h-100 modern-modal" style={{ zIndex: 1050 }}>
            <div className="w-100 h-100 modern-modal-backdrop" onClick={closeForm}></div>
            <div className="modern-dialog bg-white rounded-4 shadow" style={{ 
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(900px, 90vw)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}>
              <div className="p-3 p-md-4 border-bottom d-flex justify-content-between align-items-center modern-header">
                <h5 className="mb-0">Details Form {selectedService ? `- ${selectedService}` : ''}</h5>
                <button className="modern-close btn btn-sm rounded-circle" onClick={closeForm} aria-label="Close">&times;</button>
              </div>
              <div className="p-3 p-md-4 modern-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <form className="modern-form" onSubmit={(e) => { e.preventDefault(); closeForm(); }}>
                  <div className="row g-3">
                    <div className="col-md-6 field">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Full Name" required />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">Mobile</label>
                      <input type="tel" className="form-control form-control-lg" placeholder="10-digit mobile" pattern="^[0-9]{10}$" required />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">Pan Card</label>
                      <input type="text" className="form-control form-control-lg" placeholder="ABCDE1234F" pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$" />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">DOB</label>
                      <input type="date" className="form-control form-control-lg" required />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">E-mail</label>
                      <input type="email" className="form-control form-control-lg" placeholder="name@example.com" required />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">Company Name</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Company" />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">Designation</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Designation" />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">Net Salary</label>
                      <input type="number" className="form-control form-control-lg" placeholder="Monthly salary" min="0" />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">Official E-mail (optional)</label>
                      <input type="email" className="form-control form-control-lg" placeholder="official@company.com" />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">Office Pincode</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Pincode" pattern="^[0-9]{6}$" />
                    </div>
                    <div className="col-12 field">
                      <label className="form-label">Office Address</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Address line" />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">City</label>
                      <input type="text" className="form-control form-control-lg" placeholder="City" />
                    </div>
                    <div className="col-12 field">
                      <label className="form-label">Residence Address</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Address line" />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">Pin Code</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Pincode" pattern="^[0-9]{6}$" />
                    </div>
                    <div className="col-md-6 field">
                      <label className="form-label">Loan Required</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Amount / Product" required />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <button type="button" className="btn btn-outline-secondary rounded-pill px-4" onClick={closeForm}>Cancel</button>
                    <button type="submit" className="btn btn-primary rounded-pill px-4">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Services
