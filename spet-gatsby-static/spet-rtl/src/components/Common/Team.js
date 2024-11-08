import React from "react"
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import Team1 from "../../images/team-image/team1.jpg"
import Team2 from "../../images/team-image/team2.jpg"
import Team3 from "../../images/team-image/team3.jpg"
import Team4 from "../../images/team-image/team4.jpg"
import Team5 from "../../images/team-image/team5.jpg"

const Team = () => {
  return (
    <>
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Awesome Team</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="team-slider"
        >
          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team1} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team2} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team3} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team4} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team5} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team1} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team2} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team3} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team4} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team5} alt="Team" />
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
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Team
