import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

import ServicesDetails1 from "../images/services-details-image/services-details1.png"
import ServicesDetails2 from "../images/services-details-image/services-details2.png"

const ServiceDetailsPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Services Details" />

    <div className="services-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <h3>Incredible Infrastructure</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>

              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>
            </div>
          </div>

          <div className="col-lg-6 services-details-image">
            <img
              src={ServicesDetails1}
              className="animate__animated animate__fadeInUp"
              alt="Services"
            />
          </div>
        </div>

        <div className="separate"></div>

        <div className="row align-items-center">
          <div className="col-lg-6 services-details-image">
            <img
              src={ServicesDetails2}
              className="animate__animated animate__fadeInUp"
              alt="Services"
            />
          </div>

          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>

              <div className="services-details-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Which material types can you work with?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Is Smart Lock required for instant apps?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>
                          Can I have multiple activities in a single feature?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Service Details" />

export default ServiceDetailsPage
