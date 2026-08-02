import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, ArrowRight, Star, Award, Shield, Clock, type LucideIcon } from "lucide-react"

interface ServicePageTemplateProps {
  title: string
  description: string
  icon: LucideIcon
  heroImage: string
  features: string[]
  benefits: { title: string; description: string; icon?: LucideIcon }[]
  process?: { step: number; title: string; description: string }[]
  relatedServices?: { title: string; href: string; icon?: LucideIcon }[]
  serviceAreas?: string[]
  priceRange?: string
  responseTime?: string
  children?: ReactNode
}

const trustBadges = [
  { icon: Award, text: "Licensed & Certified" },
  { icon: Shield, text: "Fully Insured" },
  { icon: Star, text: "500+ Projects" },
  { icon: Clock, text: "24/7 Support" },
]

export function ServicePageTemplate({
  title,
  description,
  icon: Icon,
  heroImage,
  features,
  benefits,
  process,
  relatedServices,
  serviceAreas,
  priceRange,
  responseTime = "Same-day",
  children,
}: ServicePageTemplateProps) {
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
          <Breadcrumbs 
            variant="onDark"
            items={[
              { label: "Services", href: "/services" }, 
              { label: title }
            ]} 
          />
          
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              {/* Icon Badge */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg ring-2 ring-white/20">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </div>

              {/* Title & Description */}
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
                {title} <span className="text-accent">in Gauteng</span>
              </h1>
              <p className="text-pretty text-lg text-primary-foreground/90 leading-relaxed mb-8">
                {description}
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {responseTime && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/20">
                    <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span>{responseTime} quotes</span>
                  </div>
                )}
                {priceRange && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/20">
                    <Award className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span>{priceRange}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/20">
                  <Star className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>5-Star Service</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold transition-transform hover:scale-105"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    Get Free Quote
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-base font-semibold transition-transform hover:scale-105"
                >
                  <Link href="tel:+27748509727">
                    Call: +27 74 850 9727
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src={heroImage || "/placeholder.svg"}
                  alt={`Professional ${title} services in Gauteng - ZECO Construction`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent/90 p-6 text-accent-foreground shadow-2xl ring-2 ring-white/20">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-semibold">Years</p>
                <p className="text-xs opacity-90">Experience</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-sm text-white/90">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <badge.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                What We Offer
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Our <span className="text-secondary">{title}</span> Services
              </h2>
              <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
                <strong>ZECO Construction</strong> provides comprehensive {title.toLowerCase()} solutions for residential, commercial, and
                industrial clients across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider <strong>Gauteng</strong> region.
              </p>
              
              <ul className="grid gap-4">
                {features.map((feature, index) => (
                  <li 
                    key={feature} 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={heroImage || "/placeholder.svg"}
                  alt={`${title} - ZECO Construction`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Service Areas Card - Desktop Only */}
            {serviceAreas && serviceAreas.length > 0 && (
              <div className="hidden lg:block">
                <Card className="border-2 border-secondary/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                        <Award className="h-5 w-5 text-secondary" aria-hidden="true" />
                      </div>
                      <span>Service Areas in Gauteng</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {serviceAreas.map((area) => (
                        <span 
                          key={area} 
                          className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1.5 text-sm font-medium hover:bg-secondary/20 transition-colors"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Don't see your area? <Link href="/contact" className="text-secondary font-semibold hover:underline">Contact us</Link> - we serve all of Gauteng!
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Benefits of Our <span className="text-secondary">{title}</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience the ZECO Construction difference with our professional, reliable service
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="group border border-border hover:border-secondary/50 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all group-hover:scale-110">
                    {benefit.icon ? (
                      <benefit.icon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <span className="text-xl font-bold">{index + 1}</span>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      {process && process.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Our Process
              </span>
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                How We <span className="text-secondary">Work</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Our streamlined process ensures efficient project execution from start to finish
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <div key={step.step} className="relative group">
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-secondary to-transparent -z-10" aria-hidden="true" />
                  )}

                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-xl font-bold text-secondary-foreground shadow-lg ring-2 ring-secondary/20 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Content */}
      {children}

      {/* Related Services - Enhanced */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="bg-gradient-to-b from-muted to-muted/50 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold">Related Services You Might Need</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex flex-col items-center gap-3 rounded-xl bg-card p-6 border border-border transition-all hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1"
                >
                  {service.icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  )}
                  <span className="text-sm font-semibold text-center group-hover:text-secondary transition-colors">
                    {service.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Ready to Get <span className="text-accent">Started?</span>
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Contact <strong className="text-white">ZECO Construction</strong> today for a free consultation and detailed quotation for your {title.toLowerCase()} project
              in <strong className="text-white">Gauteng</strong>. Same-day quotes available!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold transition-transform hover:scale-105"
              >
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
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              24/7 Emergency Support • Licensed & Insured • Serving All Gauteng • Free Consultations
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
