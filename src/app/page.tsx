import Link from 'next/link';
import AdBanner from '@/components/AdBanner';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Document <span className="text-blue-600">Conversion</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your ultimate resource for document conversion insights, tutorials, and expert tips.
              Learn everything about PDF, DOC, ODT, XLS, PPT conversions and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Blog
              </Link>
              <Link
                href="/tools"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="py-8">
        <AdBanner
          slot="8139513593"
          format="link"
          className="text-center"
        />
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Doc2Any?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive guides and insights for all your document conversion needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Tutorials</h3>
              <p className="text-gray-600">
                Step-by-step guides for converting between all major document formats with professional tips.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">
                Quick solutions and reliable methods for all your document conversion challenges.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Library</h3>
              <p className="text-gray-600">
                Extensive collection of articles covering every aspect of document conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Conversions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Conversions
            </h2>
            <p className="text-xl text-gray-600">
              Most searched document conversion topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { from: 'DOC', to: 'PDF', desc: 'Word to PDF conversion' },
              { from: 'PDF', to: 'HTML', desc: 'PDF to web format' },
              { from: 'XLS', to: 'ODS', desc: 'Excel to OpenOffice' },
              { from: 'PPT', to: 'PDF', desc: 'PowerPoint to PDF' },
              { from: 'ODT', to: 'DOC', desc: 'OpenOffice to Word' },
              { from: 'RTF', to: 'PDF', desc: 'Rich Text to PDF' },
              { from: 'TXT', to: 'HTML', desc: 'Text to web format' },
              { from: 'DOCX', to: 'ODT', desc: 'Word to OpenOffice' }
            ].map((conversion, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {conversion.from}
                  </span>
                  <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {conversion.to}
                  </span>
                </div>
                <p className="text-gray-600 text-center text-sm">{conversion.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="py-8">
        <AdBanner
          slot="1479201591"
          format="auto"
          className="text-center"
        />
      </div>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest document conversion tips and tutorials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* These will be replaced with actual blog posts */}
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Complete Guide to PDF Conversion
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn everything about converting documents to and from PDF format with our comprehensive guide.
                </p>
                <Link href="/blog/pdf-conversion-guide" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Office vs OpenOffice Formats
                </h3>
                <p className="text-gray-600 mb-4">
                  Understanding the differences between Microsoft Office and OpenOffice document formats.
                </p>
                <Link href="/blog/office-vs-openoffice" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Batch Conversion Techniques
                </h3>
                <p className="text-gray-600 mb-4">
                  Efficient methods for converting multiple documents at once to save time and effort.
                </p>
                <Link href="/blog/batch-conversion" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
