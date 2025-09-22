/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true, // creates robots.txt automatically
    changefreq: 'daily',
    priority: 0.8,
  };
  