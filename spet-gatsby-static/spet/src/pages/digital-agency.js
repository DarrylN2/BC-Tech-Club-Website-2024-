import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleFive from "../components/_App/NavbarStyleFive"
import MainBanner from "../components/DigitalAgency/MainBanner"
import WhatWeOffer from "../components/DigitalAgency/WhatWeOffer"
import AboutUsContent from "../components/DigitalAgency/AboutUsContent"
import OurServices from "../components/DigitalAgency/OurServices"
import DigitalAgencyFunFacts from "../components/DigitalAgency/DigitalAgencyFunFacts"
import Projects from "../components/DigitalAgency/Projects"
import PricingStyleThree from "../components/PricingPlans/PricingStyleThree"
import FeedbackStyleThree from "../components/Common/FeedbackStyleThree"
import BlogPostStyleTwo from "../components/Common/BlogPostStyleTwo"
import CTAStyleTwo from "../components/Common/CTAStyleTwo"
import Footer from "../components/_App/Footer"

const DigitalAgencyHomePage = () => (
  <Layout>
    <NavbarStyleFive />
    <MainBanner />
    <WhatWeOffer />
    <AboutUsContent />
    <OurServices />
    <DigitalAgencyFunFacts />
    <Projects />
    <PricingStyleThree />
    <FeedbackStyleThree />
    <BlogPostStyleTwo />
    <CTAStyleTwo />
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Digital Agency" />

export default DigitalAgencyHomePage
