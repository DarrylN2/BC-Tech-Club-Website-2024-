import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"
import * as Icon from "react-feather"

// Service Images
import AgencyServicesImg1 from "../images/agency-image/agency-services-img1.jpg"
import AgencyServicesImg2 from "../images/agency-image/agency-services-img2.jpg"
import AgencyServicesImg3 from "../images/agency-image/agency-services-img3.jpg"
import AgencyServicesImg4 from "../images/agency-image/agency-services-img4.jpg"
import AgencyServicesImg5 from "../images/agency-image/agency-services-img5.jpg"
import AgencyServicesImg6 from "../images/agency-image/agency-services-img6.jpg"

// Shape Images
import Shape2 from "../images/shape2.svg"
import Shape3 from "../images/shape3.svg"
import Shape4 from "../images/shape4.svg"

const ServicesPage5 = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Services Style Five" />

    <div className="agency-services-area ptb-80 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img src={AgencyServicesImg1} alt="Service" />

              <div className="content">
                <h3>
                  <Link to="/service-details">IT Professionals</Link>
                </h3>

                <Link to="/service-details" className="read-more-btn">
                  Read More <Icon.PlusCircle />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img src={AgencyServicesImg2} alt="Service" />

              <div className="content">
                <h3>
                  <Link to="/service-details">Software Engineers</Link>
                </h3>

                <Link to="/service-details" className="read-more-btn">
                  Read More <Icon.PlusCircle />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img src={AgencyServicesImg3} alt="Service" />

              <div className="content">
                <h3>
                  <Link to="/service-details">Web Development</Link>
                </h3>

                <Link to="/service-details" className="read-more-btn">
                  Read More <Icon.PlusCircle />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img src={AgencyServicesImg4} alt="Service" />

              <div className="content">
                <h3>
                  <Link to="/service-details">SEO & Content</Link>
                </h3>

                <Link to="/service-details" className="read-more-btn">
                  Read More <Icon.PlusCircle />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img src={AgencyServicesImg5} alt="Service" />

              <div className="content">
                <h3>
                  <Link to="/service-details">Digital Marketing</Link>
                </h3>

                <Link to="/service-details" className="read-more-btn">
                  Read More <Icon.PlusCircle />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img src={AgencyServicesImg6} alt="Service" />

              <div className="content">
                <h3>
                  <Link to="/service-details">Data Analysts</Link>
                </h3>

                <Link to="/service-details" className="read-more-btn">
                  Read More <Icon.PlusCircle />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
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

export default ServicesPage5
