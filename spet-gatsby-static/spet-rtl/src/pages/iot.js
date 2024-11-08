import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/IOT/MainBanner"
import PartnerStyleTwo from "../components/Common/PartnerStyleTwo"
import OurServices from "../components/IOT/OurServices"
import Cta from "../components/IOT/Cta"
import FunFactsArea from "../components/Common/FunFactsArea"
import Features from "../components/IOT/Features"
import TeamStyleTwo from "../components/Common/TeamStyleTwo"
import Feedback from "../components/Common/Feedback"
import WhyWeAreBest from "../components/IOT/WhyWeAreBest"
import BlogPost from "../components/Common/BlogPost"
import Footer from "../components/_App/Footer"

const IotHomePage = () => (
  <Layout>
    <Navbar />
    <MainBanner />
    <PartnerStyleTwo />
    <OurServices />
    <Cta />
    <FunFactsArea />
    <Features />
    <TeamStyleTwo />
    <Feedback />
    <WhyWeAreBest />
    <BlogPost />
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="IOT" />

export default IotHomePage
