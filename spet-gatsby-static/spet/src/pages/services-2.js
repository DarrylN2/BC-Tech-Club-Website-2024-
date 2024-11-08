import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"

// Service Images
import ServiceImage1 from "../images/services-image/service-image1.png"
import ServiceImage2 from "../images/services-image/service-image2.png"
import ServiceImage3 from "../images/services-image/service-image3.png"
import ServiceImage4 from "../images/services-image/service-image4.png"
import ServiceImage5 from "../images/services-image/service-image5.png"
import ServiceImage6 from "../images/services-image/service-image6.png"

// Shape Images
import Shape1 from "../images/shape1.png"
import Shape2 from "../images/shape2.svg"
import Shape3 from "../images/shape3.svg"
import Shape4 from "../images/shape4.svg"

const ServicesPage2 = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Services Style Two" />

    <div className="ml-services-area ptb-80">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Our Solutions</span>
          <h2>Our Services</h2>
          <div className="bar"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage1} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details">IT Professionals</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage2} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details">Software Engineers</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage3} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details">Health & Manufacturing</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage4} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details">Security & Surveillance</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage5} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details">Automatic Optimization</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage6} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details">Data Analysts</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna aliqua.
              </p>
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

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Services" />

export default ServicesPage2
