import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Icon1 from "../../images/icon1.png"
import Icon2 from "../../images/icon2.png"
import Icon3 from "../../images/icon3.png"

const WhyWeAreBest = () => {
  return (
    <>
      <div className="iot-why-choose-us pt-80">
        <div className="container">
          <div className="section-title">
            <h2>Why We Are Best From Others</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-iot-box">
                <div className="icon">
                  <img src={Icon1} alt="Icon" />
                </div>
                <h3>Digital Technology</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-iot-box">
                <div className="icon">
                  <img src={Icon2} alt="Icon" />
                </div>
                <h3>Business Protection</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-iot-box">
                <div className="icon">
                  <img src={Icon3} alt="Icon" />
                </div>
                <h3>Data Analysis</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyWeAreBest
