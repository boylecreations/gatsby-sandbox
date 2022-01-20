/* Initial Snippet  ---------------------------- 
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
------------------------------------------------ */

/* Initial Snippet  ---------------------------- */

module.exports = {
  siteMetadata: {
    title: "MyHeadlessWordPress",
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://reliance-ccp.local/graphql`,
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`
  ]
};