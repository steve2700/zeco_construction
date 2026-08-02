import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, ArrowRight, CheckCircle, Clock, Navigation, Star, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Service Areas | ZECO Construction - Pretoria, Johannesburg, Midrand & All Gauteng",
  description:
    "ZECO Construction provides construction, maintenance, and infrastructure services throughout Gauteng including Pretoria, Johannesburg, Sandton, Centurion, Midrand, Fourways, and 10+ major areas. Same-day quotes, 24/7 emergency support, 20-40 min response times.",
  keywords: "service areas Gauteng, construction Pretoria, contractors Johannesburg, building services Midrand, Sandton maintenance, Centurion contractors, Fourways construction",
  openGraph: {
    title: "Service Areas | ZECO Construction Serving All Gauteng",
    description:
      "Professional construction and maintenance services across all major areas in Gauteng province. Fast 20-40 min response times, free on-site consultations, and 24/7 emergency support.",
    images: [
      {
        url: "/gauteng-service-areas-map.webp",
        width: 1200,
        height: 630,
        alt: "ZECO Construction service areas map - Gauteng Province",
      },
    ],
  },
}

const serviceAreas = [
  {
    name: "Pretoria",
    href: "/service-areas/pretoria",
    description:
      "Comprehensive construction and maintenance services throughout Pretoria and surrounding suburbs including Montana, Hatfield, Menlyn, Brooklyn, and Centurion.",
    suburbs: ["Montana", "Hatfield", "Menlyn", "Brooklyn", "Waterkloof", "Centurion", "Lynnwood", "Silverton"],
    highlight: true,
    responseTime: "30 min",
    projects: "150+",
  },
  {
    name: "Johannesburg",
    href: "/service-areas/johannesburg",
    description:
      "Full-service construction, renovation, and infrastructure solutions across Johannesburg including Sandton, Rosebank, Fourways, Randburg, and the CBD.",
    suburbs: ["Sandton", "Rosebank", "Fourways", "Randburg", "Parktown", "CBD", "Melrose", "Houghton"],
    highlight: true,
    responseTime: "30 min",
    projects: "200+",
  },
  {
    name: "Midrand",
    href: "/service-areas/midrand",
    description:
      "Based in Midrand. Reliable construction and infrastructure services in Carlswald, Halfway House, and surrounding areas.",
    suburbs: ["Carlswald", "Halfway House", "Vorna Valley", "Glen Austin", "Waterfall Estate"],
    highlight: true,
    responseTime: "20 min",
    projects: "100+",
  },
  {
    name: "Sandton",
    href: "/service-areas/sandton",
    description:
      "Premium construction and property maintenance for residential and commercial properties in Sandton, Morningside, Rivonia, and Sunninghill.",
    suburbs: ["Morningside", "Rivonia", "Sunninghill", "Bryanston", "Hyde Park"],
    responseTime: "25 min",
    projects: "80+",
  },
  {
    name: "Centurion",
    href: "/service-areas/centurion",
    description:
      "Expert construction, renovation, and maintenance solutions throughout Centurion including Highveld, Eldoraigne, and Irene.",
    suburbs: ["Highveld", "Eldoraigne", "Irene", "Wierdapark", "Zwartkop"],
    responseTime: "25 min",
    projects: "70+",
  },
  {
    name: "Fourways",
    href: "/service-areas/fourways",
    description:
      "Professional building and property services in Fourways, Lonehill, Dainfern, and the northern suburbs of Johannesburg.",
    suburbs: ["Lonehill", "Dainfern", "Broadacres", "Cedar Lakes"],
    responseTime: "30 min",
    projects: "60+",
  },
  {
    name: "Randburg",
    href: "/service-areas/randburg",
    description:
      "Quality construction and maintenance for residential and commercial properties in Randburg, Ferndale, and Blairgowrie.",
    suburbs: ["Ferndale", "Blairgowrie", "Northcliff", "Boskruin"],
    responseTime: "35 min",
    projects: "50+",
  },
  {
    name: "Bedfordview",
    href: "/service-areas/bedfordview",
    description: "Comprehensive construction services in Bedfordview, Edenvale, Germiston, and the East Rand suburbs.",
    suburbs: ["Edenvale", "Germiston", "Kensington", "Kempton Park"],
    responseTime: "40 min",
    projects: "40+",
  },
  {
    name: "Rosebank",
    href: "/service-areas/rosebank",
    description:
      "Premium construction and renovation services in Rosebank, Parktown, Saxonwold, and the northern Johannesburg suburbs.",
    suburbs: ["Parktown", "Saxonwold", "Dunkeld", "Forest Town"],
    responseTime: "35 min",
    projects: "45+",
  },
  {
    name: "Roodepoort",
    href: "/service-areas/roodepoort",
    description:
      "Expert building and property maintenance in Roodepoort, Florida, Constantia Kloof, and western Johannesburg suburbs.",
    suburbs: ["Northgate", "Florida", "Constantia Kloof", "Wilropark"],
    responseTime: "40 min",
    projects: "35+",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Same-Day Response",
    description: "Emergency services and quotes within hours, not days",
  },
  {
    icon: CheckCircle,
    title: "Free On-Site Consultations",
    description: "No-obligation assessments and detailed quotations",
  },
  {
    icon: Navigation,
    title: "Strategic Location",
    description: "Based in Midrand for rapid deployment across Gauteng",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep knowledge of each area and local regulations",
  },
  {
    icon: Award,
    title: "Licensed & Compliant",
    description: "NHBRC, CIDB registered with all required certifications",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description: "500+ completed projects across Gauteng",
  },
]

const stats = [
  { value: "10+", label: "Service Areas", sublabel: "Across Gauteng" },
  { value: "500+", label: "Projects Completed", sublabel: "Residential & Commercial" },
  { value: "20-40", label: "Min Response", sublabel: "Average Time" },
  { value: "24/7", label: "Emergency Support", sublabel: "Always Available" },
]

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/gauteng-service-areas-map.webp"
            alt="ZECO Construction comprehensive service coverage map of Gauteng Province including Pretoria, Johannesburg, and Midrand"
            fill
            className="object-cover opacity-10"
            priority
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <Breadcrumbs variant="onDark" items={[{ label: "Service Areas" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Serving All of Gauteng Province</span>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>
            
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Professional Services Across <span className="text-accent">Pretoria, Johannesburg & All Gauteng</span>
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed mb-8">
              <strong className="text-white">ZECO Construction</strong> delivers expert building, maintenance, and infrastructure services throughout
              Gauteng province. Based in <strong className="text-white">Midrand</strong>, our strategically positioned teams ensure <strong className="text-white">20-40 minute response times</strong> and exceptional service
              quality across all major areas.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-white">{stat.label}</p>
                  <p className="text-xs text-white/70">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid - Enhanced */}
      <section className="py-20 lg:py-28" itemScope itemType="https://schema.org/Service">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Coverage Areas
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Where We Serve in <span className="text-secondary">Gauteng Province</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From residential homes to commercial buildings and industrial facilities, we provide comprehensive
              construction and maintenance services across all major areas in Gauteng with rapid response times.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <Card
                key={area.name}
                className={`group overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  area.highlight ? "border-2 border-secondary shadow-lg ring-1 ring-secondary/20" : "border-border"
                }`}
                itemProp="areaServed"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${
                        area.highlight ? "bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg" : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {area.highlight && (
                      <span className="rounded-full bg-gradient-to-r from-accent to-accent/80 px-3 py-1 text-xs font-bold text-accent-foreground shadow-md">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-xl font-bold group-hover:text-secondary transition-colors">{area.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{area.description}</p>

                  {/* Response Time & Projects */}
                  <div className="mb-4 flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1.5">
                      <Clock className="h-3 w-3 text-accent" aria-hidden="true" />
                      <span className="font-semibold">{area.responseTime} response</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1.5">
                      <Award className="h-3 w-3 text-secondary" aria-hidden="true" />
                      <span className="font-semibold">{area.projects} projects</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-secondary" aria-hidden="true" />
                      Suburbs Covered:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.suburbs.map((suburb) => (
                        <span
                          key={suburb}
                          className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground hover:bg-secondary/10 hover:text-secondary transition-colors"
                        >
                          {suburb}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={area.href}
                    className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    View Full Area Details
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Areas CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border">
            <h3 className="text-xl font-bold mb-2">Don't See Your Area Listed?</h3>
            <p className="text-muted-foreground mb-4">
              We serve the entire Gauteng province! Contact us to discuss your specific location.
            </p>
            <Button asChild variant="outline" className="border-secondary/30 hover:bg-secondary/10">
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Contact Us About Your Area
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Your Local <span className="text-secondary">Gauteng Service Provider</span>
              </h2>
              <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
                As a locally-based company with our main office in <strong>Midrand</strong>, we have teams strategically positioned throughout Gauteng. We understand the
                unique needs of each area and provide tailored solutions with industry-leading response times.
              </p>

              <div className="grid gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all">
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10 transition-transform hover:scale-105">
                  <Link href="tel:+27748509727">
                    Call: +27 74 850 9727
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/gauteng-service-areas-map.webp"
                  alt="Detailed ZECO Construction service coverage map showing all 10+ areas across Gauteng Province"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Animated Markers */}
                <div className="absolute inset-0" aria-hidden="true">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative animate-pulse">
                      <div className="h-6 w-6 rounded-full bg-accent shadow-lg ring-2 ring-white" />
                      <div className="absolute inset-0 h-6 w-6 animate-ping rounded-full bg-accent opacity-75" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-accent text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                      Main Office - Midrand
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent/90 p-6 text-accent-foreground shadow-2xl ring-2 ring-white/20 transition-transform hover:scale-110">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-semibold">Service Areas</p>
                <p className="text-xs opacity-90">Full Coverage</p>
              </div>

              {/* Response Time Badge */}
              <div className="absolute -top-4 -left-4 rounded-xl bg-secondary px-4 py-3 shadow-xl ring-2 ring-white/20 transition-transform hover:scale-110">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary-foreground" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-secondary-foreground">20-40 Min</p>
                    <p className="text-xs text-secondary-foreground/80">Response Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Get Professional Service <span className="text-accent">in Your Area Today</span>
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Contact us for your project needs. We provide free consultations, same-day quotes, and detailed assessments for
              all areas across Gauteng. Licensed, insured, and ready to serve you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold transition-transform hover:scale-105">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Request Free Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-base font-semibold transition-transform hover:scale-105"
              >
                <Link href="/services">
                  View All 10 Services
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              24/7 Emergency Support • Same-Day Response • Free Consultations • Licensed & Insured
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
