import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import APPartner1 from "../../images/agency-portfolio-partner-image/ap-partner1.png"
import APPartner2 from "../../images/agency-portfolio-partner-image/ap-partner2.png"
import APPartner3 from "../../images/agency-portfolio-partner-image/ap-partner3.png"
import APPartner4 from "../../images/agency-portfolio-partner-image/ap-partner4.png"
import APPartner5 from "../../images/agency-portfolio-partner-image/ap-partner5.png"
import APPartner6 from "../../images/agency-portfolio-partner-image/ap-partner6.png"

const Partner = () => {
  return (
    <>
      <div className="agency-portfolio-partner-area ptb-80">
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="agency-portfolio-partner-slides"
          >
            <SwiperSlide className="single-agency-portfolio-partner">
              <img src={APPartner1} alt="Partner" />
            </SwiperSlide>
            <SwiperSlide className="single-agency-portfolio-partner">
              <img src={APPartner2} alt="Partner" />
            </SwiperSlide>
            <SwiperSlide className="single-agency-portfolio-partner">
              <img src={APPartner3} alt="Partner" />
            </SwiperSlide>
            <SwiperSlide className="single-agency-portfolio-partner">
              <img src={APPartner4} alt="Partner" />
            </SwiperSlide>
            <SwiperSlide className="single-agency-portfolio-partner">
              <img src={APPartner5} alt="Partner" />
            </SwiperSlide>
            <SwiperSlide className="single-agency-portfolio-partner">
              <img src={APPartner6} alt="Partner" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Partner
