import React from "react"
import { Link } from "gatsby"

import MLMainPic from "../../images/ml-banner-image/ml-main-pic.png"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const MainBanner = () => {
  return (
    <>
      <div className="ml-main-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-banner-content">
                <h1>World’s Leading AI & Machine Learning Company</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>

                <Link to="/contact" className="btn btn-secondary">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-banner-single-image">
                <img
                  src={MLMainPic}
                  className="animate__animated animate__fadeInUp animate__delay-0.5s"
                  alt="MLMainPic"
                />
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
