import { Metadata } from 'next';
import Link from 'next/link';
import AdBanner from '@/components/AdBanner';

export const metadata: Metadata = {
  title: 'Document Conversion Tools - Doc2Any',
  description: 'Discover the best tools and software for document conversion. Compare features, learn about free and paid options for PDF, DOC, ODT, XLS, PPT conversions.',
  keywords: ['document conversion tools', 'PDF converter', 'file conversion software', 'office document tools'],
};

const conversionTools = [
  {
    category: 'PDF Conversion',
    tools: [
      {
        name: 'Adobe Acrobat',
        type: 'Premium',
        description: 'Industry standard for PDF creation and editing with advanced features.',
        features: ['High-quality conversion', 'OCR capabilities', 'Digital signatures', 'Form creation'],
        platforms: ['Windows', 'Mac', 'Web']
      },
      {
        name: 'PDFCreator',
        type: 'Free',
        description: 'Open-source PDF creation tool with basic conversion features.',
        features: ['Multiple format support', 'Batch processing', 'Password protection', 'Digital signatures'],
        platforms: ['Windows']
      },
      {
        name: 'LibreOffice',
        type: 'Free',
        description: 'Complete office suite with excellent PDF export capabilities.',
        features: ['Native PDF export', 'Form creation', 'Bookmarks', 'Security options'],
        platforms: ['Windows', 'Mac', 'Linux']
      }
    ]
  },
  {
    category: 'Office Document Conversion',
    tools: [
      {
        name: 'Microsoft Office',
        type: 'Premium',
        description: 'Native support for converting between Office formats and PDF.',
        features: ['Built-in conversion', 'Cloud integration', 'Collaboration features', 'Template library'],
        platforms: ['Windows', 'Mac', 'Web', 'Mobile']
      },
      {
        name: 'OnlyOffice',
        type: 'Freemium',
        description: 'Compatible office suite with good conversion capabilities.',
        features: ['Format compatibility', 'Real-time collaboration', 'Plugin support', 'Cloud storage'],
        platforms: ['Windows', 'Mac', 'Linux', 'Web']
      },
      {
        name: 'WPS Office',
        type: 'Freemium',
        description: 'Lightweight office suite with conversion features.',
        features: ['Small footprint', 'Fast performance', 'Cloud sync', 'Template gallery'],
        platforms: ['Windows', 'Mac', 'Linux', 'Mobile']
      }
    ]
  },
  {
    category: 'Batch Conversion',
    tools: [
      {
        name: 'Pandoc',
        type: 'Free',
        description: 'Universal document converter supporting numerous formats.',
        features: ['Command-line interface', '40+ formats', 'Scriptable', 'Extensible'],
        platforms: ['Windows', 'Mac', 'Linux']
      },
      {
        name: 'Total Doc Converter',
        type: 'Premium',
        description: 'Specialized tool for batch document conversion.',
        features: ['Batch processing', 'GUI interface', 'Format preservation', 'Automation'],
        platforms: ['Windows']
      },
      {
        name: 'Zamzar',
        type: 'Freemium',
        description: 'Online conversion service supporting many formats.',
        features: ['Web-based', 'No software installation', 'Email delivery', 'API access'],
        platforms: ['Web']
      }
    ]
  }
];

const conversionMatrix = [
  { from: 'DOC', to: ['PDF', 'ODT', 'HTML', 'TXT'], description: 'Microsoft Word documents' },
  { from: 'DOCX', to: ['PDF', 'ODT', 'HTML', 'TXT'], description: 'Modern Word format' },
  { from: 'ODT', to: ['PDF', 'DOC', 'DOCX', 'HTML'], description: 'OpenDocument Text' },
  { from: 'XLS', to: ['PDF', 'ODS', 'CSV', 'HTML'], description: 'Excel spreadsheets' },
  { from: 'XLSX', to: ['PDF', 'ODS', 'CSV', 'HTML'], description: 'Modern Excel format' },
  { from: 'ODS', to: ['PDF', 'XLS', 'XLSX', 'CSV'], description: 'OpenDocument Spreadsheet' },
  { from: 'PPT', to: ['PDF', 'ODP', 'HTML', 'Images'], description: 'PowerPoint presentations' },
  { from: 'PPTX', to: ['PDF', 'ODP', 'HTML', 'Images'], description: 'Modern PowerPoint format' },
  { from: 'ODP', to: ['PDF', 'PPT', 'PPTX', 'HTML'], description: 'OpenDocument Presentation' },
  { from: 'PDF', to: ['HTML', 'TXT', 'Images', 'DOC*'], description: 'Portable Document Format' },
  { from: 'RTF', to: ['PDF', 'DOC', 'ODT', 'HTML'], description: 'Rich Text Format' },
  { from: 'TXT', to: ['PDF', 'HTML', 'DOC', 'ODT'], description: 'Plain text files' }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Document Conversion Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best tools and software for all your document conversion needs. 
              From free solutions to professional-grade software.
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

      {/* Service Notice */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Our Conversion Service
            </h2>
            <p className="text-blue-800 mb-6">
              Our online document conversion service is currently undergoing maintenance to bring you 
              better features and improved performance. In the meantime, explore our recommended tools 
              and comprehensive guides below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Read Our Guides
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Matrix */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported Conversions
            </h2>
            <p className="text-xl text-gray-600">
              Overview of popular document format conversions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversionMatrix.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.from}
                  </span>
                  <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex flex-wrap gap-1">
                    {item.to.map((format, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * PDF to editable formats may have formatting limitations depending on the source document
            </p>
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

      {/* Recommended Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recommended Tools
            </h2>
            <p className="text-xl text-gray-600">
              Professional tools and software for document conversion
            </p>
          </div>

          {conversionTools.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">{tool.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        tool.type === 'Free' ? 'bg-green-100 text-green-800' :
                        tool.type === 'Freemium' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {tool.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Key Features:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Platforms:</h5>
                      <div className="flex flex-wrap gap-2">
                        {tool.platforms.map((platform, platformIndex) => (
                          <span key={platformIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our comprehensive guides help you select the right tool for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Our Guides
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ask an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
