import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import { graphql, useStaticQuery } from "gatsby"

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

const FeedbackStyleFive = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiFeedback: { feedbackList },
  } = data

  return (
    <>
      {feedbackList && (
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
              {feedbackList.map(feedback => (
                <SwiperSlide
                  className="agency-portfolio-feedback-item"
                  key={feedback.id}
                >
                  <img
                    src={feedback.image.url}
                    alt={feedback.image.alternativeText}
                  />
                  <h3 className="name">{feedback.name}</h3>
                  <span className="designation">{feedback.designation}</span>

                  <p>{feedback.feedbackText}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}

export default FeedbackStyleFive
