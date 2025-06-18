interface StructuredDataProps {
  type: 'website' | 'article' | 'organization';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData;

  switch (type) {
    case 'website':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Doc2Any",
        "description": "Expert insights, tutorials, and tools for document conversion",
        "url": "https://doc2any.grapph.com",
        "publisher": {
          "@type": "Organization",
          "name": "Grapph.com",
          "url": "https://grapph.com"
        },
        "author": {
          "@type": "Person",
          "name": "Milos Wikarski",
          "url": "https://wikarski.com"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://doc2any.grapph.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
      break;

    case 'article':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "image": data.image || "https://doc2any.grapph.com/images/default-article.jpg",
        "author": {
          "@type": "Person",
          "name": "Milos Wikarski",
          "url": "https://wikarski.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Grapph.com",
          "url": "https://grapph.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://doc2any.grapph.com/images/logo.png"
          }
        },
        "datePublished": data.publishedDate,
        "dateModified": data.modifiedDate || data.publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data.url
        },
        "keywords": data.keywords
      };
      break;

    case 'organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Doc2Any",
        "description": "Expert insights, tutorials, and tools for document conversion",
        "url": "https://doc2any.grapph.com",
        "logo": "https://doc2any.grapph.com/images/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@grapph.com"
        },
        "founder": {
          "@type": "Person",
          "name": "Milos Wikarski",
          "url": "https://wikarski.com"
        },
        "sameAs": [
          "https://twitter.com/doc2any",
          "https://facebook.com/doc2any"
        ]
      };
      break;

    default:
      structuredData = data;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
