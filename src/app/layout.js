// src/app/layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google"; // ✅ import font
import WhatsAppButton from "../components/WhatsappButton";
import { Analytics } from "@vercel/analytics/next";
import CanonicalTag from "../components/CanonicalTag";
import GoogleAnalytics from "../components/GoogleAnalytics";

// Load Montserrat (adjust weights & subsets as needed)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add weights you need
  display: "swap",
});

const GA_MEASUREMENT_ID = process.env.NEXT_GOOGLE_ANALYTICS_ID;

export const metadata = {
  title: "Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
  description:
    "Moving Company in Saudi Arabia! Professional packers and movers in Jeddah offering house moving, office relocation, furniture dismantling, and storage services. Trusted by thousands of families and businesses across Saudi Arabia. Get free quote today!",
  keywords: [
    "best moving company Saudi Arabia",
    "best movers in Jeddah",
    "top moving company Saudi Arabia",
    "top movers Jeddah",
    "professional packers and movers Saudi Arabia",
    "house moving services Jeddah",
    "office relocation Saudi Arabia",
    "furniture dismantling Jeddah",
    "moving company Jeddah",
    "packers and movers Saudi Arabia",
    "reliable movers Jeddah",
    "affordable moving services Saudi Arabia",
    "international movers Jeddah",
    "storage solutions Saudi Arabia",
    "best movers in Saudi",
    "top packers and movers Jeddah",
    "professional moving services Saudi Arabia",
    "trusted movers Jeddah",
    "expert moving company Saudi Arabia",
    "premium movers Jeddah",
    "movers in Riyadh",
    "moving company in Mecca",
    "relocation services in Medina",
    "best movers in Dammam",
    "house moving Riyadh",
    "office relocation Jeddah",
    "furniture movers Saudi Arabia",
    "packing services Mecca",
    "storage in Medina",
    "commercial movers Dammam",
    "residential moving Saudi Arabia",
    "local movers Jeddah",
    "long distance movers Saudi Arabia",
    "furniture assembly Riyadh",
    "unpacking services Mecca",
    "loading unloading Medina",
    "jeipsing services Dammam",
    "azan movers Saudi Arabia"
  ],
  openGraph: {
    title: "Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "Moving Company in Saudi Arabia! Professional packers and movers in Jeddah offering house moving, office relocation, furniture dismantling, and storage services. Trusted by thousands of families and businesses across Saudi Arabia.",
    url: "https://www.azanmovers.com",
    siteName: "Azan Packers & Movers - Best Movers in Saudi Arabia",
    images: [
      {
        url: "https://www.azanmovers.com/azanmovers-logo.png",
        width: 1200,
        height: 630,
        alt: "Azan Packers & Movers - Best Moving Company in Saudi Arabia and Jeddah"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "Best Moving Company in Saudi Arabia! Professional packers and movers in Jeddah offering house moving, office relocation, furniture dismantling, and storage services. Trusted by thousands of families and businesses.",
    creator: "@AzanMovers",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },
  icons: {
    icon: [
      { url: "/azanmovers-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/azanmovers-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/azanmovers-logo.png",
    shortcut: "/azanmovers-logo.png",
  },
};

export default function RootLayout({ children }) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "Azan Packers & Movers",
    alternateName: "Azan Movers",
    description: "Best moving company in Saudi Arabia offering professional house moving, office relocation, furniture dismantling, and storage services in Jeddah and across Saudi Arabia.",
    image: "https://www.azanmovers.com/azanmovers-logo.png",
    logo: "https://www.azanmovers.com/azanmovers-logo.png",
    telephone: "+966593694941",
    email: "info@azanmovers.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ibn Qasim Al Khawarizmi Al Bawadi",
      addressLocality: "Jeddah",
      addressRegion: "Makkah Province",
      postalCode: "23443",
      addressCountry: "SA",
    },
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Moving Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "House Moving Services",
            description: "Professional house moving services in Jeddah and Saudi Arabia"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Relocation",
            description: "Complete office relocation services for businesses"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Furniture Dismantling",
            description: "Expert furniture dismantling and assembly services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Storage Solutions",
            description: "Secure storage solutions for your belongings"
          }
        }
      ]
    },
    areaServed: [
      {
        "@type": "City",
        name: "Jeddah"
      },
      {
        "@type": "Country",
        name: "Saudi Arabia"
      }
    ],
    sameAs: [
      "https://www.facebook.com/AzanMovers",
      "https://www.instagram.com/AzanMovers",
    ],
  };

  return (
    <html lang="en">
      {/* ✅ Apply font globally */}
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
         {/* ✅ Google Analytics */}
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        <Header />
        <main className="flex-grow mt-10 md:mt-20">{children}</main>
        <WhatsAppButton/>
        <Footer />
        <CanonicalTag />
        {/* LocalBusiness JSON-LD for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
      </body>
    </html>
  );
}
