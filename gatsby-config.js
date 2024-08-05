/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Bharat Intern`,
    description: `We are Bharat Intern, a pioneering company dedicated to offering enriching virtual internship opportunities for college students. Our immersive programs span diverse domains, including web development, full-stack development, app development, machine learning, artificial intelligence, and data science. Tailored for a duration of one month, our internships empower students with hands-on experience and skill development.
    At Bharat Intern, we believe in providing a comprehensive learning experience. Each intern is tasked with completing 2-3 projects, ensuring a well-rounded understanding of their chosen domain. This approach not only fosters practical knowledge but also encourages creativity and problem-solving skills.
    Our commitment to education extends beyond project work. We have curated an extensive collection of educational content on our YouTube channel, where we boast a vibrant community of over 16,000 subscribers. These videos delve into the intricacies of various projects, offering valuable insights and tutorials.
    Furthermore, we maintain a strong presence on professional networking platforms. Our LinkedIn page, boasting a robust following of 200,000+, serves as a hub for industry updates, internship highlights, and networking opportunities. Additionally, our Telegram community, with over 100,000 followers, provides a real-time space for discussion, knowledge-sharing, and community engagement.
    Join Bharat Intern on this transformative journey of education, collaboration, and skill-building. Explore the vast landscape of opportunities that our virtual internships offer, and embark on a path of growth and success with us.`,
    author: `@bharatintern`,
    siteUrl: `https://bharatintern.live`,
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
        icon: `./src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
