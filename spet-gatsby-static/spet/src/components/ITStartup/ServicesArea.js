import React from "react"
import * as Icon from "react-feather"

// Cloud Hosting Services Images
import CercleShape from "../../images/services-right-image/cercle-shape.png"
import ServiceRightMainPic from "../../images/services-right-image/service-right-main-pic.png"

// Design & Development Images
import ServiceLeftMainPic from "../../images/services-left-image/service-left-main-pic.png"

const ServicesArea = () => {
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-12 services-content"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="section-title">
                <h2>Cloud Hosting Services</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Database /> Cloud Databases
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Website Hosting
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.File /> File Storage
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.TrendingUp /> Forex Trading
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Folder /> File Backups
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Monitor /> Remote Desktop
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Mail /> Email Servers
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Cloud /> Hybrid Cloud
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="services-right-image">
                <img
                  src={CercleShape}
                  className="bg-image rotateme"
                  alt="shape"
                />

                <img src={ServiceRightMainPic} alt="main-pic" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="services-left-image">
                <img
                  src={CercleShape}
                  className="bg-image rotateme"
                  alt="shape"
                />

                <img src={ServiceLeftMainPic} alt="main-pic" />
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 services-content"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="section-title">
                <h2>Design & Development</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Layout /> Responsive Design
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Code /> React Web Development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Smartphone /> Android Apps Development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Code /> Laravel Web Development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Smartphone /> iOS Apps Development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Percent /> UX/UI Design
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.ShoppingCart /> E-commerce Development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.CheckCircle /> Print Ready Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesArea
