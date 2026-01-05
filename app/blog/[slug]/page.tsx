import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getAllBlogSlugs, formatDate, getRecentPosts } from "@/lib/blog-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Share2, BookOpen } from "lucide-react"
import { BlogContent } from "@/components/blog-content"

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
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${BASE_URL}/blog/${slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRecentPosts(4).filter(p => p.slug !== slug).slice(0, 3)

  // JSON-LD Article Schema with BreadcrumbList
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": `${BASE_URL}/og-image.png`,
        "author": {
          "@type": "Organization",
          "name": post.author,
          "url": BASE_URL
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
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${BASE_URL}/blog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `${BASE_URL}/blog/${slug}`
          }
        ]
      }
    ]
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

        {/* Hero Header */}
        <div className="relative bg-gradient-to-b from-primary/5 via-primary/3 to-background border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="container relative mx-auto px-4 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="text-muted-foreground/50">/</span>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <span className="text-muted-foreground/50">/</span>
                <span className="text-foreground/70 truncate max-w-[200px]">{post.category}</span>
              </nav>

              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                {post.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
                {post.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author}</p>
                    <p className="text-xs text-muted-foreground">Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {post.readTime} min read
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    {post.content.split(/\s+/).length.toLocaleString()} words
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_280px] gap-12">
                {/* Main Content */}
                <div className="min-w-0">
                  <BlogContent content={post.content} />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                    <span className="text-sm text-muted-foreground mr-2">Tags:</span>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs hover:bg-primary/5 cursor-default">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Share */}
                  <div className="flex items-center gap-4 mt-8 p-4 rounded-xl bg-muted/30 border border-border">
                    <Share2 className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Share this article:</span>
                    <div className="flex gap-2 ml-auto">
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${BASE_URL}/blog/${slug}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${BASE_URL}/blog/${slug}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="hidden lg:block">
                  <div className="sticky top-8 space-y-6">
                    {/* CTA Card */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
                      <h3 className="font-bold mb-2">Ready to create your QR code?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Generate professional, print-safe QR codes in seconds.
                      </p>
                      <Button asChild className="w-full">
                        <Link href="/#generator">
                          Create QR Code
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                      <div className="p-6 rounded-2xl border border-border bg-card">
                        <h3 className="font-bold mb-4">Related Articles</h3>
                        <div className="space-y-4">
                          {relatedPosts.map((related) => (
                            <Link
                              key={related.slug}
                              href={`/blog/${related.slug}`}
                              className="block group"
                            >
                              <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                                {related.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {related.readTime} min read
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </article>

        {/* Bottom CTA - Mobile */}
        <section className="lg:hidden py-12 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-2">Ready to create your QR code?</h3>
              <p className="text-muted-foreground mb-4">
                Generate professional, print-safe QR codes in seconds.
              </p>
              <Button asChild size="lg">
                <Link href="/#generator">
                  Create QR Code
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* More Articles */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">More Articles</h2>
              <Button variant="ghost" asChild>
                <Link href="/blog" className="gap-2">
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <Badge variant="outline" className="text-xs mb-3">
                    {related.category}
                  </Badge>
                  <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{formatDate(related.publishedAt)}</span>
                    <span>•</span>
                    <span>{related.readTime} min read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
