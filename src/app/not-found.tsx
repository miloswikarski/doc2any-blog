import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <div className="text-sm text-gray-500">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 mr-4">
              Browse Blog
            </Link>
            <Link href="/tools" className="text-blue-600 hover:text-blue-700 mr-4">
              View Tools
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
