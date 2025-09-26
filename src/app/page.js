import Hero from "../components/Home/Hero";
import HomeServices from "../components/Home/HomeServices";
import FeaturedBlog from "../components/Home/FeaturedBlogs";
import FAQ from "../components/Home/FAQ";
import HomeGallery from "../components/Home/Gallery"; // Import the new Gallery component

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Azan Packers & Movers",
  alternateName: "Azan Movers",
  description: "Best moving company in Saudi Arabia offering professional house moving, office relocation, furniture dismantling, and storage services in Jeddah and across Saudi Arabia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ibn Qasim Al Khawarizmi Al Bawadi",
    addressLocality: "Jeddah",
    addressRegion: "Makkah Province",
    postalCode: "23443",
    addressCountry: "SA"
  },
  telephone: "+966593694941",
  email: "info@azanmovers.com",
  url: "https://www.azanmovers.com",
  openingHours: "Mo-Su 08:00-22:00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1"
  },
  serviceType: ["House Moving", "Office Relocation", "Furniture Dismantling", "Storage Solutions", "Packing Services", "Loading Services", "Unloading Services"],
  areaServed: [
    {
      "@type": "City",
      name: "Jeddah"
    },
    {
      "@type": "Country", 
      name: "Saudi Arabia"
    }
  ]
};

export const metadata = {
  title: "Best Moving Company in Saudi Arabia | Azan Packers & Movers Jeddah",
  description:
    "Top-rated moving company in Saudi Arabia! Professional packers and movers in Jeddah offering house moving, office relocation, furniture dismantling, and storage services. Trusted by thousands of families and businesses across Saudi Arabia. Get free quote today!",
  keywords: [
    "best moving company Saudi Arabia",
    "top movers Jeddah",
    "professional packers and movers Saudi Arabia",
    "house moving services Jeddah",
    "office relocation Saudi Arabia",
    "furniture dismantling Jeddah",
    "moving company Jeddah",
    "packers and movers Saudi Arabia",
    "reliable movers Jeddah",
    "affordable moving services Saudi Arabia"
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Best Moving Company in Saudi Arabia | Azan Packers & Movers",
    description:
      "Top-rated moving company in Saudi Arabia! Professional packers and movers in Jeddah offering house moving, office relocation, furniture dismantling, and storage services. Trusted by thousands of families and businesses.",
    url: "https://www.azanmovers.com",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
    siteName: "Azan Packers & Movers - Best Movers in Saudi Arabia"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Moving Company in Saudi Arabia | Azan Packers & Movers",
    description:
      "Top-rated moving company in Saudi Arabia! Professional packers and movers in Jeddah offering house moving, office relocation, furniture dismantling, and storage services.",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },
  script: [
    { 
      type: "application/ld+json",
      json: structuredData
    },
  ],
};

export default function Home() {
  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: '#FDF4E3' }}>
      <Hero />
      <HomeServices />
      <FeaturedBlog />
      <HomeGallery />{/* Add the new Gallery component here */}
      <FAQ />
    </main>
  );
}
