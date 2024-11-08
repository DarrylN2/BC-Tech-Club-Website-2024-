import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

const query = graphql`
  {
    allStrapiBlog(sort: { strapi_id: DESC }) {
      nodes {
        id
        image {
          url
          alternativeText
        }
        title
        slug
        shortDes
        date(formatString: "MMMM Do, YYYY")
        author
        blogDetails {
          data {
            blogDetails
          }
        }
        category {
          id
          text
          slug
        }
        tags {
          id
          text
          slug
        }
      }
    }
  }
`

const BlogPostStyleThree = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="section-title text-left">
            <h2>
              Our Recent <span>News</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {blogs && (
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
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 6500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Pagination, Autoplay]}
              className="blog-slides"
            >
              {blogs.slice(0, 6).map(blog => (
                <SwiperSlide className="single-blog-item" key={blog.id}>
                  <div className="post-image">
                    <Link to={`/blogs/${blog.slug}`}>
                      <img
                        src={blog.image.url}
                        alt={blog.image.alternativeText}
                      />
                    </Link>
                  </div>

                  <div className="post-content">
                    <ul className="post-meta">
                      <li>By {blog.author}</li>
                      <li>{blog.date}</li>
                    </ul>
                    <h3>
                      <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  )
}

export default BlogPostStyleThree
