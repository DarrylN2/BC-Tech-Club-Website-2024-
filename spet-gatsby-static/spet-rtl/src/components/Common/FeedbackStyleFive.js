import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import Client1 from "../../images/client-image/client1.jpg"
import Client2 from "../../images/client-image/client2.jpg"
import Client3 from "../../images/client-image/client3.jpg"

const FeedbackStyleFive = () => {
  return (
    <>
      <div className="agency-portfolio-feedback-area ptb-80">
        <div className="container">
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
            className="agency-portfolio-feedback-slides"
          >
            <SwiperSlide className="agency-portfolio-feedback-item">
              <img src={Client1} alt="client" />
              <p>
                Pellentesque sed purus eu urna vulputate interdum quis sit amet
                sapien. Pellentesque porta mauris at orci sagittis commodo.
                Curabitur aliquam nibh odio, vel ornare nisl volutpat quis.
                Maecenas congue dapibus lacus id fringilla. Vestibulum id augue
                massa. Proin sed neque dapibus, vulputate ligula eget, aliquam
                eros.
              </p>
            </SwiperSlide>

            <SwiperSlide className="agency-portfolio-feedback-item">
              <img src={Client2} alt="client" />
              <p>
                Pellentesque sed purus eu urna vulputate interdum quis sit amet
                sapien. Pellentesque porta mauris at orci sagittis commodo.
                Curabitur aliquam nibh odio, vel ornare nisl volutpat quis.
                Maecenas congue dapibus lacus id fringilla. Vestibulum id augue
                massa. Proin sed neque dapibus, vulputate ligula eget, aliquam
                eros.
              </p>
            </SwiperSlide>

            <SwiperSlide className="agency-portfolio-feedback-item">
              <img src={Client3} alt="client" />
              <p>
                Pellentesque sed purus eu urna vulputate interdum quis sit amet
                sapien. Pellentesque porta mauris at orci sagittis commodo.
                Curabitur aliquam nibh odio, vel ornare nisl volutpat quis.
                Maecenas congue dapibus lacus id fringilla. Vestibulum id augue
                massa. Proin sed neque dapibus, vulputate ligula eget, aliquam
                eros.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default FeedbackStyleFive
