import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import Feedback from "../components/Common/Feedback"
import FeedbackStyleTwo from "../components/Common/FeedbackStyleTwo"
import FeedbackStyleThree from "../components/Common/FeedbackStyleThree"
import FeedbackStyleFour from "../components/Common/FeedbackStyleFour"
import FeedbackStyleFive from "../components/Common/FeedbackStyleFive"

const FeedbackPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Feedback or Testimonials" />

    <Feedback />

    <FeedbackStyleTwo />

    <FeedbackStyleThree />

    <FeedbackStyleFour />

    <FeedbackStyleFive />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Feedback" />

export default FeedbackPage
