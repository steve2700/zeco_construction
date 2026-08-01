import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle, Shield, Award, Star, Zap, Clock, Users } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary" itemScope itemType="https://schema.org/Service">
      {/* Background Image with Optimized Loading */}
      <div className="absolute inset-0">
        <Image
          src="/professional-construction-site-aerial-view-modern-.jpg"
          alt="Professional construction site in Gauteng - ZECO Construction aerial view of modern building development in Pretoria and Johannesburg"
          fill
          className="object-cover opacity-20"
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative mx-auto px-4 py-10 sm:py-14 lg:px-8 lg:py-32">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge with Rating - Structured Data */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all shadow-lg">
              <Shield className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="hidden sm:inline">Gauteng's Trusted Service Provider</span>
              <span className="sm:hidden">Trusted in Gauteng</span>
              <div className="flex items-center gap-0.5 ml-2" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="reviewCount" content="150" />
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Main Headline - SEO Optimized H1 */}
            <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" itemProp="name">
              <span className="block">We Build Gauteng.</span>
              <span className="block text-accent">From Foundation to Finish.</span>
              <span className="mt-1 hidden text-xl text-primary-foreground/90 sm:block sm:text-2xl md:text-4xl">
                Roofing, Plumbing, Renovations &amp; More
              </span>
            </h1>

            {/* Homeowner-Friendly Description */}
            <p className="mb-5 text-pretty text-base text-primary-foreground/80 sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0" itemProp="description">
              Need a leaking roof fixed, a new geyser installed, or your kitchen renovated? <strong className="text-white">ZECO Construction</strong> is Gauteng's trusted team for home repairs, renovations, plumbing, electrical and painting — serving <strong className="text-white">Pretoria, Johannesburg, Midrand</strong> and beyond.
            </p>

            {/* Trust Indicators with Icons - hidden on mobile to keep CTAs above the fold */}
            <div className="mb-6 hidden sm:flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>
                <span className="font-medium">Licensed & Compliant</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <Award className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>
                <span className="font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>
                <span className="font-medium">24/7 Emergency</span>
              </div>
            </div>

            {/* CTA Buttons - Optimized for Conversion, visible without scrolling */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-12 sm:h-14 px-8 text-base font-semibold transition-all hover:scale-105"
              >
                <Link href="/contact" itemProp="url">
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" aria-hidden="true" />
                  Get Your Free Quote Today
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="group h-12 sm:h-14 px-8 text-base font-semibold bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-xl shadow-[#25D366]/25 transition-all hover:scale-105"
              >
                <a href="https://wa.me/27748509727" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12 sm:h-14 px-8 text-base font-semibold transition-all hover:scale-105"
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats - hidden on mobile to keep CTAs above the fold */}
            <div className="mt-6 hidden sm:flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Same-day quotes available</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>500+ Happy clients</span>
              </div>
            </div>
          </div>

          {/* Hero Images - Optimized Loading */}
          <div className="relative hidden lg:block" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <div className="relative">
              {/* Main Image - Priority Loading */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
                <Image
                  src="/professional-construction-workers-team.jpg"
                  alt="Professional construction team working on site in Gauteng - ZECO Construction skilled workers"
                  fill
                  className="object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  itemProp="contentUrl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>

              {/* Secondary Image - Lazy Loading */}
              <div className="absolute -bottom-8 -left-8 aspect-square w-48 overflow-hidden rounded-2xl border-4 border-background shadow-xl ring-1 ring-white/10 transition-transform hover:scale-105">
                <Image
                  src="/modern-renovated-kitchen-interior-design-south-afr.jpg"
                  alt="Modern renovated kitchen in Gauteng - Completed renovation project by ZECO Construction"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={80}
                  sizes="192px"
                />
              </div>

              {/* Stats Card - Animated */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-card p-6 shadow-2xl border border-border backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 shadow-lg">
                    <Award className="h-7 w-7 text-accent-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-card-foreground">10+</p>
                    <p className="text-sm text-muted-foreground">Service Categories</p>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 right-12 rounded-xl bg-secondary px-4 py-3 shadow-xl ring-1 ring-white/10 hover:scale-105 transition-transform">
                <p className="text-2xl font-bold text-secondary-foreground">10+</p>
                <p className="text-xs text-secondary-foreground/80">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Trust Badges - SEO Rich */}
        <div className="mt-10 sm:mt-16 border-t border-white/10 pt-8 sm:pt-10">
          <p className="text-center text-sm text-primary-foreground/60 mb-6 font-medium">
            Trusted by 500+ residential, commercial & industrial clients across Gauteng
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            <div className="flex items-center gap-2 text-white/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-white/10 transition-all">
              <Shield className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-semibold">NHBRC Registered</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-white/10 transition-all">
              <Award className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-semibold">CIDB Graded</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-semibold">SABS Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-white/10 transition-all">
              <Shield className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-semibold">ECSA Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Structured Data for SEO */}
      <meta itemProp="provider" content="ZECO Construction" />
      <meta itemProp="areaServed" content="Gauteng, Pretoria, Johannesburg, Midrand, Sandton, Centurion, Randburg" />
      <meta itemProp="serviceType" content="Construction, Renovation, Roofing, Plumbing, Electrical, Painting" />
    </section>
  )
}
