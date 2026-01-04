import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getAllBlogSlugs, formatDate, getRecentPosts } from "@/lib/blog-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `${post.title} | QR Code Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${BASE_URL}/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRecentPosts(3).filter(p => p.slug !== slug).slice(0, 2)

  // JSON-LD Article Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "QR Generator",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/icon.svg`
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.split(/\s+/).length
  }

  return (
    <>
      <Script
        id="article-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              {/* Header */}
              <header className="mb-8">
                <Badge variant="outline" className="mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  {post.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {post.readTime} min read
                  </span>
                </div>
              </header>

              {/* Content */}
              <div 
                className="prose prose-neutral dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground
                  prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-muted prose-pre:border prose-pre:border-border
                  prose-table:border prose-table:border-border
                  prose-th:bg-muted prose-th:px-4 prose-th:py-2
                  prose-td:px-4 prose-td:py-2 prose-td:border-t prose-td:border-border"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to create your QR code?</h3>
                <p className="text-muted-foreground mb-4">
                  Generate professional, print-safe QR codes in seconds.
                </p>
                <Button asChild>
                  <Link href="/#generator">
                    Create QR Code
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
                  >
                    <Badge variant="outline" className="text-xs mb-2">
                      {related.category}
                    </Badge>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  )
}

// Simple markdown-like formatting
function formatContent(content: string): string {
  return content
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hulo])/gm, '<p>')
    .replace(/(?<![>])$/gm, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hulo])/g, '$1')
    .replace(/(<\/[hulo][^>]*>)<\/p>/g, '$1')
    .replace(/\| (.*) \|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      const isHeader = cells.some(c => c.includes('---'))
      if (isHeader) return ''
      return `<tr>${cells.map(c => `<td>${c.trim()}</td>`).join('')}</tr>`
    })
}
