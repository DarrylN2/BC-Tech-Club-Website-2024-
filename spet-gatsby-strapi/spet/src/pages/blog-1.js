import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link, graphql, useStaticQuery } from "gatsby"

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

const BlogPage = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      {blogs && (
        <div className="blog-area ptb-80">
          <div className="container">
            <div className="row justify-content-center">
              {blogs.map(blog => (
                <div className="col-lg-4 col-md-6" key={blog.id}>
                  <div className="single-blog-post">
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
          </div>
        </div>
      )}

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default BlogPage
