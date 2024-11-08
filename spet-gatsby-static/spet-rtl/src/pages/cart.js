import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import ShopImage1 from "../images/shop-image/shop-image1.jpg"
import ShopImage2 from "../images/shop-image/shop-image2.jpg"
import ShopImage3 from "../images/shop-image/shop-image3.jpg"

const CartPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Cart" />

    <div className="cart-area ptb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <form>
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="product-thumbnail">
                        <Link to="/product-details">
                          <img src={ShopImage1} alt="item" />
                        </Link>
                      </td>

                      <td className="product-name">
                        <Link to="/product-details">Wood Pencil</Link>
                      </td>

                      <td className="product-price">
                        <span className="unit-amount">$191.00</span>
                      </td>

                      <td className="product-quantity">
                        <div className="input-counter">
                          <span className="minus-btn">
                            <Icon.Minus />
                          </span>

                          <input type="text" min="1" defaultValue="1" />

                          <span className="plus-btn">
                            <Icon.Plus />
                          </span>
                        </div>
                      </td>

                      <td className="product-subtotal">
                        <span className="subtotal-amount">$191.00</span>

                        <Link to="#" className="remove">
                          <Icon.Trash2 />
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td className="product-thumbnail">
                        <Link to="/product-details">
                          <img src={ShopImage2} alt="item" />
                        </Link>
                      </td>

                      <td className="product-name">
                        <Link to="/product-details">T-Shirt</Link>
                      </td>

                      <td className="product-price">
                        <span className="unit-amount">$191.00</span>
                      </td>

                      <td className="product-quantity">
                        <div className="input-counter">
                          <span className="minus-btn">
                            <Icon.Minus />
                          </span>

                          <input type="text" min="1" defaultValue="1" />

                          <span className="plus-btn">
                            <Icon.Plus />
                          </span>
                        </div>
                      </td>

                      <td className="product-subtotal">
                        <span className="subtotal-amount">$191.00</span>

                        <Link to="#" className="remove">
                          <Icon.Trash2 />
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td className="product-thumbnail">
                        <Link to="/product-details">
                          <img src={ShopImage3} alt="item" />
                        </Link>
                      </td>

                      <td className="product-name">
                        <Link to="/product-details">Shoes</Link>
                      </td>

                      <td className="product-price">
                        <span className="unit-amount">$191.00</span>
                      </td>

                      <td className="product-quantity">
                        <div className="input-counter">
                          <span className="minus-btn">
                            <Icon.Minus />
                          </span>

                          <input type="text" min="1" defaultValue="1" />

                          <span className="plus-btn">
                            <Icon.Plus />
                          </span>
                        </div>
                      </td>

                      <td className="product-subtotal">
                        <span className="subtotal-amount">$191.00</span>

                        <Link to="#" className="remove">
                          <Icon.Trash2 />
                        </Link>
                      </td>
                    </tr>

                    {/* Empty Row */}
                    <tr>
                      <td colSpan="5" className="text-center">
                        Empty
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="cart-buttons">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-7 col-sm-7">
                    <div className="continue-shopping-box">
                      <Link to="#" className="btn btn-light">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-5 text-right">
                    <Link to="#" className="btn btn-light">
                      Update Cart
                    </Link>
                  </div>
                </div>
              </div>

              <div className="cart-totals">
                <h3>Cart Totals</h3>

                <ul>
                  <li>
                    Subtotal <span>$250.00</span>
                  </li>
                  <li>
                    Shipping <span>$30.00</span>
                  </li>
                  <li>
                    Total{" "}
                    <span>
                      <b>$280.00</b>
                    </span>
                  </li>
                </ul>

                <Link to="#" className="btn btn-primary">
                  Proceed to Checkout
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Cart" />

export default CartPage
