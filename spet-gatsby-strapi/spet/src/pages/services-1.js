import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiService(sort: { strapi_id: DESC }) {
      nodes {
        id
        iconName
        iconBgClass
        title
        slug
        shortDescription
        serviceDetails {
          data {
            serviceDetails
          }
        }
      }
    }
  }
`

const ServicesPage = () => {

  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiService: { nodes: services },
  } = data

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle="Services Style One" />

      <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {services && (
            <div className="row justify-content-center">
              {services.map(service => (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="false"
                  key={service.id}
                >
                  <div className="single-services-box">
                    <div className={service.iconBgClass}>
                      <i className={service.iconName}></i>
                    </div>
                    <h3>
                      <Link to={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p>{service.shortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Services" />

export default ServicesPage
