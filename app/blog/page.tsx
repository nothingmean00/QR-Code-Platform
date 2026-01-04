import type { Metadata } from "next"
import Link from "next/link"
import { BLOG_POSTS, formatDate } from "@/lib/blog-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "QR Code Blog | Tips, Guides & Best Practices",
  description: "Learn everything about QR codes: sizing guides, industry use cases, error correction, tracking analytics, and best practices for print and digital.",
  keywords: ["QR code blog", "QR code tips", "QR code guides", "QR code best practices"],
}

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(post => post.featured)
  const otherPosts = BLOG_POSTS.filter(post => !post.featured)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="h-3 w-3 mr-1" />
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              QR Code Tips & Guides
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about creating effective QR codes for print and digital.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block max-w-4xl mx-auto p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <Badge className="mb-4">Featured</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{formatDate(featuredPost.publishedAt)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredPost.readTime} min read
                </span>
                <span className="ml-auto text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all"
              >
                <Badge variant="outline" className="w-fit mb-3 text-xs">
                  {post.category}
                </Badge>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime} min
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
