import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import BlogImg9 from "../../images/blog-image/blog9.jpg"
import BlogImg10 from "../../images/blog-image/blog10.jpg"
import BlogImg11 from "../../images/blog-image/blog11.jpg"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const BlogCard = () => {
  return (
    <>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Story</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-box">
                <div className="entry-thumbnail">
                  <Link to="/blog-details">
                    <img src={BlogImg9} alt="Blog" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link to="/author">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link to="/blog-details">
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link to="/blog-details" className="learn-more-btn">
                    Read Story <Icon.Plus />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-box">
                <div className="entry-thumbnail">
                  <Link to="/blog-details">
                    <img src={BlogImg10} alt="Blog" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link to="/author">Admin</Link>
                      </li>
                      <li>August 18, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link to="/blog-details">
                      I Used The Web For A Day On A 50 MB Budget
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link to="/blog-details" className="learn-more-btn">
                    Read Story <Icon.Plus />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-box">
                <div className="entry-thumbnail">
                  <Link to="/blog-details">
                    <img src={BlogImg11} alt="Blog" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link to="/author">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link to="/blog-details">
                      Here are the 5 most telling signs of micromanagement
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link to="/blog-details" className="learn-more-btn">
                    Read Story <Icon.Plus />
                  </Link>
                </div>
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
    </>
  )
}

export default BlogCard
