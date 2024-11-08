import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

import PartnerImg1 from "../../images/partner-img/partner-1.png"
import PartnerHoverImg1 from "../../images/partner-img/partner-hover1.png"
import PartnerImg2 from "../../images/partner-img/partner-2.png"
import PartnerHoverImg2 from "../../images/partner-img/partner-hover2.png"
import PartnerImg3 from "../../images/partner-img/partner-3.png"
import PartnerHoverImg3 from "../../images/partner-img/partner-hover3.png"
import PartnerImg4 from "../../images/partner-img/partner-10.png"
import PartnerHoverImg4 from "../../images/partner-img/partner-hover10.png"
import PartnerImg5 from "../../images/partner-img/partner-5.png"
import PartnerHoverImg5 from "../../images/partner-img/partner-hover5.png"
import PartnerImg6 from "../../images/partner-img/partner-6.png"
import PartnerHoverImg6 from "../../images/partner-img/partner-hover6.png"
import PartnerImg7 from "../../images/partner-img/partner-7.png"
import PartnerHoverImg7 from "../../images/partner-img/partner-hover7.png"

const PartnerStyleTwo = () => {
  return (
    <div className="repair-partner-area bg-f9fafb">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="repair-partner-slides"
        >
          <SwiperSlide className="single-repair-partner">
            <img src={PartnerImg1} alt="Partner" />
            <img src={PartnerHoverImg1} alt="Partner" />
          </SwiperSlide>

          <SwiperSlide className="single-repair-partner">
            <img src={PartnerImg2} alt="Partner" />
            <img src={PartnerHoverImg2} alt="Partner" />
          </SwiperSlide>

          <SwiperSlide className="single-repair-partner">
            <img src={PartnerImg3} alt="Partner" />
            <img src={PartnerHoverImg3} alt="Partner" />
          </SwiperSlide>

          <SwiperSlide className="single-repair-partner">
            <img src={PartnerImg4} alt="Partner" />
            <img src={PartnerHoverImg4} alt="Partner" />
          </SwiperSlide>

          <SwiperSlide className="single-repair-partner">
            <img src={PartnerImg5} alt="Partner" />
            <img src={PartnerHoverImg5} alt="Partner" />
          </SwiperSlide>

          <SwiperSlide className="single-repair-partner">
            <img src={PartnerImg6} alt="Partner" />
            <img src={PartnerHoverImg6} alt="Partner" />
          </SwiperSlide>

          <SwiperSlide className="single-repair-partner">
            <img src={PartnerImg7} alt="Partner" />
            <img src={PartnerHoverImg7} alt="Partner" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default PartnerStyleTwo
