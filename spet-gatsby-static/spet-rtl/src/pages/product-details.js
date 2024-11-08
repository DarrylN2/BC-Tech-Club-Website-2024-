import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import ProductSlider from "../components/Shop/ProductSlider"
import ProductsDetailsTabs from "../components/Shop/ProductsDetailsTabs"
import * as Icon from "react-feather"

import PaymentImg1 from "../images/payment-image/payment-img1.svg"
import PaymentImg2 from "../images/payment-image/payment-img2.svg"
import PaymentImg3 from "../images/payment-image/payment-img3.svg"
import PaymentImg4 from "../images/payment-image/payment-img4.svg"
import PaymentImg5 from "../images/payment-image/payment-img5.svg"
import PaymentImg6 from "../images/payment-image/payment-img6.svg"
import PaymentImg7 from "../images/payment-image/payment-img7.svg"

const ProductDetailsPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Product Details" />

    <div className="shop-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <ProductSlider />
          </div>

          <div className="col-lg-7">
            <div className="products-details">
              <h3>Wood Pencil</h3>

              <div className="price">
                <span>$200.00</span> $199.00
              </div>

              <ul className="rating">
                <li>
                  <i className="flaticon-star-1"></i>
                </li>
                <li>
                  <i className="flaticon-star-1"></i>
                </li>
                <li>
                  <i className="flaticon-star-1"></i>
                </li>
                <li>
                  <i className="flaticon-star-1"></i>
                </li>
                <li>
                  <i className="flaticon-star-1"></i>
                </li>
              </ul>

              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>

              <div className="availability">
                Availability: <span>In Stock</span>
              </div>

              <form>
                <div className="quantity d-flex align-items-center">
                  <span>Quantity:</span>

                  <div className="input-counter">
                    <span className="minus-btn">
                      <Icon.Minus />
                    </span>

                    <input type="text" min="1" defaultValue="1" />

                    <span className="plus-btn">
                      <Icon.Plus />
                    </span>
                  </div>
                </div>
                <button type="submit">Add to Cart</button>

                <button
                  type="button"
                  className="add-to-wishlist-btn"
                  title="Add to Wishlist"
                >
                  <Icon.Heart />
                </button>

                <div className="buy-btn">
                  <button type="button" className="btn btn-primary">
                    Buy it Now
                  </button>
                </div>
              </form>

              <div className="custom-payment-options">
                <span>Guaranteed safe checkout:</span>

                <div className="payment-methods">
                  <img src={PaymentImg1} alt="Payment" />
                  <img src={PaymentImg2} alt="Payment" />
                  <img src={PaymentImg3} alt="Payment" />
                  <img src={PaymentImg4} alt="Payment" />
                  <img src={PaymentImg5} alt="Payment" />
                  <img src={PaymentImg6} alt="Payment" />
                  <img src={PaymentImg7} alt="Payment" />
                </div>
              </div>

              <div className="products-share-social">
                <span>Share:</span>

                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      className="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      className="twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      className="linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      className="instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <ProductsDetailsTabs />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Product Details" />

export default ProductDetailsPage
