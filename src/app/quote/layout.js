export const metadata = {
  title: "Request a Free Moving Quote – Azan Packers & Movers Saudi Arabia",
  description:
    "Get a free, no-obligation moving quotation from Azan Packers & Movers in Saudi Arabia. Professional house & office relocation, packing services, and safe transportation. Fill out the form to receive your personalized estimate today.",
  keywords: [
    "free moving quote",
    "moving estimate Saudi Arabia",
    "packing services",
    "house relocation",
    "office relocation",
    "Azan Packers & Movers",
    "Saudi Arabia movers",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Request a Free Moving Quote – Azan Packers & Movers Saudi Arabia",
    description:
      "Receive your free, no-obligation moving quotation from Azan Packers & Movers. Expert packing, safe transportation, and hassle-free house or office relocation in Saudi Arabia.",
    url: "https://azanmovers.vercel.app/get-quote",
    siteName: "Azan Packers & Movers",
    images: [
      {
        url: "https://azanmovers.vercel.app/images/moving-quote.jpg",
        width: 1200,
        height: 630,
        alt: "Azan Packers & Movers – Free Moving Quote",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Free Moving Quote – Azan Packers & Movers Saudi Arabia",
    description:
      "Fill out the form to get your free moving quotation from Azan Packers & Movers. Safe, professional house & office relocation in Saudi Arabia.",
    images: ["https://azanmovers.vercel.app/images/moving-quote.jpg"],
  },
};

export default function QuoteLayout({ children }) {
  return <>{children}</>;
}
