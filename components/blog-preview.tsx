import Link from "next/link"
import { getRecentPosts, formatDate } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BookOpen } from "lucide-react"

export function BlogPreview() {
  const posts = getRecentPosts(3)

  return (
    <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <Badge variant="secondary" className="mb-3">
              <BookOpen className="h-3 w-3 mr-1" />
              Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              QR Code Tips & Guides
            </h2>
            <p className="text-muted-foreground mt-2">
              Learn best practices for creating effective QR codes
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link href="/blog">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Badge variant="outline" className="w-fit mb-3 text-xs">
                {post.category}
              </Badge>
              
              <h3 className={`font-bold group-hover:text-primary transition-colors mb-2 ${
                index === 0 ? "text-2xl md:text-3xl" : "text-lg"
              }`}>
                {post.title}
              </h3>
              
              <p className={`text-muted-foreground flex-1 ${
                index === 0 ? "text-base line-clamp-3" : "text-sm line-clamp-2"
              }`}>
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime} min
                </span>
                <span className="ml-auto text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
