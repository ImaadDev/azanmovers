import Head from "next/head";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import SocialShareLinks from "@/components/SocialShareLinks";

// --- Sanity Configuration ---
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const query = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  summary,
  section,
  sections,
  content,
  images,
  publishedAt
}`;

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "blog"].slug.current`);
  return slugs.map((slug) => ({
    slug,
  }));
}


const portableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-8 leading-relaxed text-lg">{children}</p>,
    h1: ({ children }) => <h1 className="text-3xl font-extrabold mb-4 mt-12 border-b pb-2 border-gray-200">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mb-3 mt-8 text-[#ED3F27]">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-3 mt-6">{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-8 mb-8 space-y-3">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-8 mb-8 space-y-3">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg">{children}</li>,
    number: ({ children }) => <li className="text-lg">{children}</li>,
  },
};


// --- Main Blog Post Component ---
export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  // JSON-LD structured data (Kept for SEO professionalism)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    description: post.summary,
    author: { "@type": "Organization", name: "Azan Packers & Movers" },
    publisher: {
      "@type": "Organization",
      name: "Azan Packers & Movers",
      logo: {
        "@type": "ImageObject",
        url: "https://www.azanmovers.com/azanmovers-logo.png"
      }
    },
    // ... address kept
  };

  return (
    <>
      <Head>
        <title>{post.title} – Azan Packers & Movers</title>
        <meta name="description" content={post.summary} />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="relative overflow-hidden" style={{ backgroundColor: '#FFFCFB' }}>
        {/* Subtle background flair */}
        <div className="absolute top-0 left-0 w-full h-96 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(237, 63, 39, 0.15) 0%, transparent 60%)' }}
        />

        <div className="relative z-10 py-20 lg:py-32">
          <article>
            
            {/* Header Section */}
            <header className="mb-10 max-w-5xl mx-auto px-6 lg:px-8">
              <span
                className="text-sm font-semibold uppercase tracking-[0.3em] mb-4 inline-block"
                style={{ color: '#ED3F27' }}
              >
                FEATURED BLOG POST
              </span>
              
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight" style={{ color: '#374151' }}>
                {post.title}
              </h1>
              
              <div className="flex justify-between items-center space-x-6 pt-4 border-t border-b py-4 border-gray-200">
                <p className="text-base md:text-lg font-medium" style={{ color: '#6B7280' }}>
                  <span className="font-bold text-[#ED3F27]">Published:</span> <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </p>
                {/* Social Sharing Links */}
                <SocialShareLinks title={post.title} slug={post.slug} />
              </div>
            </header>

            {/* All Images Grid */}
            {post.images && post.images.length > 0 && (
              <div className="mb-16 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {post.images.map((image, idx) => (
                    <div key={idx} className="aspect-square overflow-hidden shadow-lg">
                      <img
                        src={urlFor(image).width(400).height(400).fit('crop').url()}
                        alt={image.alt || `Blog image ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content Container (Constrained width for optimal reading) */}
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

              {/* Summary/Introduction Block (Strong visual anchor) */}
              {post.summary && (
                <div className="mb-12 py-8 border-y-2 border-dashed" style={{ borderColor: '#ED3F27' }}>
                  <p className="text-2xl font-serif italic leading-snug" style={{ color: '#374151' }}>
                    {post.summary}
                  </p>
                </div>
              )}

              {/* Main Content Area */}
              <div className="mb-16">
                
                {/* Optional Section (Single) */}
                {post.section && (
                  <div className="mb-10 p-6 border-l-4" style={{ borderColor: '#ED3F27', backgroundColor: 'rgba(237, 63, 39, 0.03)' }}>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: '#ED3F27' }}>{post.section.title}</h2>
                    <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{post.section.description}</p>
                  </div>
                )}

                {/* Multiple Sections (Structured Data) */}
                {post.sections && post.sections.length > 0 && (
                  <div className="mb-10 space-y-10">
                    {post.sections.map((sec, idx) => (
                      <div key={idx} className="pb-5 border-b border-gray-100">
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#ED3F27' }}>{sec.title}</h3>
                        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{sec.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Portable Text Content - Images inserted here based on block count */}
                {post.content && (
                  <div className="text-base lg:text-lg leading-relaxed space-y-8" style={{ color: '#374151' }}>
                    <PortableText 
                      value={post.content} 
                      components={portableTextComponents}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Back Button (Footer style) */}
            <div className="mt-20 text-center py-12 border-t border-gray-300" style={{ backgroundColor: '#F9F9F9' }}>
              <Link
                href="/blogs"
                className="group relative inline-flex items-center px-12 py-4 text-lg font-bold text-white tracking-widest uppercase transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-300"
                style={{ backgroundColor: '#ED3F27', color: 'white' }}
              >
                <span className="relative z-10">← Back to All Blogs</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}