import React from "react"
import { Link } from "gatsby"

// Hosting Images
import HostingShape1 from "../../images/hosting-banner-image/hosting-shape1.png"
import HostingShape2 from "../../images/hosting-banner-image/hosting-shape2.png"
import HostingShape3 from "../../images/hosting-banner-image/hosting-shape3.png"
import HostingShape4 from "../../images/hosting-banner-image/hosting-shape4.png"
import HostingShape5 from "../../images/hosting-banner-image/hosting-shape5.png"
import HostingShape6 from "../../images/hosting-banner-image/hosting-shape6.png"
import HostingShape7 from "../../images/hosting-banner-image/hosting-shape7.png"
import HostingShape8 from "../../images/hosting-banner-image/hosting-shape8.png"
import HostingShape9 from "../../images/hosting-banner-image/hosting-shape9.png"
import HostingStaticMain from "../../images/hosting-banner-image/hosting-static-main.png"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/shape5.png"

const MainBanner = () => {
  return (
    <>
      <div className="hosting-main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="hosting-banner-content">
                    <h1
                      data-aos="fade-down"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                      data-aos-once="false"
                    >
                      The Best Web Hosting
                    </h1>
                    <ul
                      data-aos="fade-down"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                      data-aos-once="false"
                    >
                      <li>FREE Domain Name for 2st Year</li>
                      <li>FREE SSL Certificate Included</li>
                      <li>1-Click Wordpress Install</li>
                      <li>24/7 Support</li>
                    </ul>

                    <p
                      data-aos="fade-down"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      data-aos-once="false"
                    >
                      Starting at <span>$8.99</span> $3.95/month
                    </p>

                    <Link
                      to="/contact"
                      className="btn btn-primary"
                      data-aos="fade-down"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                      data-aos-once="false"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="hosting-banner-image">
                    <img
                      src={HostingShape1}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="Shape"
                    />

                    <img
                      src={HostingShape2}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="Shape"
                    />

                    <img
                      src={HostingShape3}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="Shape"
                    />

                    <img
                      src={HostingShape4}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="Shape"
                    />

                    <img
                      src={HostingShape5}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="Shape"
                    />

                    <img
                      src={HostingShape6}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="Shape"
                    />

                    <img
                      src={HostingShape7}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="Shape"
                    />

                    <img
                      src={HostingShape8}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="Shape"
                    />

                    <img
                      src={HostingShape9}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="Shape"
                    />

                    <img
                      src={HostingStaticMain}
                      className="animate__animated animate__fadeInUp animate__delay-0.7s"
                      alt="HostingStaticMain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape5">
          <img src={Shape5} alt="shape" />
        </div>
        <div className="shape6 rotateme">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default MainBanner
