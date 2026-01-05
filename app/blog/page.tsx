import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BLOG_POSTS, formatDate } from "@/lib/blog-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BookOpen, Sparkles, TrendingUp } from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  title: "QR Code Blog | Tips, Guides & Best Practices",
  description: "Learn everything about QR codes: sizing guides, industry use cases, error correction, tracking analytics, and best practices for print and digital.",
  keywords: ["QR code blog", "QR code tips", "QR code guides", "QR code best practices", "QR code tutorials"],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: "QR Code Blog | Tips, Guides & Best Practices",
    description: "Learn everything about QR codes: sizing guides, industry use cases, error correction, tracking analytics, and best practices.",
    type: "website",
    url: `${BASE_URL}/blog`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QR Code Blog - Tips, Guides & Best Practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Blog | Tips, Guides & Best Practices",
    description: "Learn everything about QR codes: sizing guides, industry use cases, error correction, tracking analytics, and best practices.",
    images: ["/og-image.png"],
  },
}

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(post => post.featured)
  const otherPosts = BLOG_POSTS.filter(post => !post.featured)
  
  // Get unique categories
  const categories = Array.from(new Set(BLOG_POSTS.map(post => post.category)))

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
              <BookOpen className="h-3.5 w-3.5 mr-2" />
              Knowledge Base
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              QR Code Insights & Guides
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert knowledge to help you create effective QR codes. From sizing guides to advanced analytics, 
              everything you need for print and digital success.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mt-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{BLOG_POSTS.length}</p>
                <p className="text-sm text-muted-foreground">Articles</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{categories.length}</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  {BLOG_POSTS.reduce((acc, post) => acc + post.readTime, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Min Read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="default" className="cursor-pointer">
              All Articles
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary/10 hover:border-primary/30 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Featured Article</h2>
            </div>
            
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative grid md:grid-cols-2 gap-6">
                {featuredPost.image && (
                  <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  </div>
                )}
                
                <div className="p-8 md:p-12 md:pl-0 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                    <Badge variant="outline">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span>{formatDate(featuredPost.publishedAt)}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime} min read
                      </span>
                    </div>
                    
                    <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read full article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-gradient-to-b from-transparent via-muted/20 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">All Articles</h2>
            <span className="text-sm text-muted-foreground ml-2">({otherPosts.length})</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {post.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs font-medium">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to create your QR code?</h2>
            <p className="text-muted-foreground mb-8">
              Put this knowledge into practice. Generate professional, print-safe QR codes in seconds.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href="/#generator">
                Create QR Code Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
