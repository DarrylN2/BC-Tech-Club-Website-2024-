import React from "react"
import * as Icon from "react-feather"
import { graphql, useStaticQuery } from "gatsby"

import CercleShape from "../../images/services-right-image/cercle-shape.png"

const query = graphql`
  {
    strapiWeeklyMeeting {
      image {
        url
        alternativeText
      }
      Time
      Room
      DayOfWeek
    }
  }
`

const WeeklyMeeting = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const { strapiWeeklyMeeting } = data

  return (
    <>
      {/* {strapiServiceOne && (
        <div className="services-area ptb-80 bg-f7fafd">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-lg-6 col-md-12 services-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="section-title">
                  <h2>{strapiServiceOne.title}</h2>
                  <div className="bar"></div>
                  <p>{strapiServiceOne.shortText}</p>
                </div>

                <div className="row">
                  {strapiServiceOne.servicesList.map(service => (
                    <div className="col-lg-6 col-md-6" key={service.id}>
                      <div className="box">
                        <Icon.CheckCircle /> {service.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="services-right-image">
                  <img
                    src={CercleShape}
                    className="bg-image rotateme"
                    alt="shape"
                  />

                  <img
                    src={strapiServiceOne.image.url}
                    alt={strapiServiceOne.image.alternativeText}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {strapiWeeklyMeeting && (
        <div className="services-area ptb-80">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <div className="services-left-image" style={{ position: "relative" }}>
                  {/* <img
                    src={CercleShape}
                    className="bg-image rotateme"
                    alt="shape"
                    style={{position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "485px",
                      zIndex: "1",}}
                  />

                  <img
                    src={strapiWeeklyMeeting.image[0].url}
                    
                    alt={strapiWeeklyMeeting.image.alternativeText}
                    style={{ zIndex: "2", position: "relative", borderRadius:"15px"}}
                  /> */}
                  {/* Main Meeting Image */}
                  <img
                    src={strapiWeeklyMeeting.image[0].url}
                    alt={strapiWeeklyMeeting.image.alternativeText}
                    style={{ width: "100%", borderRadius: "15px", position: "relative", zIndex: "2" }}
                  />

                  {/* Circle Shape Positioned in the Center of the Meeting Image */}
                  <img
                    src={CercleShape}
                    className="bg-image rotateme"
                    alt="shape"
                    style={{
                      position: "absolute",
                      top: "-20%",
                      left: "-0%",
                      transform: "translate(-50%, -50%)",
                      width: "75%", // Adjust size as needed
                      zIndex: "1",
                    }}
                  />
                </div>
              </div>

              <div
                className="col-lg-6 col-md-12 services-content"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="false"
              >

                <div className="section-title">
                  <h2 style={{fontSize:'35px'}}>Weekly Meetings!</h2>
                  <div className="bar"></div>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p> */}
                  <div className="box" >
                      <Icon.Calendar /> {strapiWeeklyMeeting.DayOfWeek}
                      {/* {console.log(strapiWeeklyMeeting.DayOfWeek)} */}
                  </div>
                  <div className="box">
                      <Icon.Clock /> {strapiWeeklyMeeting.Time}
                      {/* {console.log(strapiWeeklyMeeting.Time)} */}
                  </div>
                  <div className="box">
                      <Icon.Map /> {strapiWeeklyMeeting.Room}
                      {/* {console.log(strapiWeeklyMeeting.Room)} */}
                  </div>
                </div>

                {/* <div className="section-title">
                  <h2>{strapiServiceTwo.title}</h2>
                  <div className="bar"></div>
                  <p>{strapiServiceTwo.shortText}</p>
                </div>

                <div className="row">
                  {strapiServiceTwo.servicesList.map(service => (
                    <div className="col-lg-6 col-md-6" key={service.id}>
                      <div className="box">
                        <Icon.CheckCircle /> {service.title}
                      </div>
                    </div>
                  ))}

                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WeeklyMeeting
