import React from "react"
import { Link } from "gatsby"

// ML Banner Images
import One from "../../images/ml-banner-image/one.png"
import Two from "../../images/ml-banner-image/two.png"
import Three from "../../images/ml-banner-image/three.png"
import Four from "../../images/ml-banner-image/four.png"
import Five from "../../images/ml-banner-image/five.png"
import Six from "../../images/ml-banner-image/six.png"
import Seven from "../../images/ml-banner-image/seven.png"
import Eight from "../../images/ml-banner-image/eight.png"
import Nine from "../../images/ml-banner-image/nine.png"
import Ten from "../../images/ml-banner-image/ten.png"
import Eleven from "../../images/ml-banner-image/eleven.png"
import MLMainPic from "../../images/ml-banner-image/ml-main-pic.png"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const MainBanner = () => {
  return (
    <>
      <div className="ml-main-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="ml-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="false"
                >
                  World’s Leading AI & Machine Learning Company
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="false"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>

                <Link
                  to="/contact"
                  className="btn btn-secondary"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-once="false"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-banner-image">
                <img
                  src={One}
                  className="animate__animated animate__fadeIn animate__delay-2s"
                  alt="Shape"
                />

                <img
                  src={Two}
                  className="animate__animated animate__fadeInUp animate__delay-1s"
                  alt="Shape"
                />

                <img
                  src={Three}
                  className="animate__animated animate__fadeInUp animate__delay-0.5s"
                  alt="Shape"
                />

                <img
                  src={Four}
                  className="animate__animated animate__fadeInUp animate__delay-2s"
                  alt="Shape"
                />

                <img
                  src={Five}
                  className="animate__animated animate__fadeInDown animate__delay-2.5s"
                  alt="Shape"
                />

                <img
                  src={Six}
                  className="animate__animated animate__fadeInDown animate__delay-1.9s"
                  alt="Shape"
                />

                <img
                  src={Seven}
                  className="animate__animated animate__fadeInDown animate__delay-2.1s"
                  alt="Shape"
                />

                <img
                  src={Eight}
                  className="animate__animated animate__fadeInDown animate__delay-1.9s"
                  alt="Shape"
                />

                <img
                  src={Nine}
                  className="animate__animated animate__fadeInDown animate__delay-1.7s"
                  alt="Shape"
                />

                <img
                  src={Ten}
                  className="animate__animated animate__fadeInDown animate__delay-1.5s"
                  alt="Shape"
                />

                <img
                  src={Eleven}
                  className="animate__animated animate__fadeInUp animate__delay-0.4s"
                  alt="Shape"
                />

                <img
                  src={MLMainPic}
                  className="animate__animated animate__fadeInUp animate__delay-0.5s"
                  alt="MLMainPic"
                />
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
