import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact Azan Packers & Movers | Moving Company in Saudi Arabia | Get Free Quote",
  description: "Contact Azan Packers & Movers for professional moving services in Saudi Arabia. Get a free quote for house moving, office relocation, and furniture services in Jeddah. Call +966 593694941 or email info@azanmovers.com.",
  keywords: [
    "contact azan movers",
    "moving company saudi arabia contact",
    "free quote jeddah",
    "house moving contact saudi arabia",
    "office relocation jeddah",
    "furniture services contact saudi arabia",
    "azan packers movers phone",
    "moving services quote saudi arabia",
    "professional movers contact jeddah",
    "get free moving quote saudi arabia"
  ],
  openGraph: {
    title: "Contact Azan Packers & Movers | Moving Company in Saudi Arabia | Get Free Quote",
    description: "Contact Azan Packers & Movers for professional moving services in Saudi Arabia. Get a free quote for house moving, office relocation, and furniture services in Jeddah.",
    url: "https://www.azanmovers.com/contact",
    siteName: "Azan Packers & Movers - Best Movers in Saudi Arabia",
    images: [
      {
        url: "https://www.azanmovers.com/azanmovers-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Azan Packers & Movers - Moving Company in Saudi Arabia"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Azan Packers & Movers | Moving Company in Saudi Arabia | Get Free Quote",
    description: "Contact Azan Packers & Movers for professional moving services in Saudi Arabia. Get a free quote for house moving, office relocation, and furniture services in Jeddah.",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"]
  },
  robots: "index, follow"
};

export default function ContactPage() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const embededMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.8692533821627!2d39.1703762!3d21.5910261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d08e60d904d3%3A0x35244bf1c8a78a59!2sIbn%20Qasim%20Al%20Khawarizmi%2C%20Al%20Bawadi%2C%20Jeddah%2023443!5e0!3m2!1sen!2ssa!4v1758548605794!5m2!1sen!2ssa'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitStatus("success");
          e.target.reset();
        },
        () => setSubmitStatus("error")
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: "#FFFCFB" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-br from-red-500/3 to-orange-500/3 animate-blob filter blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/3 to-purple-500/3 animate-blob filter blur-xl animation-delay-2000" />
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/3 to-teal-500/3 animate-blob filter blur-xl animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500" />
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 border"
              style={{
                color: "#ED3F27",
                borderColor: "#ED3F27",
                background: "rgba(237, 63, 39, 0.05)",
              }}
            >
              Contact Us
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
          </div>

          <h1 className="text-3xl lg:text-7xl font-black mb-8 leading-none tracking-tight" style={{ color: "#374151" }}>
            Get in Touch
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              With Azan Movers
            </span>
          </h1>

          <p className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light" style={{ color: "#6B7280" }}>
            We are here to answer your questions and provide a seamless moving experience. Reach out to us today!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20 lg:mb-24">
          {/* Contact Information */}
          <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: "#374151" }}>
              Our Details
            </h2>
            <div className="space-y-6 text-sm md:text-lg" style={{ color: "#6B7280" }}>
              <div className="flex items-start gap-4">
                <strong>Phone:</strong>{" "}
                <a href="tel:+966551234567" className="text-red-600 hover:underline">
                  +966 593694941
                </a>
              </div>
              <div className="flex items-start gap-4">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@azanmovers.com" className="text-red-600 hover:underline">
                  info@azanmovers.com
                </a>
              </div>
              <div className="flex items-start gap-4">
                <strong>Address:</strong> Ibn Qasim Al Khawarizmi
                Al Bawadi, Jeddah 23443, Saudi Arabia,
                <a href="https://maps.app.goo.gl/MM8BkbSVEWEWXtXLA?g_st=awb">Get Direction</a>
              </div>
              <div className="flex items-start gap-4">
                <strong>Opening Hours:</strong> 24 Hours Everyday
              </div>
            </div>
          </section>

          <ContactForm />
        </div>

        {/* Map Section */}
        <section className="mb-20 lg:mb-24">
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-center" style={{ color: "#374151" }}>
            Our Location
          </h2>
          <div className="w-full h-80 lg:h-96 overflow-hidden border border-white/20">
            <iframe
              src={embededMap}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Azan Packers & Movers Location on Google Maps"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
