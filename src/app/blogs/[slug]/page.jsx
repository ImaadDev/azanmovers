import Head from "next/head";
import Link from "next/link";

// Sample posts data (expanded for SEO & readability)
const posts = {
  "stress-free-house-moving": {
    title: "Tips for a Stress-Free House Moving in Jeddah",
    date: "2025-09-21",
    content: `
Moving can be stressful, but with proper planning, you can make it smooth and hassle-free. Here are key tips:

## 1. Plan Ahead
Start packing early and create a checklist for all items to avoid last-minute chaos.

## 2. Hire Professional Packers
Professional movers ensure the safety of your furniture and belongings, reducing risks of damage.

## 3. Label Everything
Clearly label boxes by room and contents to make unpacking easier.

## 4. Prepare an Essentials Bag
Keep important documents, chargers, toiletries, and essential items in a separate bag for immediate access.

## 5. Notify Relevant Parties
Inform utility providers, banks, and other services about your change of address in advance.

For more professional moving tips, check our [Services page](/services).
    `
  },
  "office-relocation-checklist": {
    title: "Office Relocation Checklist for Businesses",
    date: "2025-09-20",
    content: `
Relocating your office requires careful planning to avoid downtime and disruption. Follow this checklist:

## 1. Assess Your Current Space
Take inventory of office equipment, furniture, and documents.

## 2. Set a Relocation Timeline
Decide on dates for packing, transport, and setup at the new office.

## 3. Hire Expert Movers
Choose a moving company experienced in office relocations to handle heavy equipment safely.

## 4. IT & Network Setup
Plan for disconnection and reconnection of computers, servers, and network devices.

## 5. Notify Employees & Clients
Keep everyone informed about the move, new address, and contact details.

## 6. Label & Pack
Use clear labeling and secure packaging for all office items to ensure they arrive safely.

See our [Office Relocation service](/services#office-relocation) for assistance.
    `
  },
  "how-to-safely-dismantle": {
    title: "How to Safely Dismantle and Move Furniture",
    date: "2025-09-19",
    content: `
Dismantling furniture properly can prevent damage during moves. Follow these steps:

## 1. Gather Tools
Prepare screwdrivers, pliers, wrenches, and tape before starting.

## 2. Disassemble Carefully
Remove shelves, drawers, and detachable parts first. Keep screws and small parts in labeled bags.

## 3. Protect Surfaces
Wrap wooden and delicate parts with blankets or bubble wrap to avoid scratches.

## 4. Move Strategically
Use dollies and lifting straps to move heavy furniture safely.

## 5. Reassemble at Destination
Follow original assembly instructions or photos you took before dismantling.

Check out our [Furniture Dismantling service](/services#furniture-dismantling) for professional help.
    `
  }
};

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = posts[slug];

  if (!post) return <p>Post not found.</p>;

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.content.substring(0, 160).replace(/\n/g, " "),
    author: { "@type": "Organization", name: "Azan Packers & Movers" },
    publisher: {
      "@type": "Organization",
      name: "Azan Packers & Movers",
      logo: {
        "@type": "ImageObject",
        url: "https://www.azanmovers.com/logo.png"
      }
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} – Azan Packers & Movers</title>
        <meta name="description" content={post.content.substring(0, 160).replace(/\n/g, " ")} />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

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

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-24">
          <article>
            <header className="text-center mb-16 lg:mb-20">
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
                  Blog Post
                </span>
                <div
                  className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"
                />
              </div>

              <h1 className="text-3xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: '#374151' }}>
                {post.title}
              </h1>
              <p className="text-xs md:text-lg text-gray-500" style={{ color: '#6B7280' }}>
                Published on <time dateTime={post.date}>{post.date}</time>
              </p>
            </header>
            <section className="prose lg:prose-xl mx-auto" style={{ color: '#374151' }}>
              {post.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-lg md:text-3xl font-bold mt-8 mb-4" style={{ color: '#ED3F27' }}>{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-base md:text-2xl font-bold mt-6 mb-3" style={{ color: '#ED3F27' }}>{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('#### ')) {
                  return <h4 key={idx} className="text-sm md:text-xl font-bold mt-5 mb-2" style={{ color: '#ED3F27' }}>{paragraph.substring(5)}</h4>;
                } else {
                  // Simple regex to replace markdown links with Next.js Link components
                  const formattedParagraph = paragraph.replace(/\[(.*?)\]\((.*?)\)/g, (match, text, href) => {
                    return `<a href="${href}" class="text-red-600 hover:underline transition-colors duration-300">${text}</a>`;
                  });
                  return <p key={idx} className="mb-4 text-sm md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedParagraph }} />;
                }
              })}
            </section>
            <div className="mt-16 text-center">
              <Link
                href="/blogs"
                className="group relative inline-flex items-center px-8 py-4 text-sm md:text-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
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
