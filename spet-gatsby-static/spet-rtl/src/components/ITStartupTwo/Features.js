import React from "react"
import * as Icon from "react-feather"
import { Link } from "gatsby"

const Features = () => {
  return (
    <>
      <div className="boxes-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                <div className="icon">
                  <Icon.Server />
                </div>

                <h3>
                  <Link to="/feature-details">Zero Configuration</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-box bg-f78acb">
                <div className="icon">
                  <Icon.Code />
                </div>

                <h3>
                  <Link to="/feature-details">Code Security</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-box bg-c679e3">
                <div className="icon">
                  <Icon.Users />
                </div>

                <h3>
                  <Link to="/feature-details">Team Management</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.GitBranch />
                </div>

                <h3>
                  <Link to="/feature-details">Access Controlled</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
