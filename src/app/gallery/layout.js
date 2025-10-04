const galleryImages = [
  { id: 1, src: '/Furniture 1.jpg', alt: 'Furniture Moving Service', title: 'Furniture Moving', category: 'Furniture Moving' },
  { id: 2, src: '/Furniture 3.jpg', alt: 'Furniture Packing Service', title: 'Furniture Packing', category: 'Furniture Packing' },
  { id: 3, src: '/Furniture.jpg', alt: 'Furniture Dismantling Service', title: 'Furniture Dismantling', category: 'Furniture Dismantling' },
  { id: 4, src: '/Load 1.jpg', alt: 'Loading Service', title: 'Loading', category: 'Loading' },
  { id: 5, src: '/Load.jpg', alt: 'Professional Loading Service', title: 'Professional Loading', category: 'Loading' },
  { id: 6, src: '/Truck 3.jpg', alt: 'Moving Truck', title: 'Moving Truck', category: 'Transportation' },
  { id: 7, src: '/truck 4.jpg', alt: 'Relocation Truck', title: 'Relocation Truck', category: 'Transportation' },
  { id: 8, src: '/Truck Stuff 2.jpg', alt: 'Truck Loading', title: 'Truck Loading', category: 'Loading' },
  { id: 9, src: '/Truck.jpg', alt: 'Moving Truck on Road', title: 'Moving Truck', category: 'Transportation' },
  { id: 10, src: '/Trucks.jpg', alt: 'Multiple Moving Trucks', title: 'Multiple Trucks', category: 'Transportation' },
  { id: 11, src: '/unload 2.jpg', alt: 'Unloading Service', title: 'Unloading', category: 'Unloading' },
  { id: 12, src: '/unload.jpg', alt: 'Professional Unloading Service', title: 'Professional Unloading', category: 'Unloading' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Azan Packers & Movers Gallery",
  "url": "https://www.azanmovers.com/gallery",
  "description": "Gallery of house moving, office relocation, and furniture dismantling services in Saudi Arabia.",
  "image": galleryImages.map((img) => ({
    "@type": "ImageObject",
    "url": `https://www.azanmovers.com${img.src}`,
    "name": img.title,
    "caption": img.alt
  })),
  "author": {
    "@type": "Organization",
    "name": "Azan Packers & Movers"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Azan Packers & Movers",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.azanmovers.com/azanmovers-logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.azanmovers.com/gallery"
  }
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.azanmovers.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.azanmovers.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Gallery",
      "item": "https://www.azanmovers.com/gallery"
    }
  ]
};

export const metadata = {
  title: "Gallery | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
  description:
    "🏆 Explore the professional moving services of Azan Packers & Movers, Saudi Arabia's #1 best moving company! View our gallery of house moving, office relocation, and furniture dismantling services in Jeddah. See why thousands trust us!",
  keywords: [
    "moving company gallery Saudi Arabia",
    "best movers gallery Jeddah",
    "house moving photos Saudi Arabia",
    "office relocation gallery Jeddah",
    "furniture dismantling photos Saudi Arabia",
    "moving services gallery Jeddah",
    "packing services photos Saudi Arabia",
    "loading unloading gallery Jeddah",
    "moving truck photos Saudi Arabia",
    "professional movers gallery Jeddah"
  ],
  openGraph: {
    title: "Gallery | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 View our extensive gallery showcasing the #1 best house moving, office relocation, packing, loading, and unloading services by Azan Packers & Movers in Saudi Arabia. See our professional work in Jeddah!",
    url: "https://www.azanmovers.com/gallery",
    siteName: "Azan Packers & Movers - Best Movers in Saudi Arabia",
    type: "website",
    images: galleryImages.map(img => `https://www.azanmovers.com${img.src}`),
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 See our professional moving operations in Saudi Arabia! Azan Packers & Movers, the #1 best moving company, provides top-notch services for all your relocation needs in Jeddah.",
    images: galleryImages.map(img => `https://www.azanmovers.com${img.src}`),
  },
  robots: "index, follow",
  script: [
    {
      type: "application/ld+json",
      json: structuredData
    },
    {
      type: "application/ld+json",
      json: breadcrumbData
    }
  ],
};

export default function GalleryLayout({ children }) {
  return <>{children}</>;
}
