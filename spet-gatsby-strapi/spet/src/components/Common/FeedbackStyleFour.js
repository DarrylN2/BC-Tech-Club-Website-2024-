import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import { graphql, useStaticQuery } from "gatsby"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const query = graphql`
  {
    strapiFeedback {
      heading
      shortDescription
      feedbackList {
        id
        name
        designation
        image {
          url
          alternativeText
        }
        feedbackText
        rating {
          id
          iconName
        }
      }
    }
  }
`

const FeedbackStyleFour = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiFeedback: { heading, shortDescription, feedbackList },
  } = data

  return (
    <>
      <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>{heading}</h2>
            <div className="bar"></div>
            <p>{shortDescription}</p>
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
              className="ml-feedback-slides"
            >
              {feedbackList.map(feedback => (
                <SwiperSlide key={feedback.id}>
                  <div className="single-ml-feedback-item">
                    <div className="client-info">
                      <img
                        src={feedback.image.url}
                        alt={feedback.image.alternativeText}
                      />
                      <h3>{feedback.name}</h3>
                      <span>{feedback.designation}</span>
                    </div>
                    <p>{feedback.feedbackText}</p>

                    {feedback && (
                      <div className="rating">
                        {feedback.rating.map(rating => (
                          <i className={rating.iconName} key={rating.id}></i>
                        ))}
                      </div>
                    )}
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
