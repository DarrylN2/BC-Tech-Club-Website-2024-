import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import AgencyIconBG from "../../images/agency-image/agency-icon-bg.png"
import AgencyShape1 from "../../images/agency-image/agency-shape1.png"

const WhatWeOffer = () => {
  return (
    <>
      <div className="solutions-area ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">What We Offer</span>
            <h2>Our Featured Solutions</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-landscape"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">Programmatic Advertising</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">Strategy & Research</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">Design & Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-chalkboard"></i>
                  <img src={AgencyIconBG} alt="Icon" />
                </div>

                <h3>
                  <Link to="/service-details">Branding & Marketing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shape9 slow mobile-dnone">
          <img
            src={AgencyShape1}
            className="animate__animated animate__fadeInLeft animate__delay-0.7s"
            alt="Icon"
          />
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
