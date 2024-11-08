import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const FeatureDetailsPage = ({ data }) => {
  const { title, contentDetails } = data.feature

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle={title} />

      <div className="ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="features-details">
                <ReactMarkdown>
                  {contentDetails.data.contentDetails}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleFeature($slug: String) {
    feature: strapiFeature(slug: { eq: $slug }) {
      title
      contentDetails {
        data {
          contentDetails
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Feature Details" />

export default FeatureDetailsPage
