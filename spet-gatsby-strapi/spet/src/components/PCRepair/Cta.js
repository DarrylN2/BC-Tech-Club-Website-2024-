import React from "react"
import { Link } from "gatsby"
import ManAndWomen from "../../images/man-and-women.png"
import Circle from "../../images/circle.png"
import CtaShape from "../../images/cta-shape.png"

const Cta = () => {
  return (
    <>
      <div className="repair-cta-area bg-0f054b">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cta-repair-content">
                <h3>We'll help you get back to work</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cta-repair-img">
                <img src={ManAndWomen} alt="ManAndWomen" />
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
