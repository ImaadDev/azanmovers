const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.azanmovers.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.azanmovers.com/blogs"
    }
  ]
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Azan Movers Blog",
  description:
    "Moving tips, relocation guides, and insights from Azan Packers & Movers in Saudi Arabia.",
  url: "https://www.azanmovers.com/blogs",
  publisher: {
    "@type": "Organization",
    name: "Azan Packers & Movers",
    logo: {
      "@type": "ImageObject",
      url: "https://www.azanmovers.com/azanmovers-logo.png"
    }
  }
};

export const metadata = {
  title: "Blog | 🏆 Best Moving Company in Saudi Arabia | Moving Tips & Guides | Azan Packers & Movers",
  description:
    "🏆 Explore the Azan Packers & Movers blog for expert moving tips, office relocation checklists, and furniture dismantling guides in Saudi Arabia. Get insights from the #1 best moving company in Jeddah!",
  keywords: [
    "moving tips Saudi Arabia",
    "best movers blog Jeddah",
    "relocation guides Saudi Arabia",
    "moving company blog Jeddah",
    "house moving tips Saudi Arabia",
    "office relocation guides Jeddah",
    "furniture dismantling tips Saudi Arabia",
    "packing tips Jeddah",
    "moving checklist Saudi Arabia",
    "relocation advice Jeddah"
  ],
  robots: "index, follow",
  canonical: "https://www.azanmovers.com/blogs",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    title: "Blog | 🏆 Best Moving Company in Saudi Arabia | Moving Tips & Guides | Azan Packers & Movers",
    description:
      "🏆 Moving tips, relocation checklists, and furniture guides from Azan Packers & Movers, Saudi Arabia's #1 best moving company in Jeddah!",
    url: "https://www.azanmovers.com/blogs",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Blog | 🏆 Best Moving Company in Saudi Arabia | Moving Tips & Guides | Azan Packers & Movers",
    description:
      "🏆 Helpful moving tips, relocation checklists, and guides by Azan Packers & Movers, Saudi Arabia's #1 best moving company in Jeddah!",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
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

