import React from "react"
import { Link } from "gatsby"

import AboutImg from "../../images/about4.png"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const AboutUsContent = () => {
  return (
    <>
      <div className="about-area pt-0 ptb-80">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-about-img">
                <img src={AboutImg} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-about-content">
                <span className="sub-title">About Us</span>
                <h2>Engaging New Audiences Through Smart Approach</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Nullam quis ante. Etiam sit amet orci eget eros faucibus
                  tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                  sodales sagittis magna. Sed consequat, leo eget bibendum
                  sodales, augue velit cursus nunc.Donec vitae sapien ut libero
                  venenatis faucibus tempus.
                </p>

                <Link to="/about-1" className="btn btn-secondary">
                  Discover More
                </Link>
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

export default AboutUsContent
