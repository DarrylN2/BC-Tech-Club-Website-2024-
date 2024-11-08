import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as Icon from "react-feather"

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

const BlogPost = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
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
                  <div
                    className="single-blog-post"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1200"
                    data-aos-once="false"
                  >
                    <div className="blog-image">
                      <Link to={`/blogs/${blog.slug}`}>
                        <img
                          src={blog.image.url}
                          alt={blog.image.alternativeText}
                        />
                      </Link>

                      <div className="date">
                        <Icon.Calendar /> {blog.date}
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <h3>
                        <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h3>

                      <span>By {blog.author}</span>

                      <p>{blog.shortDes}</p>

                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="read-more-btn"
                      >
                        Read More <Icon.ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BlogPost
