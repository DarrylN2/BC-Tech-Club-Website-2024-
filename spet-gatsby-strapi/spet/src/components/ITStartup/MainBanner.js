import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/shape5.png"

const query = graphql`
  {
    strapiItStartupBanner {
      title
      shortText
      btnText
      btnLink
      image {
        url
        alternativeText
      }
    }
  }
`

const MainBanner = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiItStartupBanner: { title, shortText, btnText, btnLink, image },
  } = data

  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-5">
                  <div className="hero-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                      data-aos-once="false"
                    >
                      {title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                      data-aos-once="false"
                    >
                      {shortText}
                    </p>

                    <Link
                      to={btnLink}
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      data-aos-once="false"
                    >
                      {btnText}
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 offset-lg-1">
                  <div className="banner-image">
                    <img
                      src={image.url}
                      className="animate__animated animate__fadeInUp animate__delay-0.1"
                      alt={image.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default MainBanner
