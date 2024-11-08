import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import { graphql, useStaticQuery } from "gatsby"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/shape5.png"

const query = graphql`
  {
    strapiFeedback {
      feedbackList {
        id
        name
        designation
        image {
          url
          alternativeText
        }
        feedbackText
      }
    }
  }
`

const FeedbackStyleTwo = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiFeedback: { feedbackList },
  } = data

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

          {feedbackList && (
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
              {feedbackList.map(feedback => (
                <SwiperSlide key={feedback.id}>
                  <div className="single-feedback-item">
                    <div className="client-info align-items-center">
                      <div className="image">
                        <img
                          src={feedback.image.url}
                          alt={feedback.image.alternativeText}
                        />
                      </div>

                      <div className="title">
                        <h3>{feedback.name}</h3>
                        <span>{feedback.designation}</span>
                      </div>
                    </div>

                    <p>{feedback.feedbackText}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
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
