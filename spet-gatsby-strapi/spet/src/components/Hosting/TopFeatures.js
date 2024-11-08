import React from "react"
import { Link } from "gatsby"

const TopFeatures = () => {
  return (
    <>
      <div className="boxes-area hosting-boxes-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                <div className="icon">
                  <i className="bx bx-dollar"></i>
                </div>
                <h3>
                  <Link to="/feature-details">Money-back Guarantee</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-box bg-f78acb">
                <div className="icon">
                  <i className="bx bx-data"></i>
                </div>
                <h3>
                  <Link to="/feature-details">Big Data Transfer</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-box bg-c679e3">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt"></i>
                </div>
                <h3>
                  <Link to="/feature-details">99.9% Server Uptime</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <i className="bx bx-tab"></i>
                </div>
                <h3>
                  <Link to="/feature-details">Live 24/7 Support</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopFeatures
