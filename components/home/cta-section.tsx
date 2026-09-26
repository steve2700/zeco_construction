import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight, Clock, MapPin, Shield } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/professional-construction-workers-team.jpg"
          alt="ZECO Construction - Ready to start your project"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
            <Shield className="h-4 w-4 text-accent" />
            Free Consultation & Quote Available
          </div>

          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-10 text-pretty text-lg text-primary-foreground/80 md:text-xl">
            Contact ZECO Construction today for a consultation or quotation. Our team is ready to provide professional
            advice, detailed quotations, and project support tailored to your needs in Pretoria, Johannesburg, and
            throughout Gauteng.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-14 px-8 text-base"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Request a Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-xl shadow-[#25D366]/25 h-14 px-8 text-base"
            >
              <a href="https://wa.me/27748509727" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-14 px-8 text-base"
            >
              <Link href="mailto:info@zecoconstruction.co.za">
                <Mail className="mr-2 h-5 w-5" />
                Email Us Directly
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 mx-auto">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-white">Same-Day Response</p>
              <p className="mt-1 text-xs text-white/70">Quick turnaround on all quotes</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 mx-auto">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-white">On-Site Consultation</p>
              <p className="mt-1 text-xs text-white/70">Free visits across Gauteng</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 mx-auto">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-white">No Obligation Quote</p>
              <p className="mt-1 text-xs text-white/70">Transparent pricing guaranteed</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 border-t border-primary-foreground/20 pt-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-accent">16+</p>
              <p className="text-sm text-primary-foreground/70">Service Categories</p>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-4xl font-bold text-accent">10+</p>
              <p className="text-sm text-primary-foreground/70">Areas Served</p>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-4xl font-bold text-accent">500+</p>
              <p className="text-sm text-primary-foreground/70">Projects Completed</p>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-4xl font-bold text-accent">98%</p>
              <p className="text-sm text-primary-foreground/70">Client Satisfaction</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              Learn more about our company and values
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
