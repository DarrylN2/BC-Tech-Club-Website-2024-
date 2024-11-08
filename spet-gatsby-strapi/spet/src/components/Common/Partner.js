import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiPartner {
      heading
      shortText
      btnText
      btnLink
      getStarted
      getStartedLink
      partnerTitle
      partnersList {
        id
        image {
          url
          alternativeText
        }
        hoverImage {
          url
          alternativeText
        }
      }
    }
  }
`

const Partner = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiPartner: {
      heading,
      shortText,
      btnText,
      btnLink,
      getStarted,
      getStartedLink,
      partnerTitle,
      partnersList,
    },
  } = data

  return (
    <>
      <div className="ready-to-talk">
        <div className="container">
          <h3>{heading}</h3>
          <p>{shortText}</p>

          <Link to={btnLink} className="btn btn-primary">
            {btnText}
          </Link>

          <span>
            <Link to={getStartedLink}>{getStarted}</Link>
          </span>
        </div>
      </div>

      <div className="partner-area partner-section">
        <div className="container">
          <h5>{partnerTitle}</h5>

          {partnersList && (
            <div className="partner-inner">
              <div className="row justify-content-center">
                {partnersList.map(partner => (
                  <div className="col-lg-2 col-md-3 col-6" key={partner.id}>
                    <div className="single-partner">
                      <img
                        src={partner.image.url}
                        alt={partner.image.alternativeText}
                      />
                      <img
                        src={partner.hoverImage.url}
                        alt={partner.hoverImage.alternativeText}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Partner
