import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import MapImg from "../../images/map.png"

const query = graphql`
  {
    strapiFunFact {
      title
      shortText
      funfactsList {
        id
        title
        text
      }
      titleTwo
      shortTextTwo
      btnText
      btnLink
    }
  }
`

const FunFactsArea = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiFunFact: {
      title,
      shortText,
      funfactsList,
      titleTwo,
      shortTextTwo,
      btnText,
      btnLink,
    },
  } = data

  return (
    <>
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            <div className="bar"></div>
            <p>{shortText}</p>
          </div>

          {funfactsList && (
            <div className="row justify-content-center">
              {funfactsList.map(funfact => (
                <div className="col-lg-3 col-md-3 col-6" key={funfact.id}>
                  <div className="funfact">
                    <h3>{funfact.title}</h3>
                    <p>{funfact.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="contact-cta-box">
            <h3>{titleTwo}</h3>
            <p>{shortTextTwo}</p>

            <Link to={btnLink} className="btn btn-primary">
              {btnText}
            </Link>
          </div>

          <div className="map-bg">
            <img src={MapImg} alt="map" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFactsArea
