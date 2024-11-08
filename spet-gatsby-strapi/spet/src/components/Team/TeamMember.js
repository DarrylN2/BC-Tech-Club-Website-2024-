import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiTeam {
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

const TeamMember = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTeam: { teamMember },
  } = data

  return (
    <>
      {teamMember && (
        <div className="team-area pt-80 pb-50 bg-f9f6f6">
          <div className="container">
            <div className="row justify-content-center">
              {teamMember.map(team => (
                <div className="col-lg-4 col-md-6" key={team.id}  data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="false">
                  <div className="single-team">
                    <div className="team-image">
                      <img
                        src={team.image.url}
                        alt={team.image.alternativeText}
                        // style={{ width: "100%", height: "100px", objectFit: "cover" }}
                      />
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
                                {console.log(social.id)}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}

                      <p>{team.infoText}</p>
                    </div>
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

export default TeamMember
