import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

const WhatWeDo = () => {
  return (
    <>
      <div className="what-we-do-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-monitor"></i>
                </div>
                <h3>
                  <Link to="/service-details">Research</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link to="/service-details" className="link">
                  Market Research
                </Link>

                <Link to="/service-details" className="link">
                  Investment Research
                </Link>

                <Link to="/service-details" className="read-more-btn">
                  <Icon.ArrowRight /> Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>
                  <Link to="/service-details">Analytics</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit consectetur, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link to="/service-details" className="link">
                  Data Analytics
                </Link>

                <Link to="/service-details" className="link">
                  Business Intelligence
                </Link>

                <Link to="/service-details" className="read-more-btn">
                  <Icon.ArrowRight /> Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-software"></i>
                </div>
                <h3>
                  <Link to="/service-details">Technology</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link to="/service-details" className="link">
                  Intelligence Automation
                </Link>

                <Link to="/service-details" className="link">
                  Quality Engineering
                </Link>

                <Link to="/service-details" className="read-more-btn">
                  <Icon.ArrowRight /> Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
