/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    /* gatsby-source-wordpress-experimental */ {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://cms.kalasym.com/graphql`,
        protocol: `https`,
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
        display: `swap`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
