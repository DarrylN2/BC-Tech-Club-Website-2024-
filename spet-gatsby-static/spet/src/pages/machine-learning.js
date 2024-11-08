import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/MachineLearning/MainBanner"
import Partner from "../components/MachineLearning/Partner"
import WhatWeOffer from "../components/MachineLearning/WhatWeOffer"
import AboutUsContent from "../components/MachineLearning/AboutUsContent"
import OurServices from "../components/MachineLearning/OurServices"
import FunFactsArea from "../components/Common/FunFactsArea"
import Projects from "../components/MachineLearning/Projects"
import PricingStyleFour from "../components/PricingPlans/PricingStyleFour"
import FeedbackStyleFour from "../components/Common/FeedbackStyleFour"
import BlogCard from "../components/MachineLearning/BlogCard"
import Newsletter from "../components/Common/Newsletter"
import Footer from "../components/_App/Footer"

const MachineLearningHomePage = () => (
  <Layout>
    <Navbar />
    <MainBanner />
    <Partner />
    <WhatWeOffer />
    <AboutUsContent />
    <OurServices />
    <FunFactsArea />
    <Projects />
    <PricingStyleFour />
    <FeedbackStyleFour />
    <BlogCard />
    <Newsletter />
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Machine Learning" />

export default MachineLearningHomePage
