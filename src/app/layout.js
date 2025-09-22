// src/app/layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google"; // ✅ import font

// Load Montserrat (adjust weights & subsets as needed)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add weights you need
  display: "swap",
});

export const metadata = {
  title: "Azan Packers & Movers – Jeddah",
  description:
    "Professional packers and movers in Jeddah. House moving, office relocation, furniture dismantling services.",
  keywords: [
    "Packers and Movers Jeddah",
    "House Moving Jeddah",
    "Office Relocation Jeddah",
    "Furniture Dismantling Jeddah",
  ],
  openGraph: {
    title: "Azan Packers & Movers – Jeddah",
    description:
      "Reliable packers and movers in Jeddah offering house moving, office relocation, and furniture dismantling.",
    url: "https://www.azanmovers.com",
    siteName: "Azan Packers & Movers",
    images: [
      {
        url: "https://www.azanmovers.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azan Packers & Movers – Jeddah",
    description:
      "Reliable packers and movers in Jeddah offering house moving, office relocation, and furniture dismantling.",
    creator: "@AzanMovers",
    images: ["https://www.azanmovers.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Azan Packers & Movers",
    image: "https://www.azanmovers.com/logo.png",
    telephone: "+966551234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Aziziyah, Jeddah",
      addressLocality: "Jeddah",
      addressRegion: "Makkah Province",
      postalCode: "23334",
      addressCountry: "SA",
    },
    url: "https://www.azanmovers.com",
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
        <Header />
        <main className="flex-grow mt-10 md:mt-20">{children}</main>
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
