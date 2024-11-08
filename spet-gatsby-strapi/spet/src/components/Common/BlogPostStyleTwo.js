import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as Icon from "react-feather"

// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

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

const BlogPostStyleTwo = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">News</span>
            <h2>The News from Our Blog</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {blogs && (
            <div className="row justify-content-center">
              {blogs.slice(0, 3).map(blog => (
                <div className="col-lg-4 col-md-6" key={blog.id}>
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
          )}
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
        <div className="shape6 rotateme">
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

export default BlogPostStyleTwo
