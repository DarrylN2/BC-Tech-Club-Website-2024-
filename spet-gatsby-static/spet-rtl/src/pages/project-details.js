import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"

import WorksImage1 from "../images/works-image/works-image1.jpg"
import WorksImage2 from "../images/works-image/works-image2.jpg"
import WorksImage3 from "../images/works-image/works-image3.jpg"
import WorksImage4 from "../images/works-image/works-image4.jpg"

const ProjectDetailsPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Projects Details" />

    <div className="project-details-area ptb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="project-details-image">
              <img src={WorksImage1} alt="work" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="project-details-image">
              <img src={WorksImage2} alt="work" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="project-details-image">
              <img src={WorksImage3} alt="work" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="project-details-image">
              <img src={WorksImage4} alt="work" />
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="project-details-desc">
              <h3>Network Marketing</h3>

              <p>
                Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed
                diam no nu m nibhie eui smod. Facil isis atve eros et accumsan
                etiu sto odi dignis sim qui blandit praesen lup ta de er. At
                molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei
                latine prop riae na, mea cu purto debitis. Primis nost rud no
                eos, no impedit dissenti as mea, ea vide labor amus neglegentur
                vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad
                po exerci nusquam eos te. Cu altera expet enda qui, munere
                oblique theo phrastu ea vix. Ne nec modus civibus modera tius,
                sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu
                altera expetenda qui, munere oblique theophr astus ea vix modus
                civiu mod eratius.
              </p>

              <p>
                Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed
                diam no nu m nibhie eui smod. Facil isis atve eros et accumsan
                etiu sto odi dignis sim qui blandit praesen lup ta de er. At
                molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei
                latine prop riae na, mea cu purto debitis. Primis nost rud no
                eos, no impedit dissenti as mea, ea vide labor amus neglegentur
                vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad
                po exerci nusquam eos te. Cu altera expet enda qui, munere
                oblique theo phrastu ea vix. Ne nec modus civibus modera tius,
                sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu
                altera expetenda qui, munere oblique theophr astus ea vix modus
                civiu mod eratius.
              </p>

              <div className="project-details-information">
                <div className="single-info-box">
                  <h4>Happy Client</h4>
                  <p>John Doe</p>
                </div>

                <div className="single-info-box">
                  <h4>Category</h4>
                  <p>Portfolio, Personal</p>
                </div>

                <div className="single-info-box">
                  <h4>Date</h4>
                  <p>February 28, 2023</p>
                </div>

                <div className="single-info-box">
                  <h4>Share</h4>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Instagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-info-box">
                  <a
                    href="https://1.envato.market/GjgEar"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Project Details" />

export default ProjectDetailsPage
