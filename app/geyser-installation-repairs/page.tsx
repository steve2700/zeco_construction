// File path: app/geyser-installation-repairs/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/geyser-installation-repairs
// Built the same way as /plumbing-services and /emergency-plumber-burst-pipes:
// call and WhatsApp first, proof second, copy last.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Flame,
  Sun,
  Wrench,
  ShieldCheck,
  Timer,
  CheckCircle2,
  MapPin,
  Droplets,
} from "lucide-react"
import { CallButton, WhatsAppCta, StickyCallBar, trackCallClick } from "@/components/plumbing-cta"
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Geyser Installation & Repairs Gauteng | Kwikot Certified",
  description:
    "Electric, solar and Kwikot geyser installation and repairs in Pretoria, Johannesburg, Midrand and Centurion. Same-day installs, COC issued, insurance claims handled. Call 074 850 9727.",
  keywords:
    "geyser installation Gauteng, Kwikot geyser installation, solar geyser installation Pretoria, geyser repairs Johannesburg, geyser replacement Midrand, electric geyser installation",
  alternates: {
    canonical: "https://www.zecoconstruction.co.za/geyser-installation-repairs",
  },
  openGraph: {
    title: "Geyser Installation & Repairs Gauteng | Kwikot Certified",
    description:
      "Electric, solar and Kwikot geyser installation and repairs across Gauteng. Same-day quotes, licensed installers, full compliance certification.",
    images: [
      {
        url: "/geyser-installation.jfif",
        width: 1200,
        height: 630,
        alt: "Geyser installation by ZECO Construction in Gauteng",
      },
    ],
  },
}

const jobs = [
  {
    title: "Electric geyser installation",
    image: "/geyser-installation.jfif",
    alt: "Electric geyser being installed in a Gauteng home",
    copy: "50L to 400L units, correctly sized for your household so you're not paying to heat water you never use.",
  },
  {
    title: "Kwikot installation & servicing",
    image: "/kwikot_geyser_installation.jfif",
    alt: "Kwikot geyser installed in a Gauteng roof space",
    copy: "Certified Kwikot installers. Full manufacturer warranty support, whether it's a new unit or a service on an existing one.",
  },
  {
    title: "Solar geyser installation",
    image: "/solar_geyser_installation_pretoria.jfif",
    alt: "Solar geyser panels installed on a roof in Pretoria",
    copy: "Panels sized to your household with an electric backup element, so hot water keeps running through load shedding and cloudy weeks.",
  },
  {
    title: "Element & thermostat repairs",
    image: "/professional-plumber-working-on-pipes-installation.jpg",
    alt: "Plumber repairing a geyser element and thermostat",
    copy: "Lukewarm water, tripping breakers or a rumbling tank usually mean a fault, not a full replacement. We diagnose before we quote.",
  },
  {
    title: "Insurance geyser replacements",
    image: "/burst_pipe_centurion.jfif",
    alt: "Insurance geyser replacement handled by ZECO Construction",
    copy: "Assessment report, photos and COC supplied so your claim closes without you chasing paperwork.",
  },
  {
    title: "Annual servicing",
    image: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
    alt: "Plumber servicing a geyser as part of annual maintenance",
    copy: "Anode checks, valve servicing and leak checks that catch a failure before it becomes a flooded ceiling.",
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
    q: "Can you install a new geyser the same day?",
    a: "Often, yes. Where stock and roof access allow, we can remove the old unit and have a new one installed and certified the same day, so your household isn't without hot water any longer than necessary.",
  },
  {
    q: "How do you decide what size geyser I need?",
    a: "We assess how many people are in the property, peak usage times and your existing plumbing and electrical setup before recommending a size. Undersized geysers run out of hot water, oversized ones waste electricity, so we size it properly rather than guessing.",
  },
  {
    q: "Which brands do you install and service?",
    a: "We're certified Kwikot installers and also work with Heat Tech, Geyserwise and Suntech units. We service every major brand, not just the ones we sell, so an existing geyser doesn't need to be ours to get fixed.",
  },
  {
    q: "Is a geyser burst covered by insurance?",
    a: "Most household policies cover a burst geyser and the resulting damage. We supply the assessment report and photos your insurer asks for, install the replacement, and issue the COC so the claim goes through cleanly.",
  },
  {
    q: "Do you issue a Certificate of Compliance?",
    a: "Yes, on every installation and replacement, to SANS 10254. You'll need this for insurance validity and for a property transfer, and we hand it over as soon as the job is done.",
  },
  {
    q: "Does a solar geyser actually work during load shedding?",
    a: "The panels heat the water regardless of the power grid. The backup electric element is what needs power, so on sunny days you'll have hot water through an outage, and the backup element tops it up once the power's back.",
  },
]

export default function GeyserInstallationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/geyser-installation.jfif"
          alt="ZECO Construction geyser installation in Gauteng"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-secondary/50">
              <Flame className="h-4 w-4" aria-hidden="true" />
              Certified Kwikot installers, same-day installs available
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Geyser installation and repairs across Gauteng
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              No hot water is never just an inconvenience. Tell us what your geyser is doing and we'll
              tell you honestly whether it needs a repair or a replacement, then get it sorted properly.
            </p>

            <a
              href={`tel:${PHONE_TEL}`}
              onClick={trackCallClick}
              className="group mt-8 flex items-center gap-4 text-white"
              aria-label={`Call ZECO Construction on ${PHONE_DISPLAY}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Flame className="h-6 w-6" aria-hidden="true" />
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
              <WhatsAppCta size="lg" label="WhatsApp us a photo" />
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
                COC issued on every install
              </li>
              <li className="flex items-center gap-2">
                <Timer className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Same-day installs available
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Insurance claims handled
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE INSTALL AND FIX, WITH REAL PHOTOS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Geyser work we do every week</h2>
            <p className="mt-4 text-muted-foreground">
              Real installs and repairs from jobs across Pretoria, Centurion, Midrand and Johannesburg.
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
              <h3 className="font-bold">Geyser burst right now?</h3>
              <p className="mt-1 text-sm text-muted-foreground">24/7 emergency response, water stopped fast.</p>
            </Link>
            <Link
              href="/plumbing-services"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">All plumbing services</h3>
              <p className="mt-1 text-sm text-muted-foreground">Everything we do, callouts and scheduled work.</p>
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
            <h2 className="text-3xl font-bold lg:text-4xl">Why people choose us for a geyser job</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-bold">Sized properly, not guessed</dt>
                <dd className="mt-1 text-muted-foreground">
                  We assess household size and usage before recommending a unit, so you're not stuck with
                  cold showers or paying to heat water nobody uses.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Repair first when it makes sense</dt>
                <dd className="mt-1 text-muted-foreground">
                  A faulty element or thermostat doesn't always mean a new geyser. We diagnose the actual
                  fault and recommend whichever option is more cost-effective for you.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Insurance-ready from day one</dt>
                <dd className="mt-1 text-muted-foreground">
                  Assessment reports, photos and a Certificate of Compliance are supplied as standard, so a
                  claim doesn't stall waiting on paperwork from us.
                </dd>
              </div>
              <div>
                <dt className="font-bold">We service what we didn't sell</dt>
                <dd className="mt-1 text-muted-foreground">
                  Kwikot, Heat Tech, Geyserwise or Suntech, already installed or brand new, we service every
                  major brand.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/solar_geyser_installation_pretoria.jfif"
              alt="Solar geyser installation completed by ZECO Construction in Pretoria"
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
            Where we install and service
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
          <h2 className="text-3xl font-bold lg:text-4xl">No hot water? Let's get that sorted.</h2>
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

      {/* Structured data: local geyser service plus FAQ rich result */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            "@id": "https://www.zecoconstruction.co.za/geyser-installation-repairs#plumber",
            name: "ZECO Construction Geyser Installation & Repairs",
            url: "https://www.zecoconstruction.co.za/geyser-installation-repairs",
            telephone: "+27-74-850-9727",
            image: "https://www.zecoconstruction.co.za/geyser-installation.jfif",
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
              name: "Geyser installation and repair services",
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
