import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiTeam {
      title
      shortText
      teamMember {
        id
        image {
          url
          alternativeText
        }
        name
        designation
        infoText
        socialLinks {
          id
          iconName
          link
        }
      }
    }
  }
`

const Team = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTeam: { title, shortText, teamMember },
  } = data

  return (
    <>
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            <div className="bar"></div>
            <p>{shortText}</p>
          </div>
        </div>

        {teamMember && (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 5,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="team-slider"
          >
            {teamMember.map(team => (
              <SwiperSlide className="single-team" key={team.id}>
                <div className="team-image">
                  <img src={team.image.url} alt={team.image.alternativeText} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>{team.name}</h3>
                    <span>{team.designation}</span>
                  </div>

                  {team && (
                    <ul>
                      {team.socialLinks.map(social => (
                        <li key={social.id}>
                          <a
                            href={social.link}
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className={social.iconName}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p>{team.infoText}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  )
}

export default Team
