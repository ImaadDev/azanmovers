const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://azanmovers.vercel.app"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://azanmovers.vercel.app/blogs"
    }
  ]
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Azan Movers Blog",
  description:
    "Moving tips, relocation guides, and insights from Azan Packers & Movers in Saudi Arabia.",
  url: "https://azanmovers.vercel.app/blogs",
  publisher: {
    "@type": "Organization",
    name: "Azan Packers & Movers",
    logo: {
      "@type": "ImageObject",
      url: "https://azanmovers.vercel.app/logo.png"
    }
  }
};

export const metadata = {
  title: "Blog – Moving Tips & Guides | Azan Packers & Movers Saudi Arabia",
  description:
    "Explore the Azan Packers & Movers blog for moving tips, office relocation checklists, and furniture dismantling guides in Saudi Arabia.",
  robots: "index, follow",
  canonical: "https://azanmovers.vercel.app/blogs",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    title: "Blog – Azan Packers & Movers Saudi Arabia",
    description:
      "Moving tips, relocation checklists, and furniture guides from Azan Packers & Movers Saudi Arabia.",
    url: "https://azanmovers.vercel.app/blogs",
    images: ["https://azanmovers.vercel.app/logo.png"],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Blog – Azan Packers & Movers Saudi Arabia",
    description:
      "Helpful moving tips, relocation checklists, and guides by Azan Packers & Movers in Saudi Arabia.",
    images: ["https://azanmovers.vercel.app/logo.png"],
  },

  // Structured Data
  script: [
    {
      type: "application/ld+json",
      json: breadcrumbData
    },
    {
      type: "application/ld+json",
      json: blogSchema
    },
  ],
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
