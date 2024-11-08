import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

const MainBanner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="agency-portfolio-home-slides"
      >
        <SwiperSlide>
          <div className="agency-portfolio-main-banner portfolio-banner-bg1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="portfolio-banner-content">
                    <span className="sub-title">We are Creative</span>
                    <h1>Digital Agency</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <Link to="/contact" className="btn btn-secondary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="agency-portfolio-main-banner portfolio-banner-bg2">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="portfolio-banner-content">
                    <span className="sub-title">We are Digital</span>
                    <h1>UX/UI Design</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <Link to="/contact" className="btn btn-secondary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="agency-portfolio-main-banner portfolio-banner-bg3">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="portfolio-banner-content">
                    <span className="sub-title">We are Agency</span>
                    <h1>Digital Marketing</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <Link to="/contact" className="btn btn-secondary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default MainBanner
