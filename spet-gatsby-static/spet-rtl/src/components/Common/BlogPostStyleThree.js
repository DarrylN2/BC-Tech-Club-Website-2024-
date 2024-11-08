import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import BlogImg1 from "../../images/blog-image/blog1.jpg"
import BlogImg2 from "../../images/blog-image/blog2.jpg"
import BlogImg3 from "../../images/blog-image/blog3.jpg"

const BlogPostStyleThree = () => {
  return (
    <>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="section-title text-left">
            <h2>
              Our Recent <span>News</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

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
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="blog-slides"
          >
            <SwiperSlide className="single-blog-item">
              <div className="post-image">
                <Link to="/blog-details">
                  <img src={BlogImg1} alt="Blog Post" />
                </Link>
              </div>

              <div className="post-content">
                <ul className="post-meta">
                  <li>
                    By <Link to="/author">Admin</Link>
                  </li>
                  <li>20 February 2023</li>
                </ul>
                <h3>
                  <Link to="/blog-details">
                    The security risks of changing package owners
                  </Link>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-blog-item">
              <div className="post-image">
                <Link to="/blog-details">
                  <img src={BlogImg2} alt="Blog Post" />
                </Link>
              </div>

              <div className="post-content">
                <ul className="post-meta">
                  <li>
                    By <Link to="/author">Admin</Link>
                  </li>
                  <li>21 February 2023</li>
                </ul>
                <h3>
                  <Link to="/blog-details">
                    Tips to Protecting Your Business and Family
                  </Link>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-blog-item">
              <div className="post-image">
                <Link to="/blog-details">
                  <img src={BlogImg3} alt="Blog Post" />
                </Link>
              </div>

              <div className="post-content">
                <ul className="post-meta">
                  <li>
                    By <Link to="/author">Admin</Link>
                  </li>
                  <li>22 February 2023</li>
                </ul>
                <h3>
                  <Link to="/blog-details">
                    Protect Your Workplace from Cyber Attacks
                  </Link>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-blog-item">
              <div className="post-image">
                <Link to="/blog-details">
                  <img src={BlogImg3} alt="Blog Post" />
                </Link>
              </div>

              <div className="post-content">
                <ul className="post-meta">
                  <li>
                    By <Link to="/author">Admin</Link>
                  </li>
                  <li>22 February 2023</li>
                </ul>
                <h3>
                  <Link to="/blog-details">
                    Four New WordPress.com Color Schemes
                  </Link>
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default BlogPostStyleThree
