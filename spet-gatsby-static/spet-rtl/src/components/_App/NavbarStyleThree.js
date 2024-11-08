import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../images/logo.png"

const NavbarStyleThree = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header id="header" className="headroom navbar-style-three">
      <div className="startp-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/it-startup"
              onClick={toggleNavbar}
              className="navbar-brand"
            >
              <img src={Logo} alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="#" 
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    Home <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/it-startup"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        IT Startup
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/it-startup-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        IT Startup Two
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/iot"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        IOT
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/hosting"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Hosting
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/machine-learning"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Machine Learning
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/machine-learning-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Machine Learning 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/bigdata-analytics"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Bigdata Analytics
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/digital-agency"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Digital Agency
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/digital-agency-portfolio"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Digital Agency Portfolio
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/pc-repair"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        PC Repair
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    About <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/about-1"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        About Style 1
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/about-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        About Style 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/about-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        About Style 3
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    Pages <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="#"
                        onClick={e => e.preventDefault()}
                        className="nav-link"
                      >
                        Features <Icon.ChevronDown />
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            to="/features"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Features
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/feature-details"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Features Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="#"
                        onClick={e => e.preventDefault()}
                        className="nav-link"
                      >
                        Services <Icon.ChevronDown />
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            to="/services-1"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 1
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/services-2"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 2
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/services-3"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 3
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/services-4"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 4
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/services-5"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 5
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/service-details"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Feedback
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="#"
                        onClick={e => e.preventDefault()}
                        className="nav-link"
                      >
                        Projects <Icon.ChevronDown />
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            to="/projects-1"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Project Style 1
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/projects-2"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Project Style 2
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/project-details"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Project Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/team"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/pricing"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="#"
                        onClick={e => e.preventDefault()}
                        className="nav-link"
                      >
                        User <Icon.ChevronDown />
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            to="/login"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Login
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/sign-up"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Sign Up
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/forgot-password"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Forgot Password
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/faq"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        FAQ's
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/coming-soon"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Coming Soon
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/404"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        404 Error Page
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="#" 
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    Shop <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/shop"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Shop
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/product-details"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Products Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/cart"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Cart
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/checkout"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    Blog <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/blog-1"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Grid
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/blog-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Right Sidebar
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/blog-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Grid 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/blog-4"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Right Sidebar 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/blog-5"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Grid 3
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/blog-6"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Right Sidebar 3
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/blog-details"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="/contact"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option">
              <Link to="/cart" className="cart-wrapper-btn">
                <Icon.ShoppingCart />
                <span>0</span>
              </Link>

              <Link to="/contact" className="btn btn-light">
                Support
              </Link>

              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavbarStyleThree
