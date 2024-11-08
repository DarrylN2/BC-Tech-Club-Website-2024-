import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link } from "gatsby"
import BlogSidebar from "../components/Blog/BlogSidebar"

// Blog Images
import BlogImg1 from "../images/blog-image/blog1.jpg"
import BlogImg2 from "../images/blog-image/blog2.jpg"
import BlogImg3 from "../images/blog-image/blog3.jpg"
import BlogImg4 from "../images/blog-image/blog4.jpg"
import BlogImg5 from "../images/blog-image/blog5.jpg"
import BlogImg6 from "../images/blog-image/blog6.jpg"

// Shape Images
import Shape2 from "../images/shape2.svg"
import Shape3 from "../images/shape3.svg"
import Shape4 from "../images/shape4.svg"

const BlogPage6 = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Blog Grid" />

    <div className="blog-area ptb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link to="/blog-details">
                      <img src={BlogImg1} alt="Post" />
                    </Link>
                  </div>

                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <Link to="/author">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                    <h3>
                      <Link to="/blog-details">
                        The security risks of changing package owners
                      </Link>
                    </h3>

                    <Link to="/blog-details" className="read-more-btn">
                      Read More <Icon.PlusCircle />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link to="/blog-details">
                      <img src={BlogImg2} alt="Post" />
                    </Link>
                  </div>

                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <Link to="/author">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                    <h3>
                      <Link to="/blog-details">
                        Tips to Protecting Your Business and Family
                      </Link>
                    </h3>

                    <Link to="/blog-details" className="read-more-btn">
                      Read More <Icon.PlusCircle />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link to="/blog-details">
                      <img src={BlogImg3} alt="Post" />
                    </Link>
                  </div>

                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <Link to="/author">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                    <h3>
                      <Link to="/blog-details">
                        Protect Your Workplace from Cyber Attacks
                      </Link>
                    </h3>

                    <Link to="/blog-details" className="read-more-btn">
                      Read More <Icon.PlusCircle />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link to="/blog-details">
                      <img src={BlogImg4} alt="Post" />
                    </Link>
                  </div>

                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <Link to="/author">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                    <h3>
                      <Link to="/blog-details">
                        The security risks of changing package owners
                      </Link>
                    </h3>

                    <Link to="/blog-details" className="read-more-btn">
                      Read More <Icon.PlusCircle />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link to="/blog-details">
                      <img src={BlogImg5} alt="Post" />
                    </Link>
                  </div>

                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <Link to="/author">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                    <h3>
                      <Link to="/blog-details">
                        Tips to Protecting Your Business and Family
                      </Link>
                    </h3>

                    <Link to="/blog-details" className="read-more-btn">
                      Read More <Icon.PlusCircle />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link to="/blog-details">
                      <img src={BlogImg6} alt="Post" />
                    </Link>
                  </div>

                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <Link to="/author">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                    <h3>
                      <Link to="/blog-details">
                        Protect Your Workplace from Cyber Attacks
                      </Link>
                    </h3>

                    <Link to="/blog-details" className="read-more-btn">
                      Read More <Icon.PlusCircle />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Prev
                        </Link>
                      </li>

                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>

                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>

                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>

                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <BlogSidebar />
          </div>
        </div>
      </div>

      {/* Shape Images */}
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

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage6
