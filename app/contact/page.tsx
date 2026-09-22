import type { Metadata } from "next"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallButton, WhatsAppCta, StickyCallBar, trackCallClick } from "@/components/plumbing-cta"
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/contact-info"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, CheckCircle, Award, Zap, Shield } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export const metadata: Metadata = {
  title: "Contact ZECO Construction | Free Quote in Gauteng - Pretoria, Johannesburg & Midrand",
  description:
    "Contact ZECO Construction for building, renovations, maintenance, paving, or civil works in Gauteng. Free consultation and same-day quotes. Call +27 74 850 9727.",
  keywords: "contact ZECO Construction, construction quote Gauteng, free consultation Pretoria, building contractor Johannesburg, Midrand construction company, emergency services",
  openGraph: {
    title: "Contact ZECO Construction | Free Quote in Gauteng",
    description:
      "Get in touch for all building, maintenance, and infrastructure needs in Pretoria, Johannesburg, and Gauteng. Free quotes, 24/7 emergency support, same-day response.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ZECO Construction",
      },
    ],
  },
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Coverage Area",
    details: ["Gauteng, South Africa", "Serving Pretoria & Johannesburg"],
    href: "https://www.google.com/maps?q=ZECO+Construction+Gauteng+South+Africa",
    highlight: true,
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    details: ["+27 74 850 9727"],
    href: "tel:+27748509727",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@zecoconstruction.co.za"],
    href: "mailto:info@zecoconstruction.co.za",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 5:00 PM", "24/7 Emergency Support"],
    highlight: false,
  },
]

const serviceAreas = [
  { name: "Pretoria", featured: true },
  { name: "Johannesburg", featured: true },
  { name: "Midrand", featured: true },
  { name: "Sandton", featured: false },
  { name: "Centurion", featured: false },
  { name: "Fourways", featured: false },
  { name: "Randburg", featured: false },
  { name: "Bedfordview", featured: false },
  { name: "Rosebank", featured: false },
  { name: "Roodepoort", featured: false },
]

const benefits = [
  {
    icon: CheckCircle,
    text: "Same-day response & quotes",
  },
  {
    icon: Shield,
    text: "Licensed & fully insured",
  },
  {
    icon: Award,
    text: "500+ completed projects",
  },
  {
    icon: Zap,
    text: "24/7 emergency support",
  },
]

const gallery = [
  {
    image: "/construction-team-meeting-on-site-in-gauteng.jpg",
    alt: "ZECO Construction team on site in Gauteng",
  },
  {
    image: "/professional-plumber-working-on-pipes-installation.jpg",
    alt: "ZECO Construction plumber at work on a Gauteng job",
  },
  {
    image: "/property-maintenance-worker-fixing-repairs-profess.jpg",
    alt: "ZECO Construction maintenance team completing repairs",
  },
  {
    image: "/modern-building-construction-site-with-scaffolding.jpg",
    alt: "ZECO Construction building project underway in Gauteng",
  },
  {
    image: "/jojo_installation.jpg",
    alt: "JoJo water tank installed by ZECO Construction",
  },
  {
    image: "/24hr-Emergency-Plumber-Johannesburg.png",
    alt: "ZECO Construction 24 hour emergency plumber in Johannesburg",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
        <Image
          src="/construction-team-meeting-on-site-in-gauteng.jpg"
          alt="ZECO Construction team on site in Gauteng"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-25"
        />
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs variant="onDark" items={[{ label: "Contact Us" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <Phone className="h-4 w-4 text-accent animate-pulse" aria-hidden="true" />
              <span>Available 24/7 for Emergencies</span>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Talk to Us <span className="text-accent">Right Now</span>
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed">
              For building, renovations, maintenance, paving, or civil works in <strong className="text-white">Gauteng</strong>,
              call or WhatsApp <strong className="text-white">ZECO Construction</strong> directly. No forms, no waiting
              for a callback, just a straight answer from a real person.
            </p>

            {/* Fast contact buttons, front and centre */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us now" />
            </div>

            {/* Quick Benefits */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2 text-sm text-white/90">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                    <benefit.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24" itemScope itemType="https://schema.org/ContactPage">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Contact Details
            </span>
            <h2 className="mb-2 text-3xl font-bold">The Fastest Way to Reach Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Call or WhatsApp for the quickest response. Prefer email? That works too, we just can't
              promise it's as fast as a phone call.
            </p>
          </div>

          <div
            className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2"
            itemProp="contactPoint"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <meta itemProp="contactType" content="Customer Service" />
            <meta itemProp="areaServed" content="Gauteng, South Africa" />
            <meta itemProp="availableLanguage" content="English" />

            {contactInfo.map((info) => (
              <div
                key={info.title}
                className={`group flex items-start gap-4 p-5 rounded-xl transition-all ${
                  info.highlight
                    ? 'bg-secondary/5 border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-lg'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                    info.highlight ? 'bg-secondary text-secondary-foreground' : 'bg-secondary/10 text-secondary'
                  } group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{info.title}</h3>
                  {info.details.map((detail, index) =>
                    info.href ? (
                      <a
                        key={detail}
                        href={info.href}
                        onClick={info.icon === Phone ? trackCallClick : undefined}
                        className={`block transition-colors ${
                          info.highlight
                            ? 'text-secondary font-semibold hover:text-secondary/80'
                            : 'text-muted-foreground hover:text-secondary'
                        }`}
                        target={info.icon === MapPin ? "_blank" : undefined}
                        rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                        itemProp={info.icon === Phone ? "telephone" : info.icon === Mail ? "email" : undefined}
                      >
                        {detail}
                        {index === 1 && info.title === "Business Hours" && (
                          <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                            <Zap className="h-3 w-3" aria-hidden="true" /> URGENT
                          </span>
                        )}
                      </a>
                    ) : (
                      <p key={detail} className="text-muted-foreground">
                        {detail}
                        {index === 1 && info.title === "Business Hours" && (
                          <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                            <Zap className="h-3 w-3" aria-hidden="true" /> EMERGENCY
                          </span>
                        )}
                      </p>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold">No Hidden Fees</p>
                <p className="text-xs text-muted-foreground">Transparent pricing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <Shield className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold">Fully Licensed</p>
                <p className="text-xs text-muted-foreground">NHBRC & CIDB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid, real work across Gauteng */}
      <section className="border-y border-border bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold">Real Jobs, Real Teams, Across Gauteng</h2>
            <p className="mt-3 text-muted-foreground">
              A look at the work behind the phone call, from plumbing to construction to maintenance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {gallery.map((item) => (
              <div key={item.image} className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links + Service Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            {/* Social Links */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted to-muted/50">
              <h3 className="mb-4 font-bold flex items-center gap-2">
                <span>Connect With Us</span>
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61592716047862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all hover:bg-[#1877F2] hover:text-white hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/zecoconstruction?igsh=bnFldWhiZ2FpeGph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/27748509727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all hover:bg-[#25D366] hover:text-white hover:scale-110 hover:shadow-lg"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Follow us for project updates, tips, and special offers
              </p>
            </div>

            {/* Service Areas */}
            <div className="rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 p-6 border border-border">
              <h3 className="mb-4 font-bold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" aria-hidden="true" />
                We Serve All of Gauteng
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {serviceAreas.map((area) => (
                  <span
                    key={area.name}
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                      area.featured
                        ? 'bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:scale-105'
                        : 'bg-card hover:bg-secondary/10 hover:scale-105'
                    }`}
                  >
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {area.name}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Don't see your area?{" "}
                <a
                  href={`tel:${PHONE_TEL}`}
                  onClick={trackCallClick}
                  className="text-secondary font-semibold hover:underline"
                >
                  Call us
                </a>{" "}
                - we cover the entire province!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-foreground py-16 text-background">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Ready when you are.</h2>
          <p className="mx-auto mt-4 max-w-xl text-background/80">
            No forms to fill in. Call or WhatsApp and we'll take it from there.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={trackCallClick}
            className="mt-6 inline-block text-4xl font-bold tabular-nums hover:underline sm:text-5xl"
          >
            {PHONE_DISPLAY}
          </a>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppCta size="lg" label="WhatsApp us" />
          </div>
        </div>
      </section>

      {/* Padding so the sticky mobile bar never covers the last CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyCallBar />
    </>
  )
}
