// src/app/sitemap.xml/route.js

export async function GET() {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://azanmovers.vercel.app/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://azanmovers.vercel.app/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://azanmovers.vercel.app/services</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://azanmovers.vercel.app/blogs</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
      </url>
      <url>
        <loc>https://azanmovers.vercel.app/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>https://azanmovers.vercel.app/faqs</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      <!-- Add more routes here -->
    </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  