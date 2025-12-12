import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import testimonial1 from '../assets/images/testimonial-1.jpg'
import testimonial2 from '../assets/images/testimonial-2.jpg'
import testimonial3 from '../assets/images/testimonial-3.jpg'

function Testimonial() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const testimonials = [
    {
      img: testimonial1,
      name: 'John Abraham',
      role: 'New York',
      text: 'FinMitra made my loan process incredibly smooth. Their team guided me through every step and I got approval within 48 hours. Highly recommend their services!'
    },
    {
      img: testimonial2,
      name: 'Mary Johnson',
      role: 'California',
      text: 'The insurance plans offered by FinMitra are comprehensive and affordable. Their advisors helped me choose the perfect coverage for my family. Excellent service!'
    },
    {
      img: testimonial3,
      name: 'David Williams',
      role: 'Texas',
      text: 'I needed a business loan urgently and FinMitra delivered beyond expectations. Minimal paperwork, competitive rates, and professional support throughout the process.'
    }
  ]

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-4 mb-4">What Our Clients Say</h1>
          <p className="mb-0">Real stories from real customers who have transformed their financial journey with FinMitra's trusted services and expert guidance.</p>
        </div>
        <div className="testimonial-carousel position-relative">
          <div className="carousel-nav">
            <button ref={prevRef} className="testimonial-prev"><i className="fa fa-arrow-left"></i></button>
            <button ref={nextRef} className="testimonial-next"><i className="fa fa-arrow-right"></i></button>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 }
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item bg-light rounded p-4">
                  <div className="row g-4 align-items-center">
                    <div className="col-xl-5">
                      <div className="d-flex justify-content-center">
                        <div className="d-inline-block position-relative">
                          <img src={item.img} className="img-fluid rounded" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
                          <span className="position-absolute top-0 start-0 translate-middle badge bg-primary rounded-circle p-2">
                            <i className="fa fa-quote-left"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <p className="mb-4">{item.text}</p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1">{item.name}</h5>
                          <p className="mb-0">{item.role}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
