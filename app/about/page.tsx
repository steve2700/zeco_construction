import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Target, Eye, CheckCircle, Users, Shield, Award, Leaf, Handshake, ArrowRight, Phone, Star, Building2, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About ZECO Construction | Building & Infrastructure Experts in Gauteng",
  description:
    "Learn about ZECO Construction - Gauteng's trusted building partner for construction, infrastructure, maintenance & security solutions. 10+ years serving Pretoria, Johannesburg & Midrand.",
  keywords: "about ZECO Construction, construction company Gauteng, building contractors Pretoria, infrastructure Johannesburg, company history, mission vision values",
  openGraph: {
    title: "About ZECO Construction | Building & Infrastructure Experts in Gauteng",
    description:
      "Gauteng's trusted building partner. Licensed professionals delivering construction, maintenance, and infrastructure solutions in Pretoria, Johannesburg & Midrand.",
    images: [
      {
        url: "/construction-team-meeting-on-site-in-gauteng.jpg",
        width: 1200,
        height: 630,
        alt: "ZECO Construction team on construction site",
      },
    ],
  },
}

const values = [
  {
    icon: Award,
    title: "Excellence in Every Project",
    description:
      "We deliver the highest standards of workmanship, ensuring client satisfaction, safety, and long-term value in every project. Quality is never compromised.",
  },
  {
    icon: Shield,
    title: "Safety & Full Compliance",
    description:
      "We maintain strict adherence to NHBRC, CIDB, SABS, and ECSA standards. South African building, electrical, and plumbing regulations are our foundation.",
  },
  {
    icon: Leaf,
    title: "Innovation & Sustainability",
    description:
      "We embrace eco-friendly construction methods and sustainable practices, offering cost-effective solutions that are environmentally responsible and future-ready.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnerships",
    description:
      "We build lasting relationships with our clients through trust, transparency, and consistent delivery of exceptional results. Your success is our success.",
  },
]

const team = [
  { role: "Highly skilled engineers", icon: Building2 },
  { role: "Experienced technicians", icon: Users },
  { role: "Professional carpenters", icon: Award },
  { role: "Licensed plumbers", icon: Shield },
  { role: "Qualified electricians", icon: Award },
  { role: "Dedicated project managers", icon: Users },
]

const stats = [
  { value: "500+", label: "Projects Completed", sublabel: "Across Gauteng" }, // TODO: confirm real project count
  { value: "10+", label: "Years Experience", sublabel: "In Construction" },
  { value: "98%", label: "Client Satisfaction", sublabel: "5-Star Reviews" }, // TODO: confirm real satisfaction rate
  { value: "15+", label: "Service Categories", sublabel: "Comprehensive Solutions" }, // TODO: confirm real service count
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs variant="onDark" items={[{ label: "About Us" }]} />
          
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <Award className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Gauteng's Trusted Construction Partner for 10+ Years</span>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              About <span className="text-accent">ZECO Construction</span>
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed">
              Founded with the vision to provide top-quality, reliable, and fully integrated building and infrastructure
              services in <strong className="text-white">Gauteng</strong>, ZECO Construction has become a trusted partner for residential, commercial, industrial,
              and public sector clients across <strong className="text-white">Pretoria, Johannesburg, and Midrand</strong>.
            </p>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Introduction - Enhanced with Image Optimization */}
      <section className="py-16 lg:py-24" itemScope itemType="https://schema.org/Organization">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Who We Are
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl" itemProp="name">
                Your Trusted Partner for Construction & Infrastructure in Gauteng
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed" itemProp="description">
                <strong>ZECO Construction</strong> is a proudly South African company delivering comprehensive construction, property
                maintenance, civil works, paving, security, electrical, plumbing, solar, and renovation services
                specifically for clients in <strong>Gauteng</strong>, including <strong>Pretoria, Johannesburg, and Midrand</strong>.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We specialize in providing reliable, high-quality services for residential, commercial, industrial, and
                public sector projects. Our integrated approach minimizes the need for multiple contractors while
                guaranteeing quality, compliance, and professionalism from start to finish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With <strong>over 10 years of experience</strong>, we are committed to innovative solutions, sustainability, and exceeding client expectations in every
                project we undertake.
              </p>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Shield className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">Fully Licensed</p>
                    <p className="text-xs text-muted-foreground">NHBRC & CIDB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">24/7 Available</p>
                    <p className="text-xs text-muted-foreground">Emergency Support</p>
                  </div>
                </div>
              </div>

              <meta itemProp="address" content="Johannesburg, Gauteng, South Africa" />
              <meta itemProp="areaServed" content="Gauteng, Pretoria, Johannesburg, Midrand" />
            </div>
            
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/construction-team-meeting-on-site-in-gauteng-south-.jpg"
                  alt="ZECO Construction professional construction team reviewing building plans on site in Gauteng, South Africa"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent/90 p-6 text-accent-foreground shadow-2xl ring-2 ring-white/20">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-semibold">Years</p>
                <p className="text-xs opacity-90">Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="bg-gradient-to-b from-muted to-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <div className="group rounded-2xl bg-card p-8 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl group-hover:text-secondary transition-colors">Our Mission</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Deliver excellence in every project, ensuring <strong>client satisfaction, safety, and long-term value</strong> through quality workmanship.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Maintain the highest standards of <strong>safety, compliance, and quality</strong> in accordance with South African regulations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Foster <strong>sustainable and innovative solutions</strong> that benefit our clients and the environment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Build <strong>long-lasting relationships</strong> based on trust, transparency, and exceptional service delivery.
                  </span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="group rounded-2xl bg-card p-8 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg group-hover:scale-110 transition-transform">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl group-hover:text-secondary transition-colors">Our Vision</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Become the <strong>most trusted and sought-after</strong> multi-service construction and maintenance company in
                    Gauteng and beyond.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    <strong>Empower communities</strong> by delivering quality infrastructure and property solutions that improve lives.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Lead in <strong>innovation, sustainability, and service excellence</strong> within the South African construction
                    industry.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Set the benchmark for <strong>integrated construction services</strong> that deliver exceptional value.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - Enhanced */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/diverse-construction-team-working-together-in-gaut.jpg"
                  alt="Diverse ZECO Construction team collaborating on building project in Gauteng"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Team Size Badge */}
              <div className="absolute bottom-4 left-4 rounded-xl bg-primary/95 backdrop-blur-sm px-4 py-3 shadow-xl ring-2 ring-white/20">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Users className="h-5 w-5" aria-hidden="true" />
                  <div>
                    {/* TODO: confirm real team size */}
                    <p className="text-sm font-bold">50+ Professionals</p>
                    <p className="text-xs opacity-90">Expert Team</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Our Team
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                A Team <span className="text-secondary">Committed to Excellence</span>
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                {/* TODO: confirm real team size */}
                We bring together a team of <strong>50+ highly skilled professionals</strong> committed to excellence. Our years of
                experience in construction, maintenance, and infrastructure sectors allow us to provide tailored
                solutions for residential, commercial, and industrial clients across Gauteng.
              </p>

              {/* Team Members Grid */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                {team.map((member) => (
                  <div key={member.role} className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-secondary/10 hover:border-secondary/30 border border-transparent transition-all">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 flex-shrink-0">
                      <member.icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium">{member.role}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="/contact">
                    Work With Our Team
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-secondary/30 hover:bg-secondary/10 transition-transform hover:scale-105"
                >
                  <Link href="/services">
                    View Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Enhanced */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Our Core Values
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              The Principles That <span className="text-secondary">Guide Everything We Do</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values shape every decision we make, every project we deliver, and every relationship we build.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="group relative rounded-2xl bg-card p-6 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 hover:-translate-y-2"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-sm font-bold text-secondary-foreground shadow-lg ring-2 ring-white/20">
                  {index + 1}
                </div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:scale-110 transition-all">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-lg font-bold group-hover:text-secondary transition-colors">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full rounded-b-2xl" />
              </div>
            ))}
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
              Ready to Partner with <span className="text-accent">ZECO Construction</span>?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Contact us today to discuss your construction, maintenance, or infrastructure project. We're here to
              provide expert guidance, transparent quotes, and tailored solutions for your needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold transition-transform hover:scale-105"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Get Your Free Quote
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

            <p className="text-sm text-primary-foreground/70">
              Serving Gauteng • Licensed & Insured • 24/7 Emergency Support
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
