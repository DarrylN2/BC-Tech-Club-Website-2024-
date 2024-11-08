import React from "react"
import { Link } from "gatsby"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/shape5.png"

const MainBanner = () => {
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5">
                  <div className="hero-content">
                    <h1>Built For Developers</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <Link to="/contact" className="btn btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="col-lg-5 offset-lg-1">
                  <div className="banner-form ml-3">
                    <form>
                      <div className="form-group">
                        <label htmlFor="text">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter username"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Create a password"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Register Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape5">
          <img src={Shape5} alt="shape" />
        </div>
        <div className="shape6 rotateme">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default MainBanner
