import { Metadata } from 'next';
import AdBanner from '@/components/AdBanner';

export const metadata: Metadata = {
  title: 'Contact Us - Doc2Any',
  description: 'Get in touch with the Doc2Any team. Ask questions about document conversion, request tutorials, or share your feedback.',
  keywords: ['contact doc2any', 'document conversion help', 'support', 'feedback'],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about document conversion? Need help with a specific challenge? 
              We'd love to hear from you and help you find the right solution.
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

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="conversion-help">Conversion Help</option>
                    <option value="tutorial-request">Tutorial Request</option>
                    <option value="tool-recommendation">Tool Recommendation</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your document conversion challenge or question..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> We typically respond within 24-48 hours. For urgent matters, 
                  please include "URGENT" in your subject line.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@grapph.com</p>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                      <p className="text-gray-600">24-48 hours</p>
                      <p className="text-sm text-gray-500 mt-1">Monday to Friday, 9 AM - 5 PM CET</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                      <p className="text-gray-600">
                        <a href="https://grapph.com" className="text-blue-600 hover:text-blue-700">grapph.com</a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Visit our main website</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Do you provide free document conversion?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our conversion service is currently under maintenance. We recommend using the tools 
                      and guides featured on our site for your conversion needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Can you help with specific conversion problems?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Absolutely! We're happy to provide guidance and recommendations for your specific 
                      document conversion challenges.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Do you accept tutorial requests?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Yes! We welcome suggestions for new tutorials and guides. Let us know what topics 
                      you'd like us to cover.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ad Banner */}
              <div className="py-4">
                <AdBanner 
                  slot="1479201591" 
                  format="auto"
                  className="text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Attribution */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">About the Author</h3>
            <p className="text-gray-600 mb-4">
              Doc2Any is created and maintained by <strong>Milos Wikarski</strong>, a technology expert 
              with extensive experience in document management and file conversion.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://wikarski.com" 
                className="text-blue-600 hover:text-blue-700 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Author's Website →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
