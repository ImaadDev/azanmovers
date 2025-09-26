import Link from "next/link";

// Sample blog posts (frontend only)
const blogPosts = [
  {
    id: 1,
    title: "Tips for a Stress-Free House Moving in Saudi Arabia",
    date: "2025-09-21",
    description: "Learn essential tips to make your house moving smooth and stress-free.",
    slug: "stress-free-house-moving"
  },
  {
    id: 2,
    title: "Office Relocation Checklist for Businesses in Saudi Arabia",
    date: "2025-09-20",
    description: "A complete checklist for relocating your office without disrupting work.",
    slug: "office-relocation-checklist"
  },
  {
    id: 3,
    title: "How to Safely Dismantle and Move Furniture in Saudi Arabia",
    date: "2025-09-19",
    description: "Step-by-step guide to dismantle and move furniture safely.",
    slug: "how-to-safely-dismantle"
  }
];

export default function BlogPage() {
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
    <main className="relative overflow-hidden" style={{ backgroundColor: '#FFFCFB' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-br from-red-500/3 to-orange-500/3 animate-blob filter blur-xl"
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/3 to-purple-500/3 animate-blob filter blur-xl animation-delay-2000"
          />
          <div
            className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/3 to-teal-500/3 animate-blob filter blur-xl animation-delay-4000"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-24">
          {/* Modern Header Section */}
          <header className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-4 mb-8">
              <div
                className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500"
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 border"
                style={{
                  color: '#ED3F27',
                  borderColor: '#ED3F27',
                  background: 'rgba(237, 63, 39, 0.05)'
                }}
              >
                Our Blog
              </span>
              <div
                className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"
              />
            </div>

            <h1
              className="text-3xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
            >
              Moving Insights
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                & Expert Tips
              </span>
            </h1>

            <p
              className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              style={{ color: '#6B7280' }}
            >
              Stay informed with our latest articles on stress-free moving, office relocations,
              and furniture handling in Saudi Arabia.
            </p>
          </header>

          {/* Blog Post Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white/70 backdrop-blur-xl border border-white/20 p-8 flex flex-col transition-all duration-300 hover:border-red-100 transform hover:-translate-y-2"
                itemScope
                itemType="https://schema.org/BlogPosting"
                style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
              >
                <header className="flex-grow">
                  <h2 className="text-lg md:text-2xl font-bold mb-3 leading-tight" itemProp="headline" style={{ color: '#374151' }}>
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="text-xs md:text-sm text-gray-500 mb-4 block"
                    itemProp="datePublished"
                  >
                    {post.date}
                  </time>
                </header>
                <p className="mb-6 text-sm md:text-lg leading-relaxed" itemProp="description" style={{ color: '#6B7280' }}>
                  {post.description}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-auto inline-flex items-center text-sm md:text-lg font-semibold transition-all duration-300 group"
                  style={{ color: '#ED3F27' }}
                  itemProp="url"
                >
                  {post.title}
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>

                {/* JSON-LD for each blog post */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "BlogPosting",
                      headline: post.title,
                      datePublished: post.date,
                      description: post.description,
                      author: {
                        "@type": "Organization",
                        name: "Azan Packers & Movers"
                      },
                      publisher: {
                        "@type": "Organization",
                        name: "Azan Packers & Movers",
                        logo: {
                          "@type": "ImageObject",
                          url: "https://www.azanmovers.com/azanmovers-logo.png"
                        }
                      },
                      mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `https://www.azanmovers.com/blogs/${post.slug}`
                      }
                    })
                  }}
                />
              </article>
            ))}
          </section>
        </div>
      </main>
  );
}
