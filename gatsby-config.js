module.exports = {
  siteMetadata: {
    title: `Delek Children's Foundation`,
    description: `Delek Children’s Foundation is a charitable non-profit organization dedicated to providing children in need with an education and healthcare throughout the Himalayan region of India, Nepal, Bhutan and Tibet, irrespective of their ethnicity and national boundaries.`,
    author: `@debelopumento`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `gatsby-starter-default`,
        // short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-favicon-100x100.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: [
          "FIREBASE_API_KEY",
          "FIREBASE_AUTH_DOMAIN",
          "FIREBASE_DATABASE_URL",
          "FIREBASE_PROJECT_ID",
          "FIREBASE_STORAGE_BUCKET",
          "FIREBASE_MESSAGING_SENDER_ID",
          "FIREBASE_APP_ID",
        ],
      },
    },
  ],
}
