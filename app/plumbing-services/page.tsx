// File path: app/plumbing-services/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/plumbing-services
// Built as a Google Ads landing page: call and WhatsApp first, proof second, copy last.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, ShieldCheck, Star, MapPin, CheckCircle2, Phone } from "lucide-react"
import { CallButton, WhatsAppCta, StickyCallBar, PHONE_DISPLAY, PHONE_TEL } from "@/components/plumbing-cta"

export const metadata: Metadata = {
  title: "Plumber Gauteng | 24/7 Emergency Plumbing Pretoria & Joburg",
  description:
    "Licensed plumbers in Pretoria, Johannesburg, Midrand and Centurion. Burst pipes, blocked drains, leaks and geyser installation. 24/7 callouts, COC issued. Call 074 850 9727 or WhatsApp for a same-day quote.",
  keywords:
    "plumber Gauteng, emergency plumber Pretoria, plumber Johannesburg, burst pipe repair, blocked drain cleaning, geyser installation Midrand, leak detection Centurion, 24 hour plumber",
  alternates: {
    canonical: "https://www.zecoconstruction.co.za/plumbing-services",
  },
  openGraph: {
    title: "24/7 Plumber in Pretoria & Johannesburg | ZECO Construction",
    description:
      "Burst pipes, blocked drains, leaks and geysers. Licensed plumbers, 24/7 response across Gauteng. Call 074 850 9727.",
    images: [
      {
        url: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
        width: 1200,
        height: 630,
        alt: "ZECO Construction plumber repairing pipes in Gauteng",
      },
    ],
  },
}

const jobs = [
  {
    title: "Burst pipes",
    image: "/burst_pipe_centurion.jfif",
    alt: "Plumber repairing a burst water pipe at a home in Centurion",
    copy: "Water shut off, pipe cut out and replaced the same visit. We patch and pressure test before we leave.",
  },
  {
    title: "Blocked drains",
    image: "/blocked_drains.jfif",
    alt: "High pressure jetting machine clearing a blocked drain",
    copy: "High pressure jetting and CCTV camera inspection so you know what caused the blockage, not just that it cleared.",
  },
  {
    title: "Geyser installation",
    image: "/kwikot_geyser_installation.jfif",
    alt: "New Kwikot geyser installed in a Gauteng roof space",
    copy: "Kwikot and Heat Tech geysers supplied, installed and certified. Insurance replacements handled start to finish.",
  },
  {
    title: "Solar geysers",
    image: "/solar_geyser_installation_pretoria.jfif",
    alt: "Solar geyser panels installed on a roof in Pretoria",
    copy: "Apollo and flat plate solar systems sized to your household, wired with a backup element for cloudy weeks.",
  },
  {
    title: "Leak detection",
    image: "/professional-plumber-working-on-pipes-installation.jpg",
    alt: "Plumber using electronic leak detection equipment on a water pipe",
    copy: "Acoustic and thermal equipment finds the leak under the slab or in the wall before anyone breaks tiles.",
  },
  {
    title: "Emergency callouts",
    image: "/emergency_plumber_Gauteng.jfif",
    alt: "ZECO emergency plumber arriving at a callout in Gauteng",
    copy: "After hours, weekends and public holidays. A plumber answers the phone, not a call centre.",
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
  "Roodepoort",
  "Bedfordview",
  "Kempton Park",
]

const faqs = [
  {
    q: "How quickly can a plumber get to me?",
    a: "For emergencies in Pretoria, Centurion, Midrand and Johannesburg we aim to be on site within 60 to 90 minutes, depending on traffic and where the nearest team is working. Call us and we will tell you the honest arrival time before you commit.",
  },
  {
    q: "What does a callout cost?",
    a: "You get a callout fee and an estimate on the phone before we drive out. Once the plumber has seen the problem you get an itemised quote for materials and labour, and nothing starts until you approve it.",
  },
  {
    q: "Do you issue a plumbing Certificate of Compliance?",
    a: "Yes. We issue a plumbing COC for geyser replacements, new installations, alterations and property transfers. All work is done to SANS 10252 and the National Building Regulations.",
  },
  {
    q: "Can you handle an insurance geyser claim?",
    a: "We do. We assess the geyser, supply the report and photos your insurer needs, install the replacement and issue the COC so the claim closes cleanly.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. Offices, retail, restaurants, schools, clinics and complexes, including grease traps, backflow prevention and scheduled maintenance outside your trading hours.",
  },
]

export default function PlumbingServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/professional-plumber-working-on-pipes-in-a-gauteng-.jpg"
          alt="ZECO Construction plumber working on water pipes in Gauteng"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-secondary/50">
              <Clock className="h-4 w-4" aria-hidden="true" />
              24 hours, 7 days, including public holidays
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Licensed plumbers in Pretoria and Johannesburg
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Burst pipe, blocked drain, hidden leak or a geyser that has given up. Tell us what is
              happening and we will be there today with the parts to fix it.
            </p>

            {/* Phone number as a first class element, not a footer detail */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="group mt-8 flex items-center gap-4 text-white"
              aria-label={`Call ZECO Construction on ${PHONE_DISPLAY}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Phone className="h-6 w-6" aria-hidden="true" />
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
                <ShieldCheck className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                COC issued on installations
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                10+ years in Gauteng
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Quote before work starts
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE FIX, WITH REAL PHOTOS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">What we get called out for</h2>
            <p className="mt-4 text-muted-foreground">
              Photographs from jobs across Pretoria, Centurion, Midrand and Johannesburg.
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
          <h2 className="text-2xl font-bold">Looking for something specific?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/emergency-plumber-burst-pipes"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">Emergency plumber and burst pipes</h3>
              <p className="mt-1 text-sm text-muted-foreground">24/7 response, water stopped fast.</p>
            </Link>
            <Link
              href="/geyser-installation-repairs"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">Geyser installation and repairs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Electric, solar and Kwikot, COC included.</p>
            </Link>
            <Link
              href="/blocked-drains-unblocking"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">Blocked drains</h3>
              <p className="mt-1 text-sm text-muted-foreground">Jetting and CCTV inspection.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF AND PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Why people call us back</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-bold">A plumber answers the phone</dt>
                <dd className="mt-1 text-muted-foreground">
                  You describe the problem to someone who can tell you what it is likely to cost and how
                  soon a team can be there.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Fully stocked vehicles</dt>
                <dd className="mt-1 text-muted-foreground">
                  Fittings, pipe, elements, thermostats and valves are on the van, so most jobs finish on
                  the first visit instead of a second callout.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Itemised quotes, no surprises</dt>
                <dd className="mt-1 text-muted-foreground">
                  Materials and labour are listed separately. If we find something extra behind the wall we
                  stop and call you before spending your money.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Compliance you can hand to an insurer</dt>
                <dd className="mt-1 text-muted-foreground">
                  Work is done to SANS 10252 with a Certificate of Compliance on installations, geyser
                  replacements and property transfers.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/24hr-Emergency-Plumber-Johannesburg.png"
              alt="ZECO Construction 24 hour emergency plumber in Johannesburg"
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
          <h2 className="text-3xl font-bold lg:text-4xl">Water running where it should not be?</h2>
          <p className="mx-auto mt-4 max-w-xl text-background/80">
            Call now and speak to a plumber, or send a photo on WhatsApp and we will tell you what it needs.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
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

      {/* Structured data: local plumber plus FAQ rich result */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            "@id": "https://www.zecoconstruction.co.za/plumbing-services#plumber",
            name: "ZECO Construction Plumbing",
            url: "https://www.zecoconstruction.co.za/plumbing-services",
            telephone: "+27-74-850-9727",
            image: "https://www.zecoconstruction.co.za/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
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
              name: "Plumbing services",
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
