import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link, graphql, useStaticQuery } from "gatsby"
import BlogSidebar from "../components/Blog/BlogSidebar"

// Shape Images
import Shape2 from "../images/shape2.svg"
import Shape3 from "../images/shape3.svg"
import Shape4 from "../images/shape4.svg"

const query = graphql`
  {
    allStrapiBlog(sort: { strapi_id: DESC }) {
      nodes {
        id
        image {
          url
          alternativeText
        }
        title
        slug
        shortDes
        date(formatString: "MMMM Do, YYYY")
        author
        blogDetails {
          data {
            blogDetails
          }
        }
        category {
          id
          text
          slug
        }
        tags {
          id
          text
          slug
        }
      }
    }
  }
`

const BlogPage6 = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row">
            {blogs && (
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  {blogs.map(blog => (
                    <div className="col-lg-6 col-md-6" key={blog.id}>
                      <div className="single-blog-post-item">
                        <div className="post-image">
                          <Link to={`/blogs/${blog.slug}`}>
                            <img
                              src={blog.image.url}
                              alt={blog.image.alternativeText}
                            />
                          </Link>
                        </div>

                        <div className="post-content">
                          <ul className="post-meta">
                            <li>{blog.author}</li>
                            <li>{blog.date}</li>
                          </ul>
                          <h3>
                            <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                          </h3>

                          <Link
                            to={`/blogs/${blog.slug}`}
                            className="read-more-btn"
                          >
                            Read More <Icon.PlusCircle />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
}

export const Head = () => <Seo title="Blog" />

export default BlogPage6
