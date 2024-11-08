import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import OurFeatures from "../components/Features/OurFeatures"
import SingleFeatures from "../components/Features/SingleFeatures"

const FeaturesPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Features" />

    <OurFeatures />

    <SingleFeatures />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Features" />

export default FeaturesPage
