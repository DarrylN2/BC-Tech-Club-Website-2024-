import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiPartner {
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

const PartnerStyleTwo = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiPartner: { partnersList },
  } = data

  return (
    <>
      {partnersList && (
        <div className="repair-partner-area bg-f9fafb">
          <div className="container">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
              autoplay={{
                delay: 6500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              className="repair-partner-slides"
            >
              {partnersList.map(partner => (
                <SwiperSlide className="single-repair-partner" key={partner.id}>
                  <img
                    src={partner.image.url}
                    alt={partner.image.alternativeText}
                  />
                  <img
                    src={partner.hoverImage.url}
                    alt={partner.hoverImage.alternativeText}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}

export default PartnerStyleTwo
