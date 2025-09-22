import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative overflow-hidden flex items-center justify-center min-h-[calc(100vh-theme(spacing.20))] md:min-h-[calc(100vh-theme(spacing.20))]">
      {/* Animated Background Elements (optional, can be simplified) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-br from-red-500/3 to-orange-500/3 animate-blob filter blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/3 to-purple-500/3 animate-blob filter blur-xl animation-delay-2000" />
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/3 to-teal-500/3 animate-blob filter blur-xl animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center bg-white/80 backdrop-blur-xl border border-white/20 p-8 md:p-12 shadow-lg max-w-lg mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-4" style={{ color: '#ED3F27' }}>404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: '#374151' }}>Page Not Found</h2>
        <p className="text-lg text-gray-700 mb-8">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
          style={{ backgroundColor: '#ED3F27' }}
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  );
}
