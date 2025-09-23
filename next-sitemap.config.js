
  /** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://azanmovers.vercel.app',
  generateRobotsTxt: false, // because you already have robots.txt
  changefreq: 'daily',
  priority: 0.8,
};
