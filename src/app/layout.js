// src/app/layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google"; // ✅ import font
import WhatsAppButton from "../components/WhatsappButton";
import { Analytics } from "@vercel/analytics/next"

// Load Montserrat (adjust weights & subsets as needed)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add weights you need
  display: "swap",
});

export const metadata = {
  title: "Azan Packers & Movers – Saudi Arabia",
  description:
    "Professional packers and movers in Saudi Arabia. House moving, office relocation, furniture dismantling services.",
  keywords: [
    "Packers and Movers Saudi Arabia",
    "House Moving Saudi Arabia",
    "Office Relocation Saudi Arabia",
    "Furniture Dismantling Saudi Arabia",
  ],
  openGraph: {
    title: "Azan Packers & Movers – Saudi Arabia",
    description:
      "Reliable packers and movers in Saudi Arabia offering house moving, office relocation, and furniture dismantling.",
    url: "https://azanmovers.vercel.app",
    siteName: "Azan Packers & Movers",
    images: [
      {
        url: "https://azanmovers.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azan Packers & Movers – Saudi Arabia",
    description:
      "Reliable packers and movers in Saudi Arabia offering house moving, office relocation, and furniture dismantling.",
    creator: "@AzanMovers",
    images: ["https://azanmovers.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Azan Packers & Movers",
    image: "https://azanmovers.vercel.app/logo.png",
    telephone: "+966551234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Aziziyah, Saudi Arabia",
      addressLocality: "Saudi Arabia",
      addressRegion: "Makkah Province",
      postalCode: "23334",
      addressCountry: "SA",
    },
    url: "https://azanmovers.vercel.app",
    openingHours: "Mo-Su 08:00-22:00",
    sameAs: [
      "https://www.facebook.com/AzanMovers",
      "https://www.instagram.com/AzanMovers",
    ],
  };

  return (
    <html lang="en">
      {/* ✅ Apply font globally */}
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        <Analytics/>
        <Header />
        <main className="flex-grow mt-10 md:mt-20">{children}</main>
        <WhatsAppButton/>
        <Footer />

        {/* LocalBusiness JSON-LD for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
      </body>
    </html>
  );
}
