import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo"
import NavbarStyleThree from "../components/_App/NavbarStyleThree"

import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import Partner from "../components/Common/Partner"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

const query = graphql`
  {
    strapiAboutUs {
      image {
        url
        alternativeText
      }
      heading
      aboutContent {
        data {
          aboutContent
        }
      }
      aboutHistoryList {
        id
        title
        shortDescription
      }
    }
  }
`

const AboutUsPage = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiAboutUs: { image, heading, aboutContent, aboutHistoryList },
  } = data

  return (
    <Layout>
      <Navbar/>

      <PageBanner pageTitle="About Us"/>

      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                {/* <img src={image.url} 
                alt="About" 
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="false"
                 />
                 {console.log(image)} */}
                 <Swiper
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  className="about-slider"
                >
                  {image.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={imgUrl.url}
                        alt={`About image ${index + 1}`}
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                        data-aos-once="false"
                        style={{ width: "100%", height: "auto" , border:"30%"}}
                        
                      />
                      
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="col-lg-6 col-md-12" data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="false">
              <div className="about-content">
                <div className="section-title">
                  <h2
                  
                  >{heading}</h2>
                  <div className="bar"></div>
                </div>
                <div style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                  <ReactMarkdown>{aboutContent.data.aboutContent}</ReactMarkdown>
                </div>
                
              </div>
            </div>
          </div>

          {aboutHistoryList && (
            <div className="about-inner-area" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-once="false">
              <div className="row justify-content-center">
                {aboutHistoryList.map(about => (
                  <div className="col-lg-6 col-md-6 col-sm-12" key={about.id} style={{ marginBottom: '20px'}} >
                    <div className="about-text">
                      <h3>{about.title}</h3>
                      <p>{about.shortDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <Team /> */}

      {/* <Partner /> */}

      {/* <FunFactsArea /> */}

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

export default AboutUsPage
