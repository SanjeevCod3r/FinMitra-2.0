import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import IndiaTime from './IndiaTime'

function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 45)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <>
      <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <div className="border-end border-primary pe-3">
                  <a href="tel:+919310296757" className="text-muted small"><i className="fas fa-phone-alt text-primary me-2"></i>+91 9310296757</a>
                </div>
                <div className="ps-3">
                  <a href="mailto:info@finmitrafinanceinsurance.com" className="text-muted small"><i className="fas fa-envelope text-primary me-2"></i>info@finmitrafinanceinsurance.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex justify-content-end align-items-center">
                <div className="d-flex">
                  <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-instagram"></i></a>
                  <a className="btn p-0 text-primary me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="ms-4 d-flex align-items-center">
                  <IndiaTime />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid nav-bar px-0 px-lg-4 py-lg-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="/" className="navbar-brand p-0 d-flex align-items-center" onClick={() => window.location.reload()}>
              <img src={logo} alt="FinMitra logo" style={{ height: '40px' }} className="me-2" />
              <h1 className="mb-0 fw-bold">
                <span className="text-primary">Fin</span>
                <span className="text-secondary">Mitra</span>
              </h1>
            </a>
            <button 
              className="navbar-toggler d-lg-none" 
              type="button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              <span className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} transition-icon`}></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} d-lg-none`}>
              <div className={`mobile-drawer ${isMenuOpen ? 'show' : ''}`}>
                <div className="drawer-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="d-flex align-items-center text-decoration-none" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.reload(); }}>
                      <img src={logo} alt="FinMitra logo" style={{ height: '40px' }} className="me-2" />
                      <h4 className="mb-0 fw-bold">
                        <span className="text-white">Fin</span>
                        <span className="text-warning">Mitra</span>
                      </h4>
                    </a>
                    <button 
                      className="btn btn-close-drawer" 
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close drawer"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                  <div className="drawer-divider"></div>
                </div>
                <div className="drawer-body">
                  <div className="mobile-nav">
                    <Link to="/" className={`mobile-nav-item ${isActive('/') ? 'active' : ''}`} onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>
                      <i className="fa fa-home me-3"></i> Home
                    </Link>
                    <Link to="/about" className={`mobile-nav-item ${isActive('/about') ? 'active' : ''}`} onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>
                      <i className="fa fa-info-circle me-3"></i> About
                    </Link>
                    <Link to="/services" className={`mobile-nav-item ${isActive('/services') ? 'active' : ''}`} onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>
                      <i className="fa fa-concierge-bell me-3"></i> Services
                    </Link>
                    <Link to="/emi-calculator" className={`mobile-nav-item ${isActive('/emi-calculator') ? 'active' : ''}`} onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>
                      <i className="fa fa-calculator me-3"></i> EMI
                    </Link>
                    <div className="mobile-nav-dropdown">
                      <div 
                        className="mobile-nav-item"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        style={{ cursor: 'pointer' }}
                      >
                        <i className="fa fa-file-alt me-3"></i> Pages <i className={`fa fa-chevron-down ms-auto ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                      </div>
                      <div className={`mobile-dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                        <Link to="/features" className="mobile-dropdown-item" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); window.scrollTo(0, 0); }}>Our Features</Link>
                        <Link to="/team" className="mobile-dropdown-item" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); window.scrollTo(0, 0); }}>Our team</Link>
                        <Link to="/testimonial" className="mobile-dropdown-item" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); window.scrollTo(0, 0); }}>Testimonial</Link>
                        <Link to="/faq" className="mobile-dropdown-item" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); window.scrollTo(0, 0); }}>FAQs</Link>
                        <Link to="/blog" className="mobile-dropdown-item" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); window.scrollTo(0, 0); }}>Blog</Link>
                      </div>
                    </div>
                    <Link to="/contact" className={`mobile-nav-item ${isActive('/contact') ? 'active' : ''}`} onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>
                      <i className="fa fa-envelope me-3"></i> Contact
                    </Link>
                  </div>
                  <div className="drawer-footer">
                    <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-4 w-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>
                      <i className="fa fa-paper-plane me-2"></i> Get a Quote
                    </Link>
                    <div className="drawer-contact mt-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="contact-icon me-3">
                          <i className="fa fa-phone-alt text-primary"></i>
                        </div>
                        <div>
                          <div className="small text-muted">Call to Our Experts</div>
                          <div className="fw-bold">Free: + 91 9310296757</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="contact-icon me-3">
                          <i className="fa fa-envelope text-primary"></i>
                        </div>
                        <div>
                          <div className="small text-muted">Email Us</div>
                          <div className="fw-bold">info@finmitrafinanceinsurance.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isMenuOpen && (
              <div 
                className="drawer-backdrop show" 
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close drawer"
              />
            )}
            <div className="collapse navbar-collapse d-none d-lg-flex">
              <div className="navbar-nav mx-0 mx-lg-auto">
                <Link to="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => window.scrollTo(0, 0)}>Home</Link>
                <Link to="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => window.scrollTo(0, 0)}>About</Link>
                <Link to="/services" className={`nav-item nav-link ${isActive('/services') ? 'active' : ''}`} onClick={() => window.scrollTo(0, 0)}>Services</Link>
                <Link to="/emi-calculator" className={`nav-item nav-link ${isActive('/emi-calculator') ? 'active' : ''}`} onClick={() => window.scrollTo(0, 0)}>EMI</Link>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-bs-toggle="dropdown">
                    <span className="dropdown-toggle">Pages</span>
                  </a>
                  <div className="dropdown-menu">
                    <Link to="/features" className="dropdown-item" onClick={() => window.scrollTo(0, 0)}>Our Features</Link>
                    <Link to="/team" className="dropdown-item" onClick={() => window.scrollTo(0, 0)}>Our team</Link>
                    <Link to="/testimonial" className="dropdown-item" onClick={() => window.scrollTo(0, 0)}>Testimonial</Link>
                    <Link to="/faq" className="dropdown-item" onClick={() => window.scrollTo(0, 0)}>FAQs</Link>
                    <Link to="/blog" className="dropdown-item" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
                  </div>
                </div>
                <Link to="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                <div className="nav-btn px-3">
                  <Link to="/contact" className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>Get a Quote</Link>
                </div>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shrink-0 ps-4">
              <a href="#" className="btn btn-light btn-lg-square rounded-circle position-relative">
                <i className="fa fa-phone-alt fa-2x"></i>
                <div className="position-absolute" style={{ top: '7px', right: '12px' }}>
                  <span><i className="fa fa-comment-dots text-secondary"></i></span>
                </div>
              </a>
              <div className="d-flex flex-column ms-3">
                <span>Call to Our Experts</span>
                <a href="tel:+919310296757"><span className="text-dark">Free: + 91 9310296757</span></a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
