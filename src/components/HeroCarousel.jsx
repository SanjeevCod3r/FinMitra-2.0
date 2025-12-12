import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import carouselImg from '../assets/images/carousel-2.png'
import blogImg from '../assets/images/blog-2.png'

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Get the Right Loan, Insurance & Cards",
      subtitle: "Welcome to FinMitra",
      description: "One place for Personal & Business Loans, Insurance, and Credit Cards. Simple, fast and transparent.",
      alignment: 'start',
      image: carouselImg
    },
    {
      id: 2,
      title: "Fast Approvals. Honest Guidance.",
      subtitle: "Your trusted financial partner",
      description: "Compare options, apply in minutes, and let our team handle the rest.",
      alignment: 'end',
      image: blogImg
    }
  ]

  return (
    <div className="header-carousel">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: '.hero-dots',
          bulletClass: 'hero-dot',
          bulletActiveClass: 'hero-dot-active',
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="header-carousel-item bg-primary">
              <div className="carousel-caption">
                <div className="container">
                  <div className={`row g-4 align-items-center ${slide.alignment === 'end' ? 'flex-row-reverse' : ''}`}>
                    <div className="col-lg-7 animated fadeInLeft">
                      <div className={`text-sm-center text-md-${slide.alignment}`}>
                        <h4 className="text-white text-uppercase fw-bold mb-3">{slide.subtitle}</h4>
                        <h1 className="display-1 text-white mb-3">{slide.title}</h1>
                        <p className="mb-5 fs-5 text-white-50">{slide.description}</p>
                        <div className={`d-flex flex-column flex-md-row justify-content-center justify-content-md-${slide.alignment} flex-shrink-0 gap-3 mb-4`}>
                          <a className="btn btn-light rounded-pill py-3 px-4 px-md-5" href="/contact"><i className="fa fa-paper-plane me-2"></i> Enquire Now</a>
                          <a className="btn btn-dark rounded-pill py-3 px-4 px-md-5" href="/services">Explore Services</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 animated fadeInRight">
                      <div className="carousel-img mt-4 mt-lg-0" style={{ objectFit: 'cover' }}>
                        <img src={slide.image} className="img-fluid w-100 rounded-3" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-dots"></div>
    </div>
  )
}

export default HeroCarousel
