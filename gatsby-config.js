/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    /** gatsby-source-wordpress */ {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        // I have created a dummy site for us to use with the plugins we discussed
        url: "https://cms.kalasym.com/graphql",
        protocol: "https",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://cms.kalasym.com",
          replacementUrl: "http://localhost:8000",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: [],
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    /** gatsby-plugin-typography */ {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    /* gatsby-plugin-google-fonts */ {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora\:300`,
          `Fira Sans Extra Condensed\:300`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
  ],
}
