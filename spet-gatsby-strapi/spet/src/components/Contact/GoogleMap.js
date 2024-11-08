import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiGoogleMap {
      googleMapLink
    }
  }
`

const GoogleMap = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiGoogleMap: { googleMapLink },
  } = data

  return (
    <>
      <iframe
        src={googleMapLink}
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-once="false"
      ></iframe>
    </>
  )
}

export default GoogleMap
