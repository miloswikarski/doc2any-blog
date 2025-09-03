# Doc2Any - Document Conversion Blog

A modern, SEO-optimized blog site focused on document conversion insights, tutorials, and expert tips. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Structured data, meta tags, sitemap, robots.txt
- **Google Ads Integration**: AdSense implementation with proper error handling
- **Performance Focused**: Core Web Vitals monitoring, image optimization
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Blog System**: Multi-page blog with categorization and search-friendly URLs
- **Analytics**: Google Analytics 4 integration with Web Vitals tracking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog posts and listing
│   ├── tools/             # Tools and resources page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with SEO and analytics
│   ├── page.tsx           # Homepage
│   ├── loading.tsx        # Loading UI
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer with attribution
│   ├── AdBanner.tsx       # Google AdSense component
│   ├── StructuredData.tsx # JSON-LD structured data
│   └── WebVitals.tsx      # Performance monitoring
└── types/                 # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd doc2any-blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding Blog Posts

1. Create a new directory in `src/app/blog/[post-slug]/`
2. Add a `page.tsx` file with the blog post content
3. Update the blog listing in `src/app/blog/page.tsx`
4. The sitemap will automatically include your new post (no manual update needed!)

### SEO Optimization

Each page includes:

- Comprehensive meta tags
- Open Graph and Twitter Card data
- Structured data (JSON-LD)
- Semantic HTML structure
- Optimized images and performance

#### Robots.txt & Sitemap

The site includes automated SEO file generation:

- **Dynamic Sitemap** (`/sitemap.xml`): Automatically discovers blog posts and includes all pages
- **Smart Robots.txt** (`/robots.txt`): Optimized rules for different search engines
- **SEO Validation**: Run `npm run validate-seo` to check your setup

The sitemap automatically includes:

- All static pages (home, blog, tools, about, contact)
- All blog posts (discovered dynamically from the file system)
- Proper lastModified dates based on file modification times
- SEO-friendly priorities and change frequencies

The robots.txt includes:

- Optimized crawling rules for major search engines
- Proper disallow patterns for private/system files
- Sitemap reference for search engine discovery

## 🎯 Google Ads Integration

The site includes Google AdSense integration with:

- Client ID: `ca-pub-2591708616273466`
- Multiple ad slots for different page sections
- Error handling to prevent duplicate ad loading
- Responsive ad formats

## 📊 Analytics & Performance

- **Google Analytics**: UA-47319849-1 (consider upgrading to GA4)
- **Web Vitals**: Automatic Core Web Vitals tracking
- **Performance Monitoring**: Built-in Next.js analytics
- **SEO Tracking**: Structured data for rich snippets

## 🏗️ Deployment

### Docker (Recommended for Production)

#### Quick Start

```bash
# Production deployment
./scripts/deploy.sh

# Development environment
./scripts/dev.sh
```

#### Manual Docker Commands

```bash
# Production
docker compose up -d

# Development with hot reload
docker compose -f docker-compose.dev.yml up -d

# Build only the app
docker build -t doc2any-blog .

# Run standalone
docker run -p 3000:3000 doc2any-blog
```

#### Docker Services Included

- **doc2any-blog**: Main Next.js application
- **traefik**: Reverse proxy with SSL (Let's Encrypt)
- **redis**: Caching layer (optional)
- **prometheus**: Metrics collection (optional)
- **grafana**: Metrics visualization (optional)

### Vercel (Alternative)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 Copyright & Attribution

- **Copyright**: © 2024 [Grapph.com](https://grapph.com)
- **Author**: [Milos Wikarski](https://wikarski.com)
- **License**: All rights reserved

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_GA_ID=UA-47319849-1
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-2591708616273466
```

### Next.js Configuration

The `next.config.ts` includes:

- Image optimization settings
- Security headers
- Performance optimizations
- Compression settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:

- Email: info@grapph.com
- Website: [grapph.com](https://grapph.com)
- Author: [wikarski.com](https://wikarski.com)

## 🔄 Migration Notes

This project replaces the original PHP-based doc2any service with a modern blog focused on document conversion education and insights.
