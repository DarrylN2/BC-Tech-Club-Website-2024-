import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

// Client Images
import Client1 from "../../images/client-image/client1.jpg"
import Client2 from "../../images/client-image/client2.jpg"
import Client3 from "../../images/client-image/client3.jpg"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/shape5.png"

const FeedbackStyleTwo = () => {
  return (
    <>
      <div className="feedback-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>What users Saying</h2>
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
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="client-info align-items-center">
                  <div className="image">
                    <img src={Client1} alt="client" />
                  </div>

                  <div className="title">
                    <h3>Steve Lucy</h3>
                    <span>Lead Developer at Envato</span>
                  </div>
                </div>

                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="client-info align-items-center">
                  <div className="image">
                    <img src={Client2} alt="client" />
                  </div>

                  <div className="title">
                    <h3>David Luiz</h3>
                    <span>Lead Developer at Envato</span>
                  </div>
                </div>

                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="client-info align-items-center">
                  <div className="image">
                    <img src={Client3} alt="client" />
                  </div>

                  <div className="title">
                    <h3>Marta Smith</h3>
                    <span>Lead Developer at Envato</span>
                  </div>
                </div>

                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
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
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape5">
          <img src={Shape5} alt="shape" />
        </div>
        <div className="shape6 rotateme">
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

export default FeedbackStyleTwo
