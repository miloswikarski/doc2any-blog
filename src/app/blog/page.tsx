import Link from 'next/link';
import { Metadata } from 'next';
import AdBanner from '@/components/AdBanner';

export const metadata: Metadata = {
  title: 'Document Conversion Blog',
  description: 'Expert insights, tutorials, and tips for document conversion. Learn about PDF, DOC, ODT, XLS, PPT conversions and more.',
  keywords: ['document conversion blog', 'PDF tutorials', 'file conversion guides', 'office documents'],
};

// Mock blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 'pdf-conversion-guide',
    title: 'Complete Guide to PDF Conversion',
    excerpt: 'Learn everything about converting documents to and from PDF format with our comprehensive guide covering all major tools and techniques.',
    date: '2024-01-15',
    category: 'PDF',
    readTime: '8 min read',
    image: '/images/pdf-guide.jpg'
  },
  {
    id: 'office-vs-openoffice',
    title: 'Office vs OpenOffice Formats: What You Need to Know',
    excerpt: 'Understanding the differences between Microsoft Office and OpenOffice document formats, compatibility issues, and conversion best practices.',
    date: '2024-01-12',
    category: 'Office',
    readTime: '6 min read',
    image: '/images/office-formats.jpg'
  },
  {
    id: 'batch-conversion',
    title: 'Batch Conversion Techniques for Productivity',
    excerpt: 'Efficient methods for converting multiple documents at once to save time and effort. Tools, scripts, and automation techniques.',
    date: '2024-01-10',
    category: 'Productivity',
    readTime: '10 min read',
    image: '/images/batch-conversion.jpg'
  },
  {
    id: 'winmail-dat-explained',
    title: 'Understanding Winmail.dat Files and How to Open Them',
    excerpt: 'Complete guide to handling Microsoft Outlook Winmail.dat attachments, including conversion tools and prevention methods.',
    date: '2024-01-08',
    category: 'Email',
    readTime: '5 min read',
    image: '/images/winmail-dat.jpg'
  },
  {
    id: 'html-conversion-seo',
    title: 'Converting Documents to HTML for Better SEO',
    excerpt: 'How to convert your documents to HTML format for web publishing, SEO benefits, and maintaining formatting integrity.',
    date: '2024-01-05',
    category: 'Web',
    readTime: '7 min read',
    image: '/images/html-conversion.jpg'
  },
  {
    id: 'spreadsheet-formats',
    title: 'Excel vs ODS: Choosing the Right Spreadsheet Format',
    excerpt: 'Comprehensive comparison of Excel and OpenDocument Spreadsheet formats, conversion methods, and compatibility considerations.',
    date: '2024-01-03',
    category: 'Spreadsheets',
    readTime: '6 min read',
    image: '/images/spreadsheet-formats.jpg'
  }
];

const categories = ['All', 'PDF', 'Office', 'Productivity', 'Email', 'Web', 'Spreadsheets'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Document Conversion Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, tutorials, and tips for all your document conversion needs. 
              Stay updated with the latest techniques and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="py-8 bg-white">
        <AdBanner 
          slot="8139513593" 
          format="link"
          className="text-center"
        />
      </div>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Load More Posts
            </button>
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
    </div>
  );
}
