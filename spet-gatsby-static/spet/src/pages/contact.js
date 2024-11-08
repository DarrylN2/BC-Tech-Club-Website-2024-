import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import ContactInfo from "../components/Contact/ContactInfo"
import GoogleMap from "../components/Contact/GoogleMap"
import ContactForm from "../components/Contact/ContactForm"

const ContactPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Contact Us" />

    <ContactInfo />

    <GoogleMap />

    <ContactForm />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
