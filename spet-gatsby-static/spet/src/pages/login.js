import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../images/logo.png"

const LoginPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Login" />

    <div className="ptb-80">
      <div className="container">
        <div className="auth-form">
          <div className="auth-head">
            <Link to="/it-startup">
              <img src={Logo} alt="Logo" />
            </Link>
            <p>
              Don't have an account yet? <Link to="/sign-up">Sign Up</Link>
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

            <div className="mb-3">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <p>
                <Link to="/forgot-password">Forgot Password</Link>
              </p>
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>

          <div className="foot">
            <p>or connect with</p>
            <ul>
              <li>
                <a
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon.Mail />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon.Facebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <Icon.Twitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Login" />

export default LoginPage
