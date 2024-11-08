import React from "react"
import * as Icon from "react-feather"
import { graphql, useStaticQuery } from "gatsby"

import CercleShape from "../../images/services-right-image/cercle-shape.png"

const query = graphql`
  {
    strapiServiceOne {
      title
      shortText
      image {
        url
        alternativeText
      }
      servicesList {
        id
        title
      }
    }
    strapiServiceTwo {
      title
      shortText
      image {
        url
        alternativeText
      }
      servicesList {
        id
        title
      }
    }
  }
`

const SingleFeatures = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const { strapiServiceOne, strapiServiceTwo } = data

  return (
    <>
      {strapiServiceOne && (
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
      )}

      {strapiServiceTwo && (
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
                <div className="services-left-image">
                  <img
                    src={CercleShape}
                    className="bg-image rotateme"
                    alt="shape"
                  />

                  <img
                    src={strapiServiceTwo.image.url}
                    alt={strapiServiceTwo.image.alternativeText}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleFeatures
