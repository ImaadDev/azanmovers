import Hero from "../components/Home/Hero";
import HomeServices from "../components/Home/HomeServices";
import FeaturedBlog from "../components/Home/FeaturedBlogs";
import FAQ from "../components/Home/FAQ";
import HomeGallery from "../components/Home/Gallery"; // Import the new Gallery component

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Azan Packers & Movers",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Aziziyah, Saudi Arabia",
    addressLocality: "Saudi Arabia",
    addressRegion: "Makkah Province",
    postalCode: "23334",
    addressCountry: "SA"
  },
  telephone: "+966551234567",
  url: "https://www.azanmovers.com",
  openingHours: "Mo-Su 08:00-22:00",
  serviceType: ["Home Moving", "Villas Moving", "Office Relocation", "Furniture Dismantling"]
};

export const metadata = {
  title: "Azan Packers & Movers – Saudi Arabia",
  description:
    "Azan Packers & Movers – Trusted moving company in Saudi Arabia offering home moving, villa relocation, office relocation, and furniture dismantling services.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Azan Packers & Movers – Saudi Arabia",
    description:
      "Azan Packers & Movers – Trusted moving company in Saudi Arabia offering home moving, villa relocation, office relocation, and furniture dismantling services.",
    url: "https://www.azanmovers.com",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azan Packers & Movers – Saudi Arabia",
    description:
      "Trusted moving company in Saudi Arabia offering home moving, villa relocation, office relocation, and furniture dismantling services.",
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
