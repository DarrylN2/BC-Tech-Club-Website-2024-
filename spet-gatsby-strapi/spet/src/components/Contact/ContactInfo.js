import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import * as Icon from "react-feather"

const query = graphql`
  {
    strapiContactInfo {
      contactInfoList {
        id
        iconName
        title
        content {
          data {
            content
          }
        }
      }
    }
  }
`

const ContactInfo = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiContactInfo: { contactInfoList },
  } = data

  return (
    <>
      {contactInfoList && (
        <div className="contact-info-area ptb-80"  data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-once="false">
          <div className="container">
            <div className="row justify-content-center">
              {contactInfoList.map(contactInfo => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  key={contactInfo.id}
                >
                  <div className="contact-info-box">
                    <div className="icon" style={{padding:"4px"}}>
                      {/* <i className={contactInfo.iconName}></i> */}
                      {/* {console.log(contactInfo)} */}
                      {console.log(contactInfo.iconName)}
                      {console.log(contactInfo.content.data.content)}
                      {contactInfo.title === "Mail Here" ? (
                      <p>
                        <Icon.Mail/>
                      </p>
                    ) : (
                      <p>
                        <Icon.Map/>
                      </p>
                    )}

                    </div>
                    <h3>{contactInfo.title}</h3>
                    {contactInfo.title === "Mail Here" ? (
                      <p>
                        <a href={`mailto:${contactInfo.content.data.content}`}>{contactInfo.content.data.content}</a>
                      </p>
                    ) : (
                      <p>
                        <a>{contactInfo.content.data.content}</a>
                      </p>
                    )}
                    {/* <ReactMarkdown>
                      {contactInfo.content.data.content}
                    </ReactMarkdown> */}
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

export default ContactInfo
