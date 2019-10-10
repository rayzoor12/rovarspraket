module.exports = {
  siteMetadata: {
    title: `Billhop Rövarspråket`,
    description: `Assignment to create a rövarspråk translator`,
    author: `Emil F.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nanum Gothic`
          }
        ],
      },
    }
  ],
}
