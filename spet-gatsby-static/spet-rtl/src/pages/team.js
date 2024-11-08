import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"

import TeamImg1 from "../images/team-image/team1.jpg"
import TeamImg2 from "../images/team-image/team2.jpg"
import TeamImg3 from "../images/team-image/team3.jpg"
import TeamImg4 from "../images/team-image/team4.jpg"
import TeamImg5 from "../images/team-image/team5.jpg"

const TeamPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Team" />

    <div className="team-area pt-80 pb-50 bg-f9f6f6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg1} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Josh Buttler</h3>
                  <span>CEO & Founder</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg2} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Alex Maxwel</h3>
                  <span>Marketing Manager</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg3} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Janny Cotller</h3>
                  <span>Web Developer</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg4} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Jason Statham</h3>
                  <span>UX/UI Designer</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg5} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Corey Anderson</h3>
                  <span>Project Manager</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg1} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Josh Buttler</h3>
                  <span>CEO & Founder</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg2} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Alex Maxwel</h3>
                  <span>Marketing Manager</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg3} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Janny Cotller</h3>
                  <span>Web Developer</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-image">
                <img src={TeamImg4} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Jason Statham</h3>
                  <span>UX/UI Designer</span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
