import PageHeader from '../components/PageHeader'
import contactImg from '../assets/images/contact-img.png'

function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6 animated fadeInLeft">
              <div className="contact-img d-flex justify-content-center">
                <div className="contact-img-inner">
                  <img src={contactImg} className="img-fluid w-100" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 animated fadeInRight">
              <div className="contact-card glass p-4 p-md-5 rounded-4 shadow">
                <div className="d-flex align-items-center mb-2">
                  <h4 className="text-primary mb-0">Send Your Message</h4>
                  <div className="ms-3 flex-grow-1 gradient-bar"></div>
                </div>
                <h1 className="display-6 mb-3">Get In Touch With Us</h1>
                <p className="mb-4 text-body">We’d love to hear from you. Send us a message and we’ll respond as soon as possible.</p>
                <form className="contact-form modern-form">
                  <div className="row g-3">
                    <div className="col-lg-12 col-xl-6 field">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 field">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 field">
                      <div className="form-floating">
                        <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                        <label htmlFor="phone">Your Phone</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 field">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="project" placeholder="Project" />
                        <label htmlFor="project">Your Project</label>
                      </div>
                    </div>
                    <div className="col-12 field">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12 field">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '160px' }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3 rounded-pill shadow-lg" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 animated fadeInUp">
              <div className="contact-info-card d-inline-flex w-100 p-4 rounded-4">
                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                <div>
                  <h4>Address</h4>
                  <p className="mb-0">123 Street, New York, USA</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 animated fadeInUp">
              <div className="contact-info-card d-inline-flex w-100 p-4 rounded-4">
                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-0">info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 animated fadeInUp">
              <div className="contact-info-card d-inline-flex w-100 p-4 rounded-4">
                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-0">(+012) 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
