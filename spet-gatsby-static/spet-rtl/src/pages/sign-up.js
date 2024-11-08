import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"

import Logo from "../images/logo.png"

const SignUpPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Sign Up" />

    <div className="ptb-80">
      <div className="container">
        <div className="auth-form">
          <div className="auth-head">
            <Link to="/it-startup">
              <img src={Logo} alt="logo" />
            </Link>
            <p>Create a new account</p>
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="ConfirmPassword"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>

          <div className="foot">
            <p>
              Already have an account yet? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Sign Up" />

export default SignUpPage
