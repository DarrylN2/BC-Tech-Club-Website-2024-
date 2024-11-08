import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as Icon from "react-feather"

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
        date(formatString: "MMMM Do, YYYY")
        author
      }
    }

    allStrapiCategorie(sort: { strapi_id: DESC }) {
      nodes {
        id
        text
        slug
        blogs {
          id
        }
      }
    }

    allStrapiTag(sort: { strapi_id: DESC }) {
      nodes {
        id
        text
        slug
        blogs {
          id
        }
      }
    }
  }
`

const BlogSidebar = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiBlog: { nodes: blogs },
    allStrapiCategorie: { nodes: categories },
    allStrapiTag: { nodes: tags },
  } = data

  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <form className="search-form">
            <label htmlFor="search">
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <Icon.Search />
            </button>
          </form>
        </div>

        {blogs && (
          <div className="widget widget_startp_posts_thumb">
            <h3 className="widget-title">Recent Posts</h3>

            {blogs.slice(0, 3).map(blog => (
              <article className="item" key={blog.id}>
                <Link to={`/blogs/${blog.slug}`} className="thumb">
                  <span
                    className="fullimage cover"
                    role="img"
                    style={{ backgroundImage: `url(${blog.image.url})` }}
                  ></span>
                </Link>

                <div className="info">
                  <span>{blog.date}</span>
                  <h4 className="title usmall">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h4>
                </div>

                <div className="clear"></div>
              </article>
            ))}
          </div>
        )}

        {categories && (
          <div className="widget widget_categories">
            <h3 className="widget-title">Categories</h3>

            <ul>
              {categories.slice(0, 6).map(categorie => (
                <li key={categorie.id}>
                  <Link to={`/categories/${categorie.slug}`}>
                    {categorie.text}{" "}
                    <span className="post-count">
                      ({categorie.blogs && categorie.blogs.length})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tags && (
          <div className="widget widget_tag_cloud">
            <h3 className="widget-title">Popular Tags</h3>

            <div className="tagcloud">
              {tags.slice(0, 10).map(tag => (
                <Link to={`/tags/${tag.slug}`} key={tag.id}>
                  {tag.text}{" "}
                  <span className="tag-link-count">
                    ({tag.blogs && tag.blogs.length})
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default BlogSidebar
