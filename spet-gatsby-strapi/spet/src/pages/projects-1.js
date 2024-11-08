import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link, graphql, useStaticQuery } from "gatsby"

// Shape Images
import Shape2 from "../images/shape2.svg"
import Shape4 from "../images/shape4.svg"

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

const ProjectsPage = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle="Projects" />

      {projects && (
        <div className="works-area pt-80 pb-50"  data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-once="false">
          <div className="container">
            <div className="row justify-content-center">
              {projects.map(project => (
                <div className="col-lg-4 col-md-6" key={project.id}>
                  <div className="single-works">
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
                  </div>
                </div>
              ))}
            </div>
          </div>

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
      )}

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectsPage
