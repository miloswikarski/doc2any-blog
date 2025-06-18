import { Metadata } from 'next';
import Link from 'next/link';
import AdBanner from '@/components/AdBanner';

export const metadata: Metadata = {
  title: 'About Doc2Any - Document Conversion Experts',
  description: 'Learn about Doc2Any, your trusted resource for document conversion insights, tutorials, and expert tips. Created by Milos Wikarski.',
  keywords: ['about doc2any', 'document conversion experts', 'milos wikarski', 'grapph.com'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Doc2Any
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted resource for document conversion insights, tutorials, and expert tips. 
            We help you master the art of converting between all major document formats.
          </p>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="py-8 bg-gray-50">
        <AdBanner 
          slot="8139513593" 
          format="link"
          className="text-center"
        />
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Doc2Any began as a simple document conversion service, helping users convert between
              various file formats quickly and efficiently. Over time, we recognized the need for
              comprehensive educational content about document conversion best practices, tools,
              and techniques.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Today, we've evolved into a comprehensive resource hub, providing expert insights, 
              detailed tutorials, and practical tips for anyone working with document conversion. 
              Whether you're a business professional, student, or developer, our content helps 
              you navigate the complex world of file formats and conversion tools.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What We Cover</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">PDF Conversion</h3>
                <p className="text-blue-700">
                  Comprehensive guides for converting to and from PDF format, including 
                  optimization techniques and best practices.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Office Documents</h3>
                <p className="text-green-700">
                  Expert insights on Microsoft Office and OpenOffice formats, 
                  compatibility issues, and conversion strategies.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Batch Processing</h3>
                <p className="text-purple-700">
                  Efficient techniques for converting multiple documents simultaneously, 
                  saving time and improving productivity.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">Web Formats</h3>
                <p className="text-orange-700">
                  Converting documents for web use, including HTML conversion, 
                  SEO considerations, and accessibility.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>

            <p className="text-lg text-gray-600 mb-8">
              We believe that document conversion should be accessible, efficient, and reliable. 
              Our mission is to educate and empower users with the knowledge and tools they need 
              to handle any document conversion challenge confidently.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Quality:</strong> We provide accurate, tested, and reliable information</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Accessibility:</strong> Our content is clear and understandable for all skill levels</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Innovation:</strong> We stay current with the latest tools and techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Community:</strong> We foster a supportive environment for learning and sharing</span>
                </li>
              </ul>
            </div>

            {/* Ad Banner */}
            <div className="my-12">
              <AdBanner 
                slot="1479201591" 
                format="auto"
                className="text-center"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">About the Author</h2>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <span className="text-2xl font-bold text-blue-800">MW</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Milos Wikarski</h3>
                  <p className="text-gray-600 mb-4">
                    Milos is a technology expert with extensive experience in document management, 
                    file conversion, and web development. He has been helping users solve document 
                    conversion challenges for over a decade.
                  </p>
                  <p className="text-gray-600">
                    Visit his personal website at{' '}
                    <a href="https://wikarski.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      wikarski.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Get in Touch</h2>

            <p className="text-lg text-gray-600 mb-8">
              Have questions about document conversion? Need help with a specific challenge? 
              We'd love to hear from you and help you find the right solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Contact Us
              </Link>
              <Link 
                href="/blog" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2024 <a href="https://grapph.com" className="text-blue-600 hover:text-blue-700 font-medium">Grapph.com</a>. 
            All rights reserved. Created by{' '}
            <a href="https://wikarski.com" className="text-blue-600 hover:text-blue-700 font-medium">Milos Wikarski</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
