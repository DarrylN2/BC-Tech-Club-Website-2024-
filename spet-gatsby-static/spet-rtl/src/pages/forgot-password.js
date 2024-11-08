import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"

import Logo from "../images/logo.png"

const ForgotPasswordPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Forgot Password" />

    <div className="ptb-80">
      <div className="container">
        <div className="auth-form">
          <div className="auth-head">
            <Link to="/it-startup">
              <img src={Logo} alt="Logo" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
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

            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Forgot Password" />

export default ForgotPasswordPage
