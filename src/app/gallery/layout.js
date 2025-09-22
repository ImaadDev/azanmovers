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
  "url": "https://azanmovers.vercel.app/gallery",
  "description": "Gallery of house moving, office relocation, and furniture dismantling services in Saudi Arabia.",
  "image": galleryImages.map((img) => ({
    "@type": "ImageObject",
    "url": `https://azanmovers.vercel.app${img.src}`,
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
      "url": "https://azanmovers.vercel.app/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://azanmovers.vercel.app/gallery"
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
      "item": "https://azanmovers.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://azanmovers.vercel.app/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Gallery",
      "item": "https://azanmovers.vercel.app/gallery"
    }
  ]
};

export const metadata = {
  title: "Gallery – Azan Packers & Movers Saudi Arabia",
  description:
    "Explore the professional moving services of Azan Packers & Movers in Saudi Arabia through our gallery of house moving, office relocation, and furniture dismantling.",
  openGraph: {
    title: "Gallery – Azan Packers & Movers Saudi Arabia",
    description:
      "View our extensive gallery showcasing house moving, office relocation, packing, loading, and unloading services by Azan Packers & Movers in Saudi Arabia.",
    url: "https://azanmovers.vercel.app/gallery",
    siteName: "Azan Packers & Movers",
    type: "website",
    images: galleryImages.map(img => `https://azanmovers.vercel.app${img.src}`),
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery – Azan Packers & Movers Saudi Arabia",
    description:
      "See our professional moving operations in Saudi Arabia. Azan Packers & Movers provides top-notch services for all your relocation needs.",
    images: galleryImages.map(img => `https://azanmovers.vercel.app${img.src}`),
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
