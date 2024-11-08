import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import { navigate } from "gatsby";
import { useEffect } from "react";
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/ITStartup/MainBanner"
import Features from "../components/ITStartup/Features"
import ServicesArea from "../components/ITStartup/ServicesArea"
import OurFeatures from "../components/ITStartup/OurFeatures"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import RecentWorks from "../components/Common/RecentWorks"
import PricingStyleOne from "../components/PricingPlans/PricingStyleOne"
import FeedbackStyleFour from "../components/Common/FeedbackStyleFour"
import Partner from "../components/Common/Partner"
import BlogPost from "../components/Common/BlogPost"
import Footer from "../components/_App/Footer"
import WeeklyMeeting from "../components/ITStartup/WeeklyMeeting"

const IndexPage = () => {
  // useEffect(() => {
  //   // Redirect to /it-startup when the root URL is accessed
  //   navigate("/it-startup");
  // }, [])
  // return null
  return (
    // <Layout>
    //   <Navbar />

    //   <MainBanner />

    //   <Features />

    //   <ServicesArea />

    //   <OurFeatures />

    //   <Team />

    //   <FunFactsArea />

    //   <RecentWorks />

    //   <PricingStyleOne />

    //   <FeedbackStyleFour />

    //   <Partner />

    //   <BlogPost />

    //   <Footer />
      
       
    // </Layout>
    
    <Layout>
      <Navbar />

      <MainBanner />

      {/* <Features /> */}

      {/* <ServicesArea /> */}
      <WeeklyMeeting/>

      {/* <OurFeatures /> */}

      <Team />

      {/* <FunFactsArea /> */}

      <RecentWorks />

      {/* <PricingStyleOne /> */}

      {/* <FeedbackStyleFour /> */}

      {/* <Partner /> */}

      {/* <BlogPost /> */}

      <Footer />
    </Layout>
    
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="it-startup" />

export default IndexPage
