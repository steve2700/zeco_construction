import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
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
  AlertTriangle,
  Flame,
  Waves,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Building Construction & Renovations",
    description:
      "New residential, commercial, and industrial buildings. Expert renovations, refurbishments, and home extensions in Gauteng.",
    href: "/building-construction-renovations",
    image: "/modern-building-construction-site-with-scaffolding.jpg",
    keywords: "construction, renovations, building contractors",
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    description:
      "Comprehensive residential and commercial maintenance programs, preventative care, and professional facility management.",
    href: "/property-maintenance",
    image: "/property-maintenance-worker-fixing-repairs-profess.jpg",
    keywords: "property maintenance, facility management, repairs",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Complete plumbing installations and repairs, leak detection, drain cleaning, and geyser maintenance across Gauteng.",
    href: "/plumbing-services",
    image: "/professional-plumber-working-on-pipes-installation.jpg",
    keywords: "plumbing, leak detection, geyser repairs",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description:
      "Certified electrical installations, rewiring, fault finding, lighting installations, and comprehensive electrical maintenance.",
    href: "/electrical-services",
    image: "/electrician-working-on-electrical-panel-wiring-sou.jpg",
    keywords: "electrical, rewiring, installations",
  },
  {
    icon: Home,
    title: "Roofing & Repairs",
    description:
      "Expert roof leak detection and repairs, tile and IBR roofing, waterproofing solutions, and gutter installations.",
    href: "/roofing-roof-leak-repairs",
    image: "/roofer-installing-tiles-on-residential-roof-south-.jpg",
    keywords: "roofing, roof repairs, waterproofing",
  },
  {
    icon: Shield,
    title: "Waterproofing Services",
    description:
      "Professional waterproofing for roofs, balconies, bathrooms, foundations, and effective damp proofing solutions.",
    href: "/waterproofing-services",
    image: "/waterproofing-membrane-application-on-roof-south-a.jpg",
    keywords: "waterproofing, damp proofing, roof sealing",
  },
  {
    icon: Hammer,
    title: "Carpentry Services",
    description: "Quality roof timber structures, custom doors, frames, decking, pergolas, cabinetry, and expert carpentry repairs.",
    href: "/carpentry-services",
    image: "/carpenter-craftsman-working-on-wood-cabinetry-work.jpg",
    keywords: "carpentry, timber structures, custom woodwork",
  },
  {
    icon: Construction,
    title: "Kitchen & Bathroom Cupboards",
    description: "Custom kitchen cupboards, bathroom vanities, storage solutions, and built-in cupboards tailored to your space.",
    href: "/kitchen-bathroom-cupboards",
    image: "/modern-kitchen-renovation-with-white-cabinets-sout.jpg",
    keywords: "kitchen cupboards, bathroom vanities, custom cabinets",
  },
  {
    icon: PaintBucket,
    title: "Painting & Tiling",
    description: "Professional interior and exterior painting, floor and wall tiling, surface preparation, and decorative finishes.",
    href: "/painting-tiling-finishing",
    image: "/professional-painter-painting-interior-wall-home-r.jpg",
    keywords: "painting, tiling, interior design",
  },
  {
    icon: Car,
    title: "Paving & Driveways",
    description: "Expert brick paving, tar paving, driveway construction, walkways, parking areas, and professional resurfacing.",
    href: "/paving-driveways-surfacing",
    image: "/brick-paving-driveway-installation-residential-sou.jpg",
    keywords: "paving, driveways, tar surfacing",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumber & Burst Pipes",
    description: "24/7 emergency plumbing response for burst pipes, major leaks, and flood control across Gauteng.",
    href: "/emergency-plumber-burst-pipes",
    keywords: "emergency plumber, burst pipe repairs",
  },
  {
    icon: Flame,
    title: "Geyser Installation & Repairs",
    description: "Electric, solar & Kwikot geyser installation, replacement, and repairs with full compliance certification.",
    href: "/geyser-installation-repairs",
    keywords: "geyser installation, Kwikot geyser, solar geyser",
  },
  {
    icon: Waves,
    title: "Blocked Drains Unblocking",
    description: "Fast blocked drain clearing with high-pressure jetting and CCTV inspection across Gauteng.",
    href: "/blocked-drains-unblocking",
    keywords: "blocked drains, drain unblocking, drain cleaning",
  },
]

export function ServicesOverview() {
  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header - SEO Optimized */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            itemProp="name"
          >
            Comprehensive Construction & Maintenance Solutions in Gauteng
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
            From construction and renovations to maintenance services, <strong>ZECO Construction</strong> provides integrated services across <strong>Pretoria, Johannesburg, and Gauteng</strong>. One trusted partner for all your project needs.
          </p>
        </div>

        {/* Featured Services - Cards with Images */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <Card
              key={service.href}
              className="group overflow-hidden border-border transition-all duration-300 hover:border-secondary hover:shadow-2xl hover:-translate-y-1"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />

              {/* Service Image with Optimized Loading */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={service.image}
                  alt={`${service.title} in Gauteng - Professional ${service.keywords} services by ZECO Construction`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index < 3 ? "eager" : "lazy"}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg ring-2 ring-white/20 transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3
                  className="mb-2 text-lg font-bold group-hover:text-secondary transition-colors"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p
                  className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3"
                  itemProp="description"
                >
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  itemProp="url"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services - Compact List */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.slice(6).map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-0.5"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 7)} />

              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:scale-110">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3
                  className="text-sm font-semibold truncate group-hover:text-secondary transition-colors"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground">View Details →</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section with Stats */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary/90 p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote from Gauteng's most trusted construction and maintenance provider. Licensed, insured, and committed to excellence.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-white">
              <div>
                <div className="text-3xl font-bold text-accent">13+</div>
                <div className="text-sm text-white/80">Service Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/80">Emergency Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 font-semibold transition-transform hover:scale-105"
              >
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 font-semibold transition-transform hover:scale-105"
              >
                <Link href="/services">
                  View All 13 Services
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
