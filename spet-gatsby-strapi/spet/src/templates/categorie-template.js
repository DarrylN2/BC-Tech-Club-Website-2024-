import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import * as Icon from "react-feather"

import { graphql } from "gatsby"
import { Link } from "gatsby"

const CategoriePage = ({ data }) => {
  const { text, blogs } = data.categorie

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={text} 
      />

      <div className="ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            {blogs.length > 0 ? (
              blogs.map(blog => (
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
                        <Icon.Calendar />
                        {blog.date}
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <h3>
                        <Link to={`/blogs/${blog.slug}`}>
                        {blog.title}
                        </Link>
                      </h3>

                      <span>
                        By {blog.author}
                      </span>

                      <p>
                        {blog.shortDes}
                      </p>

                      <Link to={`/blogs/${blog.slug}`} className="read-more-btn">
                        Read More <Icon.ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <p className="fs-5 text-center mb-4">
                  Not Available Post! Go to <Link to="/blog-1">Blog</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetCategories($slug: String) {
    categorie: strapiCategorie(slug: { eq: $slug }) {
      text
      blogs {
        id
        title
        image {
          url
          alternativeText
        } 
        slug
        shortDes
        date
        author
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Categories" />

export default CategoriePage
