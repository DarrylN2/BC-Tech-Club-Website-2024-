import React from "react"
import { Link } from "gatsby"

import CtaShape2 from "../../images/cta-shape2.png"
import Circle from "../../images/circle.png"
import CtaShape from "../../images/cta-shape.png"

const Cta = () => {
  return (
    <>
      <div className="iot-cta-area bg-0f054b">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cta-iot-img">
                <img
                  src={CtaShape2}
                  className="animate__animated animate__fadeInUp animate__delay-0.6s"
                  alt="CtaShape"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cta-iot-content">
                <h3>Connect and Manage your IoT at Scale</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link to="/contact" className="btn btn-primary">
                  Get Started!
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-box">
          <img src={Circle} alt="Circle" />
        </div>
        <div className="cta-shape">
          <img src={CtaShape} alt="CtaShape" />
        </div>
      </div>
    </>
  )
}

export default Cta
