/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Strapi API URL:", process.env.STRAPI_API_URL);
console.log("Strapi API Token:", process.env.STRAPI_API_TOKEN);
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
  accessToken: process.env.STRAPI_API_TOKEN,
  collectionTypes: [
    {
      singularName: "blog",
      queryParams: {
        populate: {
          image: "*",
          blogDetails: {
            populate: "*",
          },
          category: "*",
          tags: "*",
        },
      },
    },
    {
      singularName: "categorie",
      queryParams: {
        populate: {
          blogs: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "tag",
      queryParams: {
        populate: {
          blogs: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "feature",
      queryParams: {
        populate: {
          contentDetails: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "project",
      queryParams: {
        populate: {
          image: "*",
          detailsContent: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "service",
      queryParams: {
        populate: {
          serviceDetails: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "faq",
      queryParams: {
        populate: {
          faqList: {
            populate: "*",
          },
        },
      },
    },
  ],

  singleTypes: [
    "it-startup-banner",
    "site-logo",
    {
      singularName: "service-one",
      queryParams: {
        populate: {
          image: "*",
          servicesList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "service-two",
      queryParams: {
        populate: {
          image: "*",
          servicesList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "team",
      queryParams: {
        populate: {
          teamMember: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "pricing",
      queryParams: {
        populate: {
          pricingCard: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "fun-fact",
      queryParams: {
        populate: {
          funfactsList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "feedback",
      queryParams: {
        populate: {
          feedbackList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "partner",
      queryParams: {
        populate: {
          partnersList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "weekly-meeting",
      queryParams: {
        populate: {
          image: "*",
          DayOfWeek: {
            populate: "*",
          },
          Time: {
            populate: "*",
          },
          Room:{
            populate: "*",
          }
        },
      },
    },
    "it-startup-banner-2",
    {
      singularName: "contact-info",
      queryParams: {
        populate: {
          contactInfoList: {
            populate: "*",
          },
        },
      },
    },
    "google-map",
    {
      singularName: "about-us",
      queryParams: {
        populate: {
          image: "*",
          aboutContent: {
            populate: "*",
          },
          aboutHistoryList: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "footer",
      queryParams: {
        populate: {
          image: "*",
          aboutText: {
            populate: "*",
          },
          socialMedia: {
            populate: "*",
          },
        },
      },
    },
  ],

  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "http://127.0.0.1:8000",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
}

module.exports = {
  siteMetadata: {
    title: `BC Tech Club`,
    description: `BC Tech Club Official Website`,
    author: `@BC Tech Club`,
    siteUrl: `https://spet-gatsby.envytheme.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/Tech-Club-Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
}
