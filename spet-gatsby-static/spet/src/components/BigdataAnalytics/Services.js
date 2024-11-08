import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

// Services Icon
import Icon1 from "../../images/bigdata-analytics/icon1.png"
import Icon2 from "../../images/bigdata-analytics/icon2.png"
import Icon3 from "../../images/bigdata-analytics/icon3.png"
import Icon4 from "../../images/bigdata-analytics/icon4.png"
import Icon5 from "../../images/bigdata-analytics/icon5.png"
import Icon6 from "../../images/bigdata-analytics/icon6.png"
import Rectangle from "../../images/bigdata-analytics/rectangle.png"

const Services = () => {
  return (
    <>
      <div className="bigdata-services-area ptb-80 bg-eef6fd">
        <div className="container">
          <div className="section-title">
            <h2>Services We Can Help You With</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon1} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Big Data Analysis</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon2} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Robust Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon3} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Marketing Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon4} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Data Visualization</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon5} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Securities Research</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={Icon6} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Data Governance</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <img src={Rectangle} alt="Rectangle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
