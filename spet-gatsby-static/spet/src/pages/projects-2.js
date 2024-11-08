import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"

import ProjectsImg1 from "../images/projects-img1.jpg"
import ProjectsImg2 from "../images/projects-img2.jpg"
import ProjectsImg3 from "../images/projects-img3.jpg"
import ProjectsImg4 from "../images/projects-img4.jpg"
import ProjectsImg5 from "../images/projects-img5.jpg"
import ProjectsImg6 from "../images/projects-img6.jpg"
import ProjectsImg7 from "../images/projects-img7.jpg"
import ProjectsImg8 from "../images/projects-img8.jpg"

const ProjectsPage2 = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Projects Style Two" />

    <div className="ml-projects-area pt-80 pb-50">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-ml-projects-box">
              <img src={ProjectsImg1} alt="Project" />

              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-ml-projects-box">
              <img src={ProjectsImg2} alt="Project" />

              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-ml-projects-box">
              <img src={ProjectsImg3} alt="Project" />

              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-ml-projects-box">
              <img src={ProjectsImg4} alt="Project" />

              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-ml-projects-box">
              <img src={ProjectsImg5} alt="Project" />

              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-ml-projects-box">
              <img src={ProjectsImg6} alt="Project" />

              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-ml-projects-box">
              <img src={ProjectsImg7} alt="Project" />

              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-ml-projects-box">
              <img src={ProjectsImg8} alt="Project" />

              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Projects" />

export default ProjectsPage2
