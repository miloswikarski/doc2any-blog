import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Get all blog post directories dynamically
function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'src/app/blog')

  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .filter(name => name !== 'page.tsx') // Exclude any non-blog directories
  } catch (error) {
    console.error('Error reading blog directory:', error)
    return []
  }
}

// Get file modification time for more accurate lastModified dates
function getFileModifiedDate(filePath: string): Date {
  try {
    const stats = fs.statSync(filePath)
    return stats.mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://doc2any.grapph.com'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Dynamic blog posts
  const blogPosts = getBlogPosts()
  const blogPages: MetadataRoute.Sitemap = blogPosts.map(slug => {
    const blogPostPath = path.join(process.cwd(), 'src/app/blog', slug, 'page.tsx')
    const lastModified = getFileModifiedDate(blogPostPath)

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  })

  return [...staticPages, ...blogPages]
}
