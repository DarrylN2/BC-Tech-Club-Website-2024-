import React from "react"
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

const TeamStyleTwo = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiTeam: { teamMember },
  } = data

  return (
    <>
      <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Awesome Team</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {teamMember && (
            <div className="row justify-content-center">
              {teamMember.slice(0, 4).map(team => (
                <div className="col-lg-3 col-md-6" key={team.id}>
                  <div className="single-team">
                    <div className="team-image">
                      <img
                        src={team.image.url}
                        alt={team.image.alternativeText}
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
          )}
        </div>
      </div>
    </>
  )
}

export default TeamStyleTwo
