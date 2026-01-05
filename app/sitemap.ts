import type { MetadataRoute } from 'next'
import { getAllUseCaseSlugs } from '@/lib/use-cases-data'
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog-data'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const useCaseSlugs = getAllUseCaseSlugs()
  const blogSlugs = getAllBlogSlugs()
  
  const useCasePages = useCaseSlugs.map((slug) => ({
    url: `${BASE_URL}/use-cases/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = blogSlugs.map((slug) => {
    const post = getBlogPostBySlug(slug)
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(post?.publishedAt || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      images: post?.image ? [`${BASE_URL}${post.image}`] : [],
    }
  })

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/use-cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...useCasePages,
    ...blogPages,
  ]
}
