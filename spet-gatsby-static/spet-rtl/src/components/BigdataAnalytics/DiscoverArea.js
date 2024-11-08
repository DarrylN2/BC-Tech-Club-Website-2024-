import React from "react"
import { Link } from "gatsby"

import DiscoverImg1 from "../../images/bigdata-analytics/discover-img1.png"
import DiscoverImg2 from "../../images/bigdata-analytics/discover-img2.jpg"
import AnalyticsShape1 from "../../images/bigdata-analytics/analytics-shape1.png"

const DiscoverArea = () => {
  return (
    <>
      <div className="discover-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="discover-image">
                <img src={DiscoverImg1} alt="Discover" />
                <img src={DiscoverImg2} alt="Discover" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="discover-content">
                <h2>Engaging New Audiences through Smart Approach</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>

                <Link to="/about-2" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="analytics-shape1">
          <img src={AnalyticsShape1} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default DiscoverArea
