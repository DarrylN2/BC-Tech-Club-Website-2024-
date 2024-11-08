import React from "react"
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import { Link, graphql, useStaticQuery } from "gatsby"

// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape4 from "../../images/shape4.svg"

const query = graphql`
  {
    allStrapiProject(sort: { strapi_id: DESC }) {
      nodes {
        id
        image {
          url
          alternativeText
        }
        title
        slug
        shortDes
        clientName
        category
        technology
        date(formatString: "MMMM Do, YYYY")
        detailsContent {
          data {
            detailsContent
          }
        }
        livePreviewLink
      }
    }
  }
`

const RecentWorks = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <>
      <div className="works-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Works</h2>
            <div className="bar"></div>
            <p>
              These are the projects that we have done!
            </p>
          </div>
        </div>

        {projects && (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="works-slides"
          >
            {projects.slice(0, 10).map(project => (
              <SwiperSlide className="single-works" key={project.id}>
                <img
                  src={project.image.url}
                  alt={project.image.alternativeText}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />

                <Link to={`/projects/${project.slug}`} className="icon">
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p>{project.shortDes}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default RecentWorks
