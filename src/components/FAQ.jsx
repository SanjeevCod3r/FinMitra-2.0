import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What types of loans does FinMitra offer?',
      answer: 'FinMitra offers personal loans, business loans, home loans, and education loans with competitive interest rates and flexible repayment terms. Each loan is tailored to meet your specific financial requirements.'
    },
    {
      question: 'How quickly can I get loan approval?',
      answer: 'Our streamlined approval process ensures quick decisions. Most personal loans are approved within 24-48 hours, while business loans may take 2-3 business days depending on the documentation and loan amount.'
    },
    {
      question: 'What insurance products are available?',
      answer: 'FinMitra provides comprehensive insurance solutions including life insurance, health insurance, car insurance, and home insurance. We partner with leading insurance companies to offer the best coverage at affordable premiums.'
    },
    {
      question: 'How do I apply for a credit card through FinMitra?',
      answer: 'Applying for a credit card is simple. Fill out our online application form, submit the required documents, and our team will help you choose the best card based on your income and spending patterns. Approval typically takes 3-5 business days.'
    }
  ]

  return (
    <div className="container-fluid faq-section bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-xl-6 animated fadeInLeft">
            <div className="h-100">
              <div className="mb-5">
                <h4 className="text-primary">Some Important FAQ's</h4>
                <h1 className="display-4 mb-0">Common Frequently Asked Questions</h1>
              </div>
              <div className="accordion" id="accordionExample">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${openIndex !== index ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                    >
                      <div className="accordion-body rounded">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 animated fadeInRight">
            <div className="bg-primary rounded p-5">
              <h4 className="text-white mb-4">Quick inquiry</h4>
              <form>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <select className="form-select" id="select1">
                        <option value="1">Life Insurance</option>
                        <option value="2">Health Insurance</option>
                        <option value="3">Car Insurance</option>
                        <option value="4">Home Insurance</option>
                      </select>
                      <label htmlFor="select1">Services</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Message" id="message" style={{ height: '160px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-light w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
