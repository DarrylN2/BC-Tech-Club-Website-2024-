import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import ShopImage1 from "../../images/shop-image/shop-image1.jpg"
import ShopImage2 from "../../images/shop-image/shop-image2.jpg"
import ShopImage3 from "../../images/shop-image/shop-image3.jpg"
import ShopImage4 from "../../images/shop-image/shop-image4.jpg"
import ShopImage5 from "../../images/shop-image/shop-image5.jpg"
import ShopImage6 from "../../images/shop-image/shop-image6.jpg"
import ShopImage7 from "../../images/shop-image/shop-image7.jpg"
import ShopImage8 from "../../images/shop-image/shop-image8.jpg"

const ProductCard = () => {
  return (
    <>
      <div className="shop-area ptb-80">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-7 col-sm-7">
                <div className="woocommerce-result-count">
                  <p>Showing 1-8 of 14 results</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-sm-5">
                <div className="woocommerce-topbar-ordering">
                  <select className="form-select">
                    <option value="1">Sort by Popularity</option>
                    <option value="2">Sort by Average Rating</option>
                    <option value="3">Sort by Latest</option>
                    <option value="4">Sort by price: Low to High</option>
                    <option value="5">Sort by price: High to Low</option>
                    <option value="6">Sort by New</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <img src={ShopImage1} alt="Product" />

                  <ul>
                    {/* <li>
                                        <a href="#" data-toggle="modal" data-target="#productsModalCenter">
                                            <Icon.Search />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icon.Heart />
                                        </a>
                                    </li> */}
                    <li>
                      <Link to="/product-details">
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link to="/product-details">Wood Pencil</Link>
                  </h3>
                  <span>$191.00</span>
                  <ul>
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

                  <Link to="#" className="add-to-cart-btn">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <img src={ShopImage2} alt="Product" />

                  <ul>
                    {/* <li>
                                        <a href="#" data-toggle="modal" data-target="#productsModalCenter">
                                            <Icon.Search />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icon.Heart />
                                        </a>
                                    </li> */}
                    <li>
                      <Link to="/product-details">
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link to="/product-details">T-Shirt</Link>
                  </h3>
                  <span>$111.00</span>
                  <ul>
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
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-2"></i>
                    </li>
                  </ul>

                  <Link to="#" className="add-to-cart-btn">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <img src={ShopImage3} alt="Product" />

                  <ul>
                    {/* <li>
                                        <a href="#" data-toggle="modal" data-target="#productsModalCenter">
                                            <Icon.Search />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icon.Heart />
                                        </a>
                                    </li> */}
                    <li>
                      <Link to="/product-details">
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link to="/product-details">Casual Shoe</Link>
                  </h3>
                  <span>$100.00</span>
                  <ul>
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
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-2"></i>
                    </li>
                  </ul>

                  <Link to="#" className="add-to-cart-btn">
                    Add to Cart
                  </Link>
                </div>

                <div className="sale-btn">Sale</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <img src={ShopImage4} alt="Product" />

                  <ul>
                    {/* <li>
                                        <a href="#" data-toggle="modal" data-target="#productsModalCenter">
                                            <Icon.Search />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icon.Heart />
                                        </a>
                                    </li> */}
                    <li>
                      <Link to="/product-details">
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link to="/product-details">Coffee Bag</Link>
                  </h3>
                  <span>$414.00</span>
                  <ul>
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
                      <i className="flaticon-star-2"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-2"></i>
                    </li>
                  </ul>

                  <Link to="#" className="add-to-cart-btn">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <img src={ShopImage5} alt="Product" />

                  <ul>
                    {/* <li>
                                        <a href="#" data-toggle="modal" data-target="#productsModalCenter">
                                            <Icon.Search />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icon.Heart />
                                        </a>
                                    </li> */}
                    <li>
                      <Link to="/product-details">
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link to="/product-details">Single Chair</Link>
                  </h3>
                  <span>$132.00</span>
                  <ul>
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
                      <i className="flaticon-star-2"></i>
                    </li>
                  </ul>

                  <Link to="#" className="add-to-cart-btn">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <img src={ShopImage6} alt="Product" />

                  <ul>
                    {/* <li>
                                        <a href="#" data-toggle="modal" data-target="#productsModalCenter">
                                            <Icon.Search />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icon.Heart />
                                        </a>
                                    </li> */}
                    <li>
                      <Link to="/product-details">
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link to="/product-details">Business Card</Link>
                  </h3>
                  <span>$214.00</span>
                  <ul>
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
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-2"></i>
                    </li>
                  </ul>

                  <Link to="#" className="add-to-cart-btn">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <img src={ShopImage7} alt="Product" />

                  <ul>
                    {/* <li>
                                        <a href="#" data-toggle="modal" data-target="#productsModalCenter">
                                            <Icon.Search />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icon.Heart />
                                        </a>
                                    </li> */}
                    <li>
                      <Link to="/product-details">
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link to="/product-details">Book Cover</Link>
                  </h3>
                  <span>$500.00</span>
                  <ul>
                    <li>
                      <i className="flaticon-star-1"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-1"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-2"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-2"></i>
                    </li>
                  </ul>

                  <Link to="#" className="add-to-cart-btn">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <img src={ShopImage8} alt="Product" />

                  <ul>
                    {/* <li>
                                        <a href="#" data-toggle="modal" data-target="#productsModalCenter">
                                            <Icon.Search />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icon.Heart />
                                        </a>
                                    </li> */}
                    <li>
                      <Link to="/product-details">
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link to="/product-details">Wall Watch</Link>
                  </h3>
                  <span>$129.00</span>
                  <ul>
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
                      <i className="flaticon-star-2"></i>
                    </li>
                  </ul>

                  <Link to="#" className="add-to-cart-btn">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <Link to="#" className="page-link">
                        Prev
                      </Link>
                    </li>

                    <li className="page-item active">
                      <Link to="#" className="page-link">
                        1
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link to="#" className="page-link">
                        1
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link to="#" className="page-link">
                        1
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link to="#" className="page-link">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
