import React from "react"
import { Link } from "gatsby"

import APAboutImg1 from "../../images/agency-portfolio-about-image/ap-about-img1.jpg"
import APAboutImg2 from "../../images/agency-portfolio-about-image/ap-about-img2.jpg"
import APAboutImg3 from "../../images/agency-portfolio-about-image/ap-about-img3.jpg"

const AboutUsContent = () => {
  return (
    <>
      <div className="agency-portfolio-about-area pt-80 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-text-box">
                <img src={APAboutImg1} alt="About" />
                <h3>About Us</h3>
                <p>
                  Vestibulum ac posuere mi. Nullam euismod dui condimentum metus
                  consequat blandit. Donec leo tortor, commodo eget fermentum
                  id, molestie quis est. Ut lectus metus, condimentum eget
                  facilisis sed, fermentum et tortor.
                </p>

                <Link to="/about-1" className="learn-more-btn">
                  <i data-feather="plus-circle"></i> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-text-box">
                <img src={APAboutImg2} alt="About" />
                <h3>Our Vision</h3>
                <p>
                  Vestibulum ac posuere mi. Nullam euismod dui condimentum metus
                  consequat blandit. Donec leo tortor, commodo eget fermentum
                  id, molestie quis est. Ut lectus metus, condimentum eget
                  facilisis sed, fermentum et tortor.
                </p>

                <Link to="/about-2" className="learn-more-btn">
                  <i data-feather="plus-circle"></i> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-text-box">
                <img src={APAboutImg3} alt="About" />
                <h3>Our Mission</h3>
                <p>
                  Vestibulum ac posuere mi. Nullam euismod dui condimentum metus
                  consequat blandit. Donec leo tortor, commodo eget fermentum
                  id, molestie quis est. Ut lectus metus, condimentum eget
                  facilisis sed, fermentum et tortor.
                </p>

                <Link to="/about-3" className="learn-more-btn">
                  <i data-feather="plus-circle"></i> Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsContent
