import React from "react"
import * as Icons from "react-feather"
import { Link } from "gatsby"

const Features = () => {
  return (
    <>
      <div className="hosting-features-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Features</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon">
                  <Icons.Settings />
                </div>
                <h3>
                  <Link to="/feature-details">Incredible Infrastructure</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon bg-c679e3">
                  <Icons.Info />
                </div>
                <h3>
                  <Link to="/feature-details">Information Retrieval</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon">
                  <Icons.Bell />
                </div>
                <h3>
                  <Link to="/feature-details">Best Analytics Audits</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon bg-c679e3">
                  <Icons.Grid />
                </div>
                <h3>
                  <Link to="/feature-details">Simple Dashboard</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon">
                  <Icons.Mail />
                </div>
                <h3>
                  <Link to="/feature-details">Email Notifications</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon bg-c679e3">
                  <Icons.HardDrive />
                </div>
                <h3>
                  <Link to="/feature-details">Deep Technical SEO</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
