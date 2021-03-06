module.exports = {
  siteMetadata: {
    title: `Jacob Sowles`,
    author: `Jacob Sowles`,
    description: `Full-stack software developer, aspiring everything-elser`,
    siteUrl: `https://jacobsowles.com`,
    social: {
      email: `jacob@jacobsowles.com`,
      github: `jacobsowles`,
      linkedin: `jacobsowles`,
      medium: `@jacobsowles`,
      twitter: `jacobsowles`,
    },
  },
  plugins: [
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans`,
            subsets: [`latin`],
            variants: [`300`, `400`],
          },
          {
            family: `Roboto Slab`,
            subsets: [`latin`],
            variants: [`300`, `400`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131685783-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
