import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import { graphql, useStaticQuery } from "gatsby"

// Shape Images
import AgencyUser1 from "../../images/agency-image/agency-user1.png"
import AgencyUser2 from "../../images/agency-image/agency-user2.png"
import AgencyUser3 from "../../images/agency-image/agency-user3.png"
import AgencyUser4 from "../../images/agency-image/agency-user4.png"
import AgencyUser5 from "../../images/agency-image/agency-user5.png"
import AgencyUser6 from "../../images/agency-image/agency-user6.png"

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
        rating {
          id
          iconName
        }
      }
    }
  }
`

const FeedbackStyleThree = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiFeedback: { feedbackList },
  } = data

  return (
    <>
      <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">Testimonials</span>
            <h2>Our Clients Feedback</h2>
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
              className="ml-feedback-slides"
            >
              {feedbackList.map(feedback => (
                <SwiperSlide key={feedback.id}>
                  <div className="single-testimonials-item">
                    <p>{feedback.feedbackText}</p>
                    <div className="client-info">
                      <img
                        src={feedback.image.url}
                        alt={feedback.image.alternativeText}
                      />

                      {feedback && (
                        <div className="rating">
                          {feedback.rating.map(rating => (
                            <i className={rating.iconName} key={rating.id}></i>
                          ))}
                        </div>
                      )}

                      <h3>{feedback.name}</h3>
                      <span>{feedback.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Shape Images */}
          <div className="user-shape1">
            <img src={AgencyUser1} alt="shape" />
          </div>
          <div className="user-shape2">
            <img src={AgencyUser2} alt="shape" />
          </div>
          <div className="user-shape3">
            <img src={AgencyUser3} alt="shape" />
          </div>
          <div className="user-shape4">
            <img src={AgencyUser4} alt="shape" />
          </div>
          <div className="user-shape5">
            <img src={AgencyUser5} alt="shape" />
          </div>
          <div className="user-shape6">
            <img src={AgencyUser6} alt="shape" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedbackStyleThree
