import React, { useState, useEffect }  from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
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

const ItStartupPage = () => {

  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    // Trigger re-rendering 1 second after the initial render
    const timer = setTimeout(() => {
      setRerender(prev => !prev); // Toggle the rerender state
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);
  return (
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

      {/* <PricingStyleOne />

      <FeedbackStyleFour />

      <Partner />

      <BlogPost /> */}

      <Footer key={rerender}  />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="home" />

export default ItStartupPage
