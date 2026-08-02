import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, ArrowRight, MapPin, Building2, Wrench, Zap, Shield, Clock, Award } from "lucide-react"

interface ServiceAreaTemplateProps {
  areaName: string
  description: string
  suburbs: string[]
  heroImage?: string
  introduction: string
  servicesOffered: string[]
  whyChooseUs: string[]
  nearbyAreas: { name: string; href: string }[]
  responseTime?: string
  projectsCompleted?: number
  children?: ReactNode
}

const popularServices = [
  { icon: Building2, title: "Construction & Renovations", href: "/building-construction-renovations" },
  { icon: Wrench, title: "Property Maintenance", href: "/property-maintenance" },
  { icon: Zap, title: "Electrical Services", href: "/electrical-services" },
  { icon: Shield, title: "Waterproofing Services", href: "/waterproofing-services" },
]

export function ServiceAreaTemplate({
  areaName,
  description,
  suburbs,
  heroImage,
  introduction,
  servicesOffered,
  whyChooseUs,
  nearbyAreas,
  responseTime = "20-40 minutes",
  projectsCompleted = 500,
  children,
}: ServiceAreaTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src={heroImage || "/gauteng-map-area.jpg?height=600&width=1600"}
            alt={`ZECO Construction services in ${areaName}`}
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <Breadcrumbs variant="onDark" items={[{ label: "Service Areas", href: "/service-areas" }, { label: areaName }]} />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
                <MapPin className="h-4 w-4 text-accent" />
                Service Area
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
                Professional Construction & Maintenance Services in {areaName}
              </h1>
              <p className="mb-8 text-pretty text-lg text-primary-foreground/90 leading-relaxed">{description}</p>

              {/* Quick Stats */}
              <div className="mb-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/10">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-xs text-white/70">Response Time</div>
                    <div className="text-sm font-semibold text-white">{responseTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/10">
                  <Award className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-xs text-white/70">Projects Completed</div>
                    <div className="text-sm font-semibold text-white">{projectsCompleted}+</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 shadow-2xl">
                <h3 className="mb-4 text-lg font-semibold text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Suburbs We Cover in {areaName}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {suburbs.map((suburb) => (
                    <span 
                      key={suburb} 
                      className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90 border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      {suburb}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/80 mb-3">
                    <strong className="text-white">Fast Response Times:</strong> We serve all suburbs in {areaName} with rapid response and professional service.
                  </p>
                  <p className="text-xs text-white/60">
                    Based in Gauteng, strategically located to serve {areaName} efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                About Our Services
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Your Trusted Partner in {areaName}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">{introduction}</p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With <strong>over 10 years of experience</strong> serving {areaName} and surrounding areas, ZECO Construction has completed <strong>{projectsCompleted}+ successful projects</strong> for residential, commercial, and industrial clients. Our local expertise means we understand the unique requirements of properties in {areaName}.
                </p>
              </div>

              <div className="mb-6 lg:hidden">
                <h3 className="mb-3 text-sm font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  Suburbs We Cover:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {suburbs.map((suburb) => (
                    <span key={suburb} className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground border border-border">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-border">
                <Image
                  src="/modern-renovated-kitchen-interior-design-south-afr.jpg?height=400&width=600"
                  alt={`Professional construction services in ${areaName} - ZECO Construction`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-accent p-6 shadow-2xl border border-border max-w-[200px] hidden md:block">
                <div className="text-4xl font-bold text-accent-foreground mb-1">{projectsCompleted}+</div>
                <div className="text-sm text-accent-foreground/80">Projects Completed in {areaName}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              Comprehensive Services
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Professional Services Available in {areaName}
            </h2>
            <p className="text-muted-foreground text-lg">
              We provide a comprehensive range of construction, maintenance, and infrastructure services to residential,
              commercial, and industrial clients throughout {areaName} and surrounding suburbs.
            </p>
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesOffered.map((service) => (
              <div key={service} className="flex items-start gap-3 rounded-xl bg-card p-5 border border-border hover:border-secondary hover:shadow-lg transition-all group">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="mb-6 text-center text-xl font-bold">Popular Services in {areaName}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex items-center gap-3 rounded-xl bg-card p-5 border border-border transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold group-hover:text-secondary transition-colors block">
                      {service.title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyChooseUs.map((reason, index) => (
                  <Card key={index} className="border-border hover:border-secondary hover:shadow-lg transition-all group">
                    <CardContent className="p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-bold group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {index + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Why {areaName} Residents & Businesses Trust ZECO Construction
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With years of experience serving {areaName} and surrounding areas, we understand the unique needs of
                  local residential and commercial properties. Our commitment to quality workmanship, transparent pricing, and exceptional customer satisfaction has made us the preferred choice for construction and maintenance services.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Based in <strong>Gauteng</strong>, our strategic location enables us to provide <strong>rapid response times of {responseTime}</strong> to all suburbs in {areaName}. We're available for emergency callouts, routine maintenance, and major construction projects.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children}

      {/* Nearby Areas */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-3 text-2xl font-bold">We Also Serve Nearby Areas</h2>
            <p className="text-muted-foreground">
              ZECO Construction provides professional construction and maintenance services throughout Gauteng. 
              Explore our other service areas:
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="flex items-center justify-between gap-2 rounded-xl bg-card px-5 py-4 text-sm font-medium transition-all hover:bg-secondary hover:text-secondary-foreground border border-border hover:shadow-lg group"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary group-hover:text-secondary-foreground" />
                  {area.name}
                </div>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Ready to Start Your Project in {areaName}?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Contact ZECO Construction today for a free consultation and detailed quotation. Our experienced team is ready to provide expert guidance and tailored solutions for your {areaName} property—whether residential, commercial, or industrial.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Request a Free Quote
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="tel:+27748509727">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70">
              Average response time in {areaName}: {responseTime} • Available 24/7 for emergencies
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
