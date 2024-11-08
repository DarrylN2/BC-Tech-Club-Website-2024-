import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link } from "gatsby"

// Works Images
import WorksImage1 from "../images/works-image/works-image1.jpg"
import WorksImage2 from "../images/works-image/works-image2.jpg"
import WorksImage3 from "../images/works-image/works-image3.jpg"
import WorksImage4 from "../images/works-image/works-image4.jpg"
import WorksImage5 from "../images/works-image/works-image5.jpg"
import WorksImage6 from "../images/works-image/works-image6.jpg"
import WorksImage7 from "../images/works-image/works-image7.jpg"
import WorksImage8 from "../images/works-image/works-image8.jpg"
import WorksImage9 from "../images/works-image/works-image9.jpg"

// Shape Images
import Shape2 from "../images/shape2.svg"
import Shape4 from "../images/shape4.svg"

const ProjectsPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Projects Style One" />

    <div className="works-area pt-80 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-works">
              <img src={WorksImage1} alt="Work" />

              <Link to="/project-details" className="icon">
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link to="/project-details">Incredible infrastructure</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-works">
              <img src={WorksImage2} alt="Work" />

              <Link to="/project-details" className="icon">
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link to="/project-details">UI/UX Design</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-works">
              <img src={WorksImage3} alt="Work" />

              <Link to="/project-details" className="icon">
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link to="/project-details">Apps Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-works">
              <img src={WorksImage4} alt="Work" />

              <Link to="/project-details" className="icon">
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link to="/project-details">Mock-up Design</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-works">
              <img src={WorksImage5} alt="Work" />

              <Link to="/project-details" className="icon">
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link to="/project-details">E-commerce</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-works">
              <img src={WorksImage6} alt="Work" />

              <Link to="/project-details" className="icon">
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link to="/project-details">Web Design</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-works">
              <img src={WorksImage7} alt="Work" />

              <Link to="/project-details" className="icon">
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link to="/project-details">React App Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-works">
              <img src={WorksImage8} alt="Work" />

              <Link to="/project-details" className="icon">
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link to="/project-details">Digital Marketing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-works">
              <img src={WorksImage9} alt="Work" />

              <Link to="/project-details" className="icon">
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link to="/project-details">Email Marketing</Link>
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

      {/* Shape Images */}
      <div className="shape8 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
      <div className="shape7">
        <img src={Shape4} alt="shape" />
      </div>
      <div className="shape4">
        <img src={Shape4} alt="shape" />
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Projects" />

export default ProjectsPage
