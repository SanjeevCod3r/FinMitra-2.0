import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is the Life Insurance?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, placeat. Similique eum quasi rem quos ab porro sit tempore accusamus deserunt omnis error, totam magni autem atque cupiditate perspiciatis accusantium.'
    },
    {
      question: 'Is Life Insurance Worth Having?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, placeat. Similique eum quasi rem quos ab porro sit tempore accusamus deserunt omnis error, totam magni autem atque cupiditate perspiciatis accusantium.'
    },
    {
      question: 'When Should You Buy Life Insurance?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, placeat. Similique eum quasi rem quos ab porro sit tempore accusamus deserunt omnis error, totam magni autem atque cupiditate perspiciatis accusantium.'
    },
    {
      question: 'How Much Life Insurance Do You Need?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, placeat. Similique eum quasi rem quos ab porro sit tempore accusamus deserunt omnis error, totam magni autem atque cupiditate perspiciatis accusantium.'
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
