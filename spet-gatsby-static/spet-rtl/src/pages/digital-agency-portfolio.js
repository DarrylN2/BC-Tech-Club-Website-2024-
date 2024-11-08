import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleSix from "../components/_App/NavbarStyleSix"
import MainBanner from "../components/DigitalAgencyPortfolio/MainBanner"
import Projects from "../components/DigitalAgencyPortfolio/Projects"
import AboutUsContent from "../components/DigitalAgencyPortfolio/AboutUsContent"
import FeedbackStyleFive from "../components/Common/FeedbackStyleFive"
import Partner from "../components/DigitalAgencyPortfolio/Partner"
import BlogPostStyleThree from "../components/Common/BlogPostStyleThree"
import CreativeArea from "../components/DigitalAgencyPortfolio/CreativeArea"
import Footer from "../components/_App/Footer"

const DigitalAgencyPortfolioHomePage = () => (
  <Layout>
    <NavbarStyleSix />
    <MainBanner />
    <Projects />
    <AboutUsContent />
    <FeedbackStyleFive />
    <Partner />
    <BlogPostStyleThree />
    <CreativeArea />
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Digital Agency Portfolio" />

export default DigitalAgencyPortfolioHomePage
