import React from "react"
import { Link } from "gatsby"

import IOTFeatureImage1 from "../../images/iot-features-image/iot-feature-image1.png"
import IOTFeatureImage2 from "../../images/iot-features-image/iot-feature-image2.png"

const Features = () => {
  return (
    <>
      <div className="iot-features-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 iot-features-content">
              <h3>App Development for Connected Devices</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p>

              <Link to="/about-3" className="btn btn-primary">
                Explore More
              </Link>
            </div>

            <div className="col-lg-6 iot-features-image">
              <img
                src={IOTFeatureImage1}
                className="animate__animated animate__fadeInUp animate__delay-0.6s"
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="iot-features-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 iot-features-image">
              <img
                src={IOTFeatureImage2}
                className="animate__animated animate__fadeInUp animate__delay-0.6s"
                alt="Feature"
              />
            </div>

            <div className="col-lg-6 iot-features-content">
              <h3>How Can Your City Use IoT Technology?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p>

              <Link to="/about-3" className="btn btn-primary">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
