import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/PCRepair/MainBanner"
import PartnerStyleTwo from "../components/Common/PartnerStyleTwo"
import AboutUsContent from "../components/PCRepair/AboutUsContent"
import Services from "../components/PCRepair/Services"
import Cta from "../components/PCRepair/Cta"
import FunFactsArea from "../components/Common/FunFactsArea"
import Team from "../components/PCRepair/Team"
import Feedback from "../components/Common/Feedback"
import WhyChoose from "../components/PCRepair/WhyChoose"
import BlogPost from "../components/Common/BlogPost"
import Footer from "../components/_App/Footer"

const PCRepairHomePage = () => (
  <Layout>
    <Navbar />

    <MainBanner />

    <PartnerStyleTwo />

    <AboutUsContent />

    <Services />

    <Cta />

    <FunFactsArea />

    <Team />

    <Feedback />

    <WhyChoose />

    <BlogPost />

    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="PC Repair" />

export default PCRepairHomePage
