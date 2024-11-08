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

const Features = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiFeature: { nodes: features },
  } = data

  return (
    <>
      {features && (
        <div className="boxes-area">
          <div className="container">
            <div className="row justify-content-center">
              {features.slice(0, 4).map(feature => (
                <div
                  className="col-lg-3 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={feature.aosDelay}
                  data-aos-duration="1200"
                  data-aos-once="false"
                  key={feature.id}
                >
                  <div className={`single-box ${feature.boxColorClass}`}>
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
          </div>
        </div>
      )}
    </>
  )
}

export default Features
