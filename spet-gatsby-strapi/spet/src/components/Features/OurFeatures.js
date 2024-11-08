import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiFeature(sort: { strapi_id: DESC }) {
      nodes {
        id
        iconName
        title
        slug
        shortDescription
        boxColorClass
        aosDelay
        contentDetails {
          data {
            contentDetails
          }
        }
      }
    }
  }
`

const OurFeatures = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiFeature: { nodes: features },
  } = data

  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Features</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {features && (
            <div className="row justify-content-center">
              {features.map(feature => (
                <div
                  className="col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={feature.aosDelay}
                  data-aos-duration="1200"
                  data-aos-once="false"
                  key={feature.id}
                >
                  <div className={`single-features ${feature.boxColorClass}`}>
                    <div className="icon">
                      <i className={feature.iconName}></i>
                    </div>
                    <h3>
                      <Link to={`/features/${feature.slug}`}>
                        {feature.title}
                      </Link>
                    </h3>

                    <p>{feature.shortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default OurFeatures
