// File path: app/blocked-drains-unblocking/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/blocked-drains-unblocking
// Built the same way as /plumbing-services, /emergency-plumber-burst-pipes and
// /geyser-installation-repairs: call and WhatsApp first, proof second, copy last.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Waves,
  Search,
  Wrench,
  ShieldCheck,
  Timer,
  CheckCircle2,
  MapPin,
} from "lucide-react"
import { CallButton, WhatsAppCta, StickyCallBar, trackCallClick } from "@/components/plumbing-cta"
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/contact-info"
export const metadata: Metadata = {
  title: "Blocked Drains Unblocking Gauteng | Fast Drain Cleaning",
  description:
    "Blocked drain, toilet or sewer in Pretoria, Johannesburg, Midrand or Centurion? High-pressure jetting and CCTV inspection, same-day service. Call 074 850 9727.",
  keywords:
    "blocked drains Gauteng, drain unblocking Pretoria, drain cleaning Johannesburg, blocked sewer Midrand, CCTV drain inspection, blocked toilet drain",
  alternates: {
    canonical: "https://www.zecoconstruction.co.za/blocked-drains-unblocking",
  },
  openGraph: {
    title: "Blocked Drains Unblocking Gauteng | Fast Drain Cleaning",
    description:
      "Fast, effective blocked drain unblocking across Gauteng. High-pressure jetting, CCTV inspection, and same-day service in Pretoria & Johannesburg.",
    images: [
      {
        url: "/blocked_drains.jpg",
        width: 1200,
        height: 630,
        alt: "Blocked drain unblocking service in Gauteng - ZECO Construction",
      },
    ],
  },
}

const jobs = [
  {
    title: "Kitchen sink unblocking",
    image: "/blocked_drains.jpg",
    alt: "Plumber unblocking a kitchen sink drain",
    copy: "Grease and food debris are the most common cause. Jetted clear so it doesn't slow to a crawl again in a fortnight.",
  },
  {
    title: "Bathroom & shower drains",
    image: "/professional-plumber-working-on-pipes-installation.jpg",
    alt: "Plumber clearing a bathroom shower drain blockage",
    copy: "Hair and soap buildup cleared properly, not just pushed further down the pipe.",
  },
  {
    title: "Blocked toilets",
    image: "/blocked_drains_pretoria.jpg",
    alt: "Plumber clearing a blocked toilet drain in Pretoria",
    copy: "Foreign objects and paper buildup cleared fast, with a camera check if it's blocking repeatedly.",
  },
  {
    title: "Main sewer line unblocking",
    image: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
    alt: "Plumber unblocking a main sewer line",
    copy: "Tree root intrusion and structural pipe issues found on camera before we recommend root cutting or a repair.",
  },
  {
    title: "Stormwater drain clearing",
    image: "/burst_pipe_centurion.jpg",
    alt: "Plumber clearing a stormwater drain of leaves and debris",
    copy: "Leaves and debris jetted out so water actually drains away next time it rains, not around your property.",
  },
  {
    title: "CCTV drain inspection",
    image: "/emergency_plumber_Gauteng.jpg",
    alt: "Plumber running a CCTV camera inspection through a drain",
    copy: "We see exactly what's causing a repeat blockage before we dig or quote for anything.",
  },
]

const areas = [
  "Pretoria",
  "Centurion",
  "Midrand",
  "Johannesburg",
  "Sandton",
  "Randburg",
  "Fourways",
  "Rosebank",
  "Bedfordview",
  "Roodepoort",
]

const faqs = [
  {
    q: "Can you clear a blocked drain the same day?",
    a: "In most cases, yes. Slow drains, blocked toilets and backed-up sinks are same-day work across Pretoria, Centurion, Midrand and Johannesburg wherever our schedule allows.",
  },
  {
    q: "Will you dig up my garden to fix it?",
    a: "Usually not. CCTV inspection lets us see exactly what's blocking the line before we touch anything, so most blockages are cleared with jetting or augering, no excavation needed.",
  },
  {
    q: "My drain keeps blocking. Why?",
    a: "A repeat blockage usually points to something further down the line, tree root intrusion, a collapsed section of pipe, or a structural issue rather than a one-off clog. A CCTV inspection tells us which, so the fix actually lasts.",
  },
  {
    q: "What does a callout cost?",
    a: "You get a callout fee and an estimate on the phone before we drive out. Once we've seen or camera-inspected the blockage, you get an itemised quote before any work starts.",
  },
  {
    q: "Do you clear blocked drains for businesses too?",
    a: "Yes, restaurants, offices, retail and complexes, including grease trap blockages, outside your trading hours where needed.",
  },
]

export default function BlockedDrainsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/blocked_drains.jpg"
          alt="ZECO Construction clearing a blocked drain in Gauteng"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-secondary/50">
              <Waves className="h-4 w-4" aria-hidden="true" />
              High-pressure jetting & CCTV inspection
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Blocked drains cleared fast, across Gauteng
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Slow drainage, bad smells or a backed-up sink only get worse from here. Tell us what's
              happening and we'll clear it properly, not just push the problem further down the pipe.
            </p>

            <a
              href={`tel:${PHONE_TEL}`}
              onClick={trackCallClick}
              className="group mt-8 flex items-center gap-4 text-white"
              aria-label={`Call ZECO Construction on ${PHONE_DISPLAY}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Waves className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-wide text-white/70">Speak to a plumber now</span>
                <span className="block text-3xl font-bold tabular-nums group-hover:underline sm:text-4xl">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us" />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 md:text-lg"
              >
                Request a quote
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <Search className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                CCTV inspection, no guesswork
              </li>
              <li className="flex items-center gap-2">
                <Timer className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Same-day service available
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Usually no digging required
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE CLEAR, WITH REAL PHOTOS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Blockages we clear every week</h2>
            <p className="mt-4 text-muted-foreground">
              Real jobs from callouts across Pretoria, Centurion, Midrand and Johannesburg.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <article
                key={job.title}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={job.image}
                    alt={job.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CallButton size="md" />
            <WhatsAppCta size="md" label="Send us a photo on WhatsApp" />
          </div>
        </div>
      </section>

      {/* DEEPER PAGES, KEEPS ADS QUALITY SCORE AND INTERNAL LINKING */}
      <section className="border-y border-border bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Looking for something else?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/emergency-plumber-burst-pipes"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">Sewer backing up right now?</h3>
              <p className="mt-1 text-sm text-muted-foreground">24/7 emergency response.</p>
            </Link>
            <Link
              href="/plumbing-services"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">All plumbing services</h3>
              <p className="mt-1 text-sm text-muted-foreground">Everything we do, callouts and scheduled work.</p>
            </Link>
            <Link
              href="/geyser-installation-repairs"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">Geyser installation and repairs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Electric, solar and Kwikot, COC included.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF AND PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Why people call us for a blocked drain</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-bold">We see it before we touch it</dt>
                <dd className="mt-1 text-muted-foreground">
                  CCTV inspection shows exactly what's causing the blockage before we start work, so there's
                  no unnecessary digging or disruption to your property.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Cleared properly, not just pushed on</dt>
                <dd className="mt-1 text-muted-foreground">
                  High-pressure jetting clears the blockage and cleans the pipe walls, which is why our jobs
                  don't come back a few weeks later.
                </dd>
              </div>
              <div>
                <dt className="font-bold">The actual cause, not just the symptom</dt>
                <dd className="mt-1 text-muted-foreground">
                  Grease buildup, tree roots or a structural pipe issue all need different fixes. We tell you
                  which one you've got and recommend a lasting solution, not a repeat callout.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Licensed team, certified when needed</dt>
                <dd className="mt-1 text-muted-foreground">
                  All drain work is carried out by licensed plumbers, with a Certificate of Compliance issued
                  where structural repairs are required.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/blocked_drains_pretoria.jpg"
              alt="ZECO Construction clearing a blocked drain in Pretoria"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <MapPin className="h-6 w-6 text-secondary" aria-hidden="true" />
            Where we work
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Not on the list? Call {PHONE_DISPLAY} and we will tell you straight away whether we cover you.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold">Questions we get asked first</h2>
          <div className="mt-8 divide-y divide-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-foreground py-16 text-background">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Drain not draining? Let's clear it.</h2>
          <p className="mx-auto mt-4 max-w-xl text-background/80">
            Call now and speak to a plumber, or send a photo on WhatsApp and we will tell you what it needs.
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

      {/* Structured data: local drain service plus FAQ rich result */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            "@id": "https://www.zecoconstruction.co.za/blocked-drains-unblocking#plumber",
            name: "ZECO Construction Blocked Drains",
            url: "https://www.zecoconstruction.co.za/blocked-drains-unblocking",
            telephone: "+27-74-850-9727",
            image: "https://www.zecoconstruction.co.za/blocked_drains.jpg",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Drain unblocking services",
              itemListElement: jobs.map((job) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: job.title },
              })),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  )
}
