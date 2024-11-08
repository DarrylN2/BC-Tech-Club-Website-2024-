import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

// Shape Images
import Shape1 from "../../images/shape2.svg"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape4.svg"
import Shape4 from "../../images/shape4.svg"

const query = graphql`
  {
    strapiPricing {
      title
      shortText
      pricingCard {
        id
        title
        price
        duration
        featuresList {
          id
          title
          activeClass
        }
        btnText
        btnLink
        aosDelay
      }
    }
  }
`

const PricingStyleOne = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiPricing: { title, shortText, pricingCard },
  } = data

  return (
    <>
      <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            <div className="bar"></div>
            <p>{shortText}</p>
          </div>

          {pricingCard && (
            <div className="row justify-content-center">
              {pricingCard.map(priceInfo => (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={priceInfo.aosDelay}
                  data-aos-duration="1200"
                  data-aos-once="false"
                  key={priceInfo.id}
                >
                  <div className="pricing-table">
                    <div className="pricing-header">
                      <h3>{priceInfo.title}</h3>
                    </div>

                    <div className="content">
                      <div className="price">
                        <span>
                          <sup>$</sup>
                          {priceInfo.price} <span>{priceInfo.duration}</span>
                        </span>
                      </div>

                      {priceInfo && (
                        <div className="pricing-features">
                          <ul>
                            {priceInfo.featuresList.map(feature => (
                              <li
                                className={feature.activeClass}
                                key={feature.id}
                              >
                                {feature.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pricing-footer">
                        <Link
                          to={priceInfo.btnLink}
                          className="btn btn-primary"
                        >
                          {priceInfo.btnText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default PricingStyleOne
