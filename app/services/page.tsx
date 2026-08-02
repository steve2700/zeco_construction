// File path: app/services/page.tsx
// URL: https://www.zecoconstruction.co.za/services

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Wrench,
  Droplets,
  Zap,
  Home,
  Shield,
  Hammer,
  PaintBucket,
  Construction,
  ArrowRight,
  Car,
  Phone,
  Blocks,
  CheckCircle,
  Award,
  Clock,
  Star,
  MapPin,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Construction, Maintenance & Infrastructure Solutions in Gauteng | ZECO Construction",
  description:
    "Explore ZECO Construction's comprehensive services: construction, renovations, plumbing, electrical, roofing, waterproofing, paving, and concrete works in Pretoria, Johannesburg & Midrand. Licensed NHBRC & CIDB contractors.",
  keywords: "construction services Gauteng, maintenance Pretoria, building contractors Johannesburg, plumbing electrical roofing, paving concrete Midrand",
  openGraph: {
    title: "Our Services | ZECO Construction - Gauteng's Trusted Building Partner",
    description:
      "Professional construction, maintenance, and building services for Pretoria, Johannesburg & Gauteng.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZECO Construction - Complete Construction Services",
      },
    ],
  },
}

const services = [
  {
    icon: Building2,
    title: "Building Construction & Renovations",
    description:
      "New residential, commercial, and industrial buildings. Complete renovations, refurbishments, fit-outs, home extensions, structural alterations, and office space optimization.",
    href: "/building-construction-renovations",
    features: [
      "New residential builds",
      "Commercial construction",
      "Complete renovations",
      "Home extensions",
      "Structural alterations",
    ],
    featured: true,
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    description:
      "Comprehensive residential and commercial maintenance, preventative programs, general repairs, handyman services, and ongoing facility maintenance support.",
    href: "/property-maintenance",
    features: [
      "Residential maintenance",
      "Commercial maintenance",
      "Preventative programs",
      "General repairs",
      "Facility support",
    ],
    featured: true,
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description:
      "Complete plumbing installations and repairs, leak detection, burst pipe repairs, drain cleaning and unblocking, geyser installation and maintenance.",
    href: "/plumbing-services",
    features: ["Installations & repairs", "Leak detection", "Burst pipe repairs", "Geyser services", "Drain cleaning"],
    featured: false,
  },
  {
    icon: Zap,
    title: "Electrical Repairs & Installations",
    description:
      "Electrical installations and rewiring, fault finding and repairs, lighting installations, power point installations, and comprehensive electrical maintenance.",
    href: "/electrical-services",
    features: [
      "Installations & rewiring",
      "Fault finding",
      "Lighting installations",
      "Power points",
      "Electrical maintenance",
    ],
    featured: false,
  },
  {
    icon: Home,
    title: "Roofing & Roof Leak Repairs",
    description:
      "Expert roof leak detection and repairs, tile, IBR, and corrugated roofing, waterproofing and sealing, gutter installation and repairs.",
    href: "/roofing-roof-leak-repairs",
    features: [
      "Leak detection & repairs",
      "Tile roofing",
      "IBR & corrugated roofing",
      "Waterproofing",
      "Gutter installation",
    ],
    featured: false,
  },
  {
    icon: Shield,
    title: "Waterproofing Services",
    description:
      "Professional waterproofing for roofs, balconies, bathrooms, foundation and wall waterproofing, damp proofing for complete moisture protection.",
    href: "/waterproofing-services",
    features: [
      "Roof waterproofing",
      "Balcony waterproofing",
      "Foundation protection",
      "Wall waterproofing",
      "Damp proofing",
    ],
    featured: false,
  },
  {
    icon: Hammer,
    title: "Carpentry Services",
    description:
      "Quality roof timber structures, custom doors, frames, and trims, decking, pergolas, cabinetry, and general carpentry repairs.",
    href: "/carpentry-services",
    features: ["Roof timber structures", "Doors & frames", "Decking & pergolas", "Cabinetry", "Carpentry repairs"],
    featured: false,
  },
  {
    icon: Construction,
    title: "Kitchen & Bathroom Cupboards",
    description:
      "Custom kitchen cupboards, bathroom vanities and storage units, built-in cupboards, repairs and upgrades designed for maximum functionality.",
    href: "/kitchen-bathroom-cupboards",
    features: [
      "Custom kitchen cupboards",
      "Bathroom vanities",
      "Storage solutions",
      "Built-in cupboards",
      "Repairs & upgrades",
    ],
    featured: false,
  },
  {
    icon: PaintBucket,
    title: "Painting, Tiling & Finishing",
    description:
      "Interior and exterior painting, floor and wall tiling, surface preparation and sealing, decorative finishes for lasting quality.",
    href: "/painting-tiling-finishing",
    features: [
      "Interior painting",
      "Exterior painting",
      "Floor & wall tiling",
      "Surface preparation",
      "Decorative finishes",
    ],
    featured: false,
  },
  {
    icon: Car,
    title: "Paving, Driveways & Surfacing",
    description:
      "Brick paving, tar paving, driveway construction, walkways and parking areas, paving repairs and resurfacing.",
    href: "/paving-driveways-surfacing",
    features: ["Brick paving", "Tar paving", "Driveway construction", "Walkways & parking", "Repairs & resurfacing"],
    featured: false,
  },
  {
    icon: Blocks,
    title: "Concrete Works & Bricklaying",
    description:
      "Concrete slabs and foundations, pathways and driveways, bricklaying and plastering, structural concrete works.",
    href: "/concrete-works-bricklaying",
    features: ["Concrete slabs", "Foundations", "Bricklaying", "Plastering", "Structural concrete"],
    featured: false,
  },
]

const stats = [
  { value: "11+", label: "Service Categories", icon: Award },
  { value: "500+", label: "Projects Completed", icon: CheckCircle },
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "24/7", label: "Emergency Support", icon: Phone },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "One-Stop Solution",
    description: "All services under one roof - no need for multiple contractors",
  },
  {
    icon: Award,
    title: "Licensed & Certified",
    description: "NHBRC, CIDB registered with full compliance guarantees",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage for your peace of mind",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-day quotes and 20-40 min emergency response times",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs variant="onDark" items={[{ label: "About Us" }]} />
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <Award className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Complete Construction & Maintenance Solutions</span>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              <span className="text-accent">11+</span> Professional Services <br />Across Gauteng
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed mb-8">
              <strong className="text-white">ZECO Construction</strong> offers comprehensive building and maintenance services. We minimize the need for multiple contractors by providing integrated,
              professional services across <strong className="text-white">Pretoria, Johannesburg, Midrand</strong>, and the greater Gauteng region.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" aria-hidden="true" />
                  <p className="text-3xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <benefit.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              What We Offer
            </span>
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">
              Our <span className="text-secondary">Complete Service Range</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From construction to maintenance, we've got you covered with professional, reliable services
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className={`group flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  service.featured 
                    ? 'border-2 border-secondary ring-1 ring-secondary/20' 
                    : 'border-border'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all group-hover:scale-110 ${
                      service.featured 
                        ? 'bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg' 
                        : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground'
                    }`}>
                      <service.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    {service.featured && (
                      <span className="rounded-full bg-gradient-to-r from-accent to-accent/80 px-3 py-1 text-xs font-bold text-accent-foreground shadow-md">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="mb-4 flex-1 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-bold text-secondary hover:text-secondary/80 transition-colors group/link"
                  >
                    Learn More 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Service Note */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border">
            <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-2">Serving All of Gauteng</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              All services available across Pretoria, Johannesburg, Midrand, Sandton, Centurion, and 10+ major areas in Gauteng province
            </p>
            <Button asChild variant="outline" size="lg" className="border-secondary/30 hover:bg-secondary/10">
              <Link href="/service-areas">
                View Service Areas
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold mb-6 md:text-4xl">
                The <span className="text-secondary">ZECO Construction</span> Advantage
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over <strong>10 years of experience</strong> and <strong>500+ completed projects</strong>, we've become Gauteng's trusted partner for all construction, maintenance, and building needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Integrated Services</h3>
                    <p className="text-sm text-muted-foreground">One company for all your needs - streamlined project management and accountability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Licensed Professionals</h3>
                    <p className="text-sm text-muted-foreground">NHBRC & CIDB registered, fully insured with experienced, qualified teams</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-muted-foreground">Detailed quotes, no hidden fees, clear communication throughout every project</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10">
                  <Link href="/contact">
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/construction-team-meeting-on-site-in-gauteng.jpg"
                  alt="ZECO Construction professional team on construction site in Gauteng"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent/90 p-6 text-accent-foreground shadow-2xl ring-2 ring-white/20">
                <p className="text-4xl font-bold">500+</p>
                <p className="text-sm font-semibold">Projects</p>
                <p className="text-xs opacity-90">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Need a Service <span className="text-accent">Not Listed?</span>
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Our integrated approach means we can often accommodate specialized requests. Contact us to discuss your
              specific project needs and receive a tailored, no-obligation quotation within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Request Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-base font-semibold">
                <Link href="tel:+27748509727">
                  Call: +27 74 850 9727
                </Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              24/7 Emergency Support • Same-Day Quotes • Licensed & Insured • Serving All Gauteng
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
