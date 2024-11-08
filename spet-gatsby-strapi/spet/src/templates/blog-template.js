import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import BlogSidebar from "../components/Blog/BlogSidebar"
import Footer from "../components/_App/Footer"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import ClientImg1 from "../images/client-image/client1.jpg"
import ClientImg2 from "../images/client-image/client2.jpg"
import ClientImg3 from "../images/client-image/client3.jpg"
import ClientImg4 from "../images/client-image/client4.jpg"
import ClientImg5 from "../images/client-image/client5.jpg"

const BlogDetailsPage = ({ data }) => {
  const {
    title,
    image,
    date,
    author,
    blogDetails,
    tags,
  } = data.blog

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle={title} />

      <div className="blog-details-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={image.url} alt={image.alternativeText} />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Icon.Clock /> {date}
                      </li>
                      <li>
                        <Icon.User /> {author}
                      </li>
                    </ul>
                  </div>

                  <ReactMarkdown>{blogDetails.data.blogDetails}</ReactMarkdown>
                </div>

                {tags && (
                  <div className="article-footer">
                    <div className="article-tags">
                      {tags.map(tag => (
                        <Link to={`/tags/${tag.slug}`} key={tag.id}>
                          {tag.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Comments */}
                <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src={ClientImg1}
                              className="avatar"
                              alt="Post"
                            />
                            <b className="fn">John Jones</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            April 24, 2023 at 10:59 am
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className="reply">
                          <Link to="#comment" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </article>

                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src={ClientImg2}
                                  className="avatar"
                                  alt="Post"
                                />
                                <b className="fn">Steven Smith</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                April 24, 2023 at 10:59 am
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className="reply">
                              <Link
                                to="#comment"
                                className="comment-reply-link"
                              >
                                Reply
                              </Link>
                            </div>
                          </article>
                        </li>

                        <ol className="children">
                          <li className="comment">
                            <article className="comment-body">
                              <footer className="comment-meta">
                                <div className="comment-author vcard">
                                  <img
                                    src={ClientImg3}
                                    className="avatar"
                                    alt="Post"
                                  />
                                  <b className="fn">Sarah Taylor</b>
                                  <span className="says">says:</span>
                                </div>

                                <div className="comment-metadata">
                                  April 24, 2023 at 10:59 am
                                </div>
                              </footer>

                              <div className="comment-content">
                                <p>
                                  Lorem Ipsum has been the industry’s standard
                                  dummy text ever since the 1500s, when an
                                  unknown printer took a galley of type and
                                  scrambled it to make a type specimen.
                                </p>
                              </div>

                              <div className="reply">
                                <Link
                                  to="#comment"
                                  className="comment-reply-link"
                                >
                                  Reply
                                </Link>
                              </div>
                            </article>
                          </li>
                        </ol>
                      </ol>
                    </li>

                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src={ClientImg4}
                              className="avatar"
                              alt="Post"
                            />
                            <b className="fn">John Doe</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            April 24, 2023 at 10:59 am
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className="reply">
                          <Link to="#comment" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </article>

                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src={ClientImg5}
                                  className="avatar"
                                  alt="Post"
                                />
                                <b className="fn">James Anderson</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                April 24, 2023 at 10:59 am
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className="reply">
                              <Link
                                to="#comment"
                                className="comment-reply-link"
                              >
                                Reply
                              </Link>
                            </div>
                          </article>
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div id="comment" className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>

                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>

                      <p className="comment-form-comment">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols="45"
                          rows="5"
                          maxLength="65525"
                          required="required"
                        ></textarea>
                      </p>

                      <p className="comment-form-author">
                        <label htmlFor="password">
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          name="author"
                          required="required"
                        />
                      </p>

                      <p className="comment-form-email">
                        <label htmlFor="email">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required="required"
                        />
                      </p>

                      <p className="comment-form-url">
                        <label htmlFor="website">Website</label>
                        <input type="url" id="url" name="url" />
                      </p>

                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          value="yes"
                          name="comment-cookies-consent"
                          id="comment-cookies-consent"
                        />
                        <label htmlFor="commentCookiesConsent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>

                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              {/* BlogSidebar */}
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlog(slug: { eq: $slug }) {
      title
      image {
        url
        alternativeText
      }
      title
      date(formatString: "MMMM Do, YYYY")
      author
      blogDetails {
        data {
          blogDetails
        }
      }
      tags {
        id
        text
        slug
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog Details" />

export default BlogDetailsPage
