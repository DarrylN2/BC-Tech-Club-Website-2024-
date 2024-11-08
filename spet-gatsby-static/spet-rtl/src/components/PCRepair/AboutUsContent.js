import React from "react"
import * as Icon from "react-feather"

import About1 from "../../images/about1.jpg"
import About2 from "../../images/about2.jpg"
import About3 from "../../images/about3.jpg"
import AboutShape1 from "../../images/about-shape1.png"
import AboutShape2 from "../../images/about-shape2.png"

const AboutUsContent = () => {
  return (
    <>
      <div className="repair-about-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="repair-about-content">
                <span className="sub-title">About Us</span>
                <h2>We have 35 years of experience in repair services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul>
                  <li>
                    <span>
                      <Icon.Check /> Experienced Professionals
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Expert Technical Skills
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Excellent Reputation
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Friendly Service
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Trustworthy See Reviews
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Affordable Diagnosis
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="repair-about-image">
                <img
                  src={About1}
                  className="animate__animated animate__fadeInDown"
                  alt="About"
                />

                <img
                  src={About2}
                  className="animate__animated animate__zoomIn"
                  alt="About"
                />

                <img
                  src={About3}
                  className="animate__animated animate__fadeInUp"
                  alt="About"
                />

                <img src={AboutShape1} alt="About" />

                <img src={AboutShape2} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsContent
