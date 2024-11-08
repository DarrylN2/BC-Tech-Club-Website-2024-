import React from "react"
import { Link } from "gatsby"

import AgencyBannerImg from "../../images/agency-image/agency-banner-img.jpg"

// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const MainBanner = () => {
  return (
    <>
      <div className="agency-main-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="agency-banner-content">
                <span className="sub-title">We are creative</span>
                <h1>Digital Agency</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link to="/contact" className="btn btn-secondary">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="agency-banner-image">
                <img src={AgencyBannerImg} alt="Agency" />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default MainBanner
