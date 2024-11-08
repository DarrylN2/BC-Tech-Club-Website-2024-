import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { graphql, useStaticQuery } from "gatsby"
 
import MapImg from "../../images/map.png"
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"

const query = graphql`
  {
    strapiSiteLogo {
      blackLogo {
        url
        alternativeText
      }
    }
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
    strapiFooter {
      image {
        url
      }
      aboutText
      socialMedia {
        iconName
        link
        id
      }
    }
  }
`

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Api query
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiSiteLogo: { blackLogo },
    strapiContactInfo: { contactInfoList },
    strapiFooter:{image,aboutText,socialMedia},
  } = data

  


  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link to="/it-startup">
                    <img src={image.url} alt={image.alternativeText} style={{width:"150px"}}/>
                  </Link>
                </div>
                <p>
                  {aboutText}
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget pl-5">
                <h3>Useful Links</h3>
                <ul className="list">
                  <li>
                    <Link to="/about-1">About Us</Link>
                  </li>
                  {/* <li>
                    <Link to="/services-1">Services</Link>
                  </li>
                  <li>
                    <Link to="/features">Features</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Our Pricing</Link>
                  </li>
                  <li>
                    <Link to="/blog-1">Latest News</Link>
                  </li> */}
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/projects-1">Projects</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  <li>
                    <Link to="/faq">FAQ's</Link>
                  </li>
                  {/* <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/term-condition">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li> */}
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  {/* <li>
                    <Icon.MapPin />
                    27 Division St, New York, <br /> NY 10002, USA
                  </li>
                  <li>
                    <Icon.Mail />
                    Email: <a href="mailto:spet@gmail.com">spet@gmail.com</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                  </li> */}
                  {contactInfoList.map((contactInfo,index)=>{
                    return(
                      <li key={index}>
                        {contactInfo.title === "Mail Here" ? (
                          <p>
                            <Icon.Mail />
                            <a href={`mailto:${contactInfo.content.data.content}`}>{contactInfo.content.data.content}</a>
                          </p>
                        ) : (
                          <p>
                            <Icon.MapPin />
                            <a>{contactInfo.content.data.content}</a>
                          </p>
                        )}
                      </li>
                    )
                  })}
                </ul>

                <ul className="social-links">
                  {socialMedia.map((socialLink)=>{
                    return(
                      <li key={socialLink.id}>
                        <a
                          href={socialLink.link}
                          // className="facebook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* {console.log(socialLink.id)} */}
                          <i className={socialLink.iconName}></i>
                          
                          {/* {socialLink.iconName === "discord" && <i className={socialLink.iconName}></i>}
                          {socialLink.iconName === "instagram" && <Icon.Instagram />}
                          {socialLink.iconName === "linkedin" && <Icon.Linkedin />} */}
                        </a>
                      </li>
                    )
                    
                  })}
                  {/* <li>
                    <a
                      href="https://www.facebook.com"
                      className="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      className="twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      className="instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      className="linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
                    
            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} Bellevue College Tech Club. All rights reserved.
                  {/* <a
                    href="https://envytheme.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={MapImg} className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        {/* {console.log("The footer appears")} */}
      </footer>
    </>
  )
}

export default Footer
