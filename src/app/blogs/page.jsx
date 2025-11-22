import Head from "next/head"; // Import Head for SEO elements
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { FaCalendarAlt, FaChevronRight } from "react-icons/fa"; // Using icons for professionalism

// --- Sanity Configuration ---
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const query = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  summary,
  publishedAt,
  images
}`;

// --- Component Definition ---
export default async function BlogPage() {
  const blogPosts = await client.fetch(query);

  // --- SEO Data ---
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
      "Moving tips, relocation guides, and insights from Azan Packers & Movers in Jeddah.",
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

  return (
    <>
      <Head>
        <title>Blog - Moving Insights & Expert Tips – Azan Packers & Movers</title>
        <meta
          name="description"
          content="Stay informed with our latest articles on stress-free moving, office relocations, and furniture handling in Saudi Arabia."
        />
        <meta name="robots" content="index, follow" />
        {/* Inject Blog and Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <main className="relative overflow-hidden" style={{ backgroundColor: '#FFFCFB' }}>
        {/* Subtle, Non-Animated Background Gradient for Professionalism */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(237, 63, 39, 0.3) 0%, transparent 40%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          {/* Professional Header Section */}
          <header className="text-center mb-16 lg:mb-24">
            <span
              className="text-sm font-bold uppercase tracking-[0.3em] mb-4 inline-block"
              style={{ color: '#ED3F27' }}
            >
              LATEST ARTICLES
            </span>

            <h1
              className="text-5xl lg:text-7xl font-black mb-6 leading-none tracking-tight"
              style={{ color: '#374151' }}
            >
              Moving Insights
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                & Expert Tips
              </span>
            </h1>

            <p
              className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed font-light"
              style={{ color: '#6B7280' }}
            >
              Stay informed with our latest articles and guides designed to make your local and international relocation process **seamless and stress-free**.
            </p>
          </header>
          {/* --- Blog Post Grid --- */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post._id}
                className="bg-white border border-gray-100 shadow-lg flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-red-300"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* Image Section */}
                {post.images && post.images[0] && (
                  <Link href={`/blogs/${post.slug.current}`}>
                    <img
                      src={urlFor(post.images[0]).width(600).height(400).url()}
                      alt={post.title}
                      className="w-full h-56 object-cover border-b border-gray-100" // Removed rounded-lg
                    />
                  </Link>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  {/* Metadata */}
                  <div className="flex items-center text-sm mb-3 text-gray-500">
                    <FaCalendarAlt className="mr-2 text-[#ED3F27]" />
                    <time
                      dateTime={post.publishedAt}
                      itemProp="datePublished"
                    >
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                  </div>

                  {/* Title and Summary */}
                  <header className="flex-grow mb-4">
                    <Link href={`/blogs/${post.slug.current}`}>
                      <h2 
                        className="text-xl md:text-2xl font-bold leading-snug transition-colors duration-300 hover:text-red-600" 
                        itemProp="headline" 
                        style={{ color: '#374151' }}
                      >
                        {post.title}
                      </h2>
                    </Link>
                  </header>
                  <p className="mb-6 text-base leading-relaxed" itemProp="description" style={{ color: '#6B7280' }}>
                    {post.summary}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blogs/${post.slug.current}`}
                    className="mt-auto inline-flex items-center text-base font-semibold transition-all duration-300 group hover:text-red-700"
                    style={{ color: '#ED3F27' }}
                    itemProp="url"
                  >
                    Continue Reading
                    <FaChevronRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}