/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://flollama.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/chat"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: '*',
        disallow: '/chat/',
      },
    ],
    additionalSitemaps: ["https://flollama.in/server-sitemap.xml"],
  },
};
