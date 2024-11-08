import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import ProjectsImg1 from "../../images/projects-img1.jpg"
import ProjectsImg2 from "../../images/projects-img2.jpg"
import ProjectsImg3 from "../../images/projects-img3.jpg"
import ProjectsImg4 from "../../images/projects-img4.jpg"
import ProjectsImg5 from "../../images/projects-img5.jpg"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const Projects = () => {
  return (
    <>
      <div className="ml-projects-area pt-0 ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <h2>Proud Projects That Make Us Stand Out</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="ml-projects-slides"
          >
            <SwiperSlide className="single-ml-projects-box">
              <img src={ProjectsImg1} alt="Projects" />
              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-ml-projects-box">
              <img src={ProjectsImg2} alt="Projects" />
              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-ml-projects-box">
              <img src={ProjectsImg3} alt="Projects" />
              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-ml-projects-box">
              <img src={ProjectsImg4} alt="Projects" />
              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-ml-projects-box">
              <img src={ProjectsImg5} alt="Projects" />
              <div className="plus-icon">
                <Link to="/project-details">
                  <span></span>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
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

export default Projects
