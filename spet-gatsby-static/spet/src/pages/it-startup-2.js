import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/ITStartupTwo/MainBanner"
import Features from "../components/ITStartupTwo/Features"
import ServicesArea from "../components/ITStartupTwo/ServicesArea"
import OurServices from "../components/ITStartupTwo/OurServices"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import PricingStyleOne from "../components/PricingPlans/PricingStyleOne"
import Feedback from "../components/Common/Feedback"
import Partner from "../components/Common/Partner"
import BlogPost from "../components/Common/BlogPost"
import Footer from "../components/_App/Footer"

const ItStartupHomePage2 = () => (
  <Layout>
    <Navbar />
    <MainBanner />
    <Features />
    <ServicesArea />
    <OurServices />
    <Team />
    <FunFactsArea />
    <PricingStyleOne />
    <Feedback />
    <Partner />
    <BlogPost />
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="IT Startup 2" />

export default ItStartupHomePage2
