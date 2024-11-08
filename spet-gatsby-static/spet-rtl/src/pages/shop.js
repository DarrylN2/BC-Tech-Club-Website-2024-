import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import ProductCard from "../components/Shop/ProductCard"

const ShopPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Products" />

    <ProductCard />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Shop" />

export default ShopPage
