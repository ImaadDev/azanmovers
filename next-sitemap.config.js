/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    generateRobotsTxt: false, // creates robots.txt automatically
    changefreq: 'daily',
    priority: 0.8,
  };
  