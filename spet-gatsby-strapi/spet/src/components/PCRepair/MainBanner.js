import React from "react"
import { Link } from "gatsby"

import RepairBannerImg from "../../images/repair-banner-image/repair-banner-img.png"
import RepairShape1 from "../../images/repair-banner-image/repair-shape1.png"
import RepairShape2 from "../../images/repair-banner-image/repair-shape2.png"
import RepairShapeCrcle from "../../images/repair-banner-image/repair-shape-circle.png"

const MainBanner = () => {
  return (
    <>
      <div className="repair-main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="repair-banner-content">
                <h1>Your Local Computer Repair Experts!</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>

                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="repair-banner-image">
                <img src={RepairBannerImg} alt="RepairBannerImg" />

                <img
                  src={RepairShape1}
                  className="animate__animated animate__zoomIn animate__delay-0.6s"
                  alt="RepairShape1"
                />

                <img
                  src={RepairShape2}
                  className="animate__animated animate__fadeInLeft animate__delay-0.6s"
                  alt="RepairShape2"
                />

                <img
                  src={RepairShapeCrcle}
                  className="rotateme"
                  alt="RepairShapeCrcle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
