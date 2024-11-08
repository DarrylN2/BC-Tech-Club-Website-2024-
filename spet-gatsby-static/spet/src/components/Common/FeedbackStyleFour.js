import React from "react"
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

// Client Images
import Client1 from "../../images/client-image/client1.jpg"
import Client2 from "../../images/client-image/client2.jpg"
import Client3 from "../../images/client-image/client3.jpg"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const FeedbackStyleFour = () => {
  return (
    <>
      <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Clients Feedback</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="ml-feedback-slides"
          >
            <SwiperSlide>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <img src={Client1} alt="client" />
                  <h3>Sarah Taylor</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>

                <div className="rating">
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <img src={Client2} alt="client" />
                  <h3>Steven Smith</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>

                <div className="rating">
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <img src={Client3} alt="client" />
                  <h3>James Eva</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>

                <div className="rating">
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default FeedbackStyleFour
