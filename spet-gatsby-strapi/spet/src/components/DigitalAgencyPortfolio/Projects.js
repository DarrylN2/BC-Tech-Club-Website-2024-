import React, { Component } from "react";
import { Link } from "gatsby";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import projectImg1 from "../../images/agency-portfolio-projects/ap-project1.jpg";   
import projectImg2 from "../../images/agency-portfolio-projects/ap-project2.jpg";   
import projectImg3 from "../../images/agency-portfolio-projects/ap-project3.jpg";   
import projectImg4 from "../../images/agency-portfolio-projects/ap-project4.jpg";   
import projectImg5 from "../../images/agency-portfolio-projects/ap-project6.jpg";   
import projectImg6 from "../../images/agency-portfolio-projects/ap-project5.jpg";   
import projectImg7 from "../../images/agency-portfolio-projects/ap-project9.jpg";   
import projectImg8 from "../../images/agency-portfolio-projects/ap-project8.jpg";   
import projectImg9 from "../../images/agency-portfolio-projects/ap-project7.jpg";   
import projectImg10 from "../../images/agency-portfolio-projects/ap-project11.jpg";   
import projectImg11 from "../../images/agency-portfolio-projects/ap-project10.jpg";   

export default class Projects extends Component {
  render() {
    return (
      <>
        <div className="our-latest-projects ptb-80">
          <div className="container">
            <div className="section-title text-left">
              <h2>
                Our Latest <span>Projects</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 
                300: 1, 
                576: 2, 
                992: 3 
              }}
            >
              <Masonry gutter="30px">
                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg1}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>Business</span>
                    <h3>Business Stratagy</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg2}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>Development</span>
                    <h3>Web Development</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg3}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>Marketing</span>
                    <h3>Digital Marketing</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg4}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>App</span>
                    <h3>Mobile App Development</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg5}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>Marketing</span>
                    <h3>Email Marketing</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg6}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>Development</span>
                    <h3>E-commerce Development</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg7}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>App</span>
                    <h3>React App Development</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg8}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>Writing</span>
                    <h3>Content Writing</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg9}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>IT</span>
                    <h3>IT Consultancy</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg10}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>IT</span>
                    <h3>IT Solutions</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>

                <div className="single-latest-projects mb-0">
                  <img
                    src={projectImg11}
                    alt="Partner"
                  />

                  <div className="content">
                    <span>Marketing</span>
                    <h3>Marketing & Reporting</h3>
                  </div>

                  <Link to="/project-details" className="link-btn"></Link>
                </div>
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </>
    );
  }
}
