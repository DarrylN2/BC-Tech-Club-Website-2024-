import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const ProjectDetailsPage = ({ data }) => {
  const {
    title,
    image,
    detailsContent,
    clientName,
    category,
    technology,
    date,
    livePreviewLink,
    creator
  } = data.project

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle={title} />

      <div className="project-details-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="mb-4" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img src={image.url} alt={image.alternativeText}  style={{ width: "30%", height: "auto", marginBottom:"10px" }}/>
              </div>

              <div className="project-details-desc"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
              >
                <h3>{title}</h3>
                <ReactMarkdown className="markdown-content">
                  {detailsContent.data.detailsContent}
                </ReactMarkdown>

                <div className="project-details-information" 
                // style={{
                //   display: "flex",
                //   flexWrap: "wrap",
                //   alignItems: "center", // Keeps the button aligned with the info boxes
                //   gap: "20px", // Adds space between each info box
                // }}
                >
                  {/* <div className="single-info-box">
                    <h4>Client</h4>
                    <p>{clientName}</p>
                  </div> */}
                  {creator && (
                    <div className="single-info-box">
                      <h4>Created By</h4>
                      <p>{creator}</p>
                    </div>
                  )}

                  {clientName && (
                    <div className="single-info-box">
                      <h4>Client</h4>
                      <p>{clientName}</p>
                    </div>
                  )}


                  {category && (
                    <div className="single-info-box">
                      <h4>Category</h4>
                      <p>{category}</p>
                    </div>
                  )}

                  {technology && (
                    <div className="single-info-box">
                      <h4>Technology</h4>
                      <p>{technology}</p>
                    </div>
                  )}

                  {date && (
                    <div className="single-info-box">
                      <h4>Date</h4>
                      <p>{date}</p>
                    </div>
                  )}

                  {livePreviewLink && (
                    <div className="single-info-box live-preview" >
                      <a
                        href={livePreviewLink}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Preview
                      </a>
                    </div>
                  )}
                  {/* <div className="single-info-box">
                    <a
                      href={livePreviewLink}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Preview
                    </a>
                  </div> */}
                </div>
              </div>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <a
                  href={livePreviewLink}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProject(slug: { eq: $slug }) {
      title
      image {
        url
        alternativeText
      }
      creator
      clientName
      category
      technology
      date(formatString: "MMMM Do, YYYY")
      detailsContent {
        data {
          detailsContent
        }
      }
      livePreviewLink
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Project Details" />

export default ProjectDetailsPage
