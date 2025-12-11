import { Link } from 'react-router-dom'
import instagram1 from '../assets/images/instagram-footer-1.jpg'
import instagram2 from '../assets/images/instagram-footer-2.jpg'
import instagram3 from '../assets/images/instagram-footer-3.jpg'
import instagram4 from '../assets/images/instagram-footer-4.jpg'
import instagram5 from '../assets/images/instagram-footer-5.jpg'
import instagram6 from '../assets/images/instagram-footer-6.jpg'
import logo from '../assets/images/logo.png'

function Footer() {
  const instagramImages = [instagram1, instagram2, instagram3, instagram4, instagram5, instagram6]

  return (
    <>
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4 d-flex align-items-center">
                  <img src={logo} alt="FinMitra logo" style={{ height: '32px' }} className="me-2" />
                  FinMitra
                </h4>
                <p className="text-white mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-white me-2"></i>
                  <a className="btn btn-light btn-md-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f text-dark"></i></a>
                  <a className="btn btn-light btn-md-square rounded-circle me-3" href="#"><i className="fab fa-twitter text-dark"></i></a>
                  <a className="btn btn-light btn-md-square rounded-circle me-3" href="#"><i className="fab fa-instagram text-dark"></i></a>
                  <a className="btn btn-light btn-md-square rounded-circle me-0" href="#"><i className="fab fa-linkedin-in text-dark"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Useful Links</h4>
                <Link to="/about"><i className="fas fa-angle-right me-2"></i> About Us</Link>
                <Link to="/features"><i className="fas fa-angle-right me-2"></i> Features</Link>
                <Link to="/services"><i className="fas fa-angle-right me-2"></i> Services</Link>
                <Link to="/faq"><i className="fas fa-angle-right me-2"></i> FAQs</Link>
                <Link to="/blog"><i className="fas fa-angle-right me-2"></i> Blog</Link>
                <Link to="/contact"><i className="fas fa-angle-right me-2"></i> Contact</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Services</h4>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Life Insurance</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Health Insurance</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Car Insurance</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Home Insurance</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Business Insurance</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Travel Insurance</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Instagram</h4>
                <div className="row g-3">
                  {instagramImages.map((img, index) => (
                    <div key={index} className="col-4">
                      <div className="footer-instagram rounded">
                        <img src={img} className="img-fluid w-100" alt="" />
                        <div className="footer-search-icon">
                          <a href="#" className="btn btn-light btn-md-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body"><i className="fas fa-copyright text-light me-2"></i>
                <span className="text-white">FinMitra. All rights reserved.</span>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              <span className="text-white">Made by </span>
              <a href="#" className="border-bottom text-white">ZesterTech</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
