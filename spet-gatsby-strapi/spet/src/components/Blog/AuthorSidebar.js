import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import AuthorImg from "../../images/author2.jpg"

const AuthorSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_author">
          <div className="">
            <img src={AuthorImg} alt="Author Img" />
            <h3>Jhon Smith</h3>
            <span>Content Writer</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

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

        <div className="widget widget_startp_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link to="/blog-details" className="thumb">
              <span className="fullimage cover bg1" role="img"></span>
            </Link>

            <div className="info">
              <time>June 10, 2023</time>
              <h4 className="title usmall">
                <Link to="/blog-details">
                  Making Peace With The Feast Or Famine Of Freelancing
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link to="/blog-details" className="thumb">
              <span className="fullimage cover bg2" role="img"></span>
            </Link>
            <div className="info">
              <time>June 21, 2023</time>
              <h4 className="title usmall">
                <Link to="/blog-details">
                  I Used The Web For A Day On A 50 MB Budget
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link to="/blog-details" className="thumb">
              <span className="fullimage cover bg3" role="img"></span>
            </Link>
            <div className="info">
              <time>June 30, 2023</time>
              <h4 className="title usmall">
                <Link to="/blog-details">
                  How To Create A Responsive Popup Gallery?
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link to="#">Business</Link>
            </li>
            <li>
              <Link to="#">Privacy</Link>
            </li>
            <li>
              <Link to="#">Technology</Link>
            </li>
            <li>
              <Link to="#">Tips</Link>
            </li>
            <li>
              <Link to="#">Uncategorized</Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link to="#">
              IT <span className="tag-link-count">(3)</span>
            </Link>
            <Link to="#">
              Spacle <span className="tag-link-count">(3)</span>
            </Link>
            <Link to="#">
              Games <span className="tag-link-count">(2)</span>
            </Link>
            <Link to="#">
              Fashion <span className="tag-link-count">(2)</span>
            </Link>
            <Link to="#">
              Travel <span className="tag-link-count">(1)</span>
            </Link>
            <Link to="#">
              Smart <span className="tag-link-count">(1)</span>
            </Link>
            <Link to="#">
              Marketing <span className="tag-link-count">(1)</span>
            </Link>
            <Link to="#">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorSidebar
