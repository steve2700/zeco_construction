// File path: app/bathroom-renovations/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/bathroom-renovations
// Built the same way as /pump-installation-repairs: call and WhatsApp first,
// proof second, copy last. Leads with real before/after pairs from completed jobs.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Bath,
  Layers,
  ShowerHead,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
  Images,
} from "lucide-react"
import { CallButton, WhatsAppCta, StickyCallBar, trackCallClick } from "@/components/plumbing-cta"
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Bathroom Renovations Gauteng | Pretoria & Johannesburg",
  description:
    "Full bathroom renovations in Pretoria, Johannesburg, Midrand and Centurion. Tiling, freestanding baths, glass showers, vanities and cabinetry, one team start to finish. Call 074 850 9727 or WhatsApp for a same-day quote.",
  keywords:
    "bathroom renovations Gauteng, bathroom renovation contractors, bathroom installation Johannesburg, bathroom fitters Johannesburg, bathroom remodeling Pretoria, bathroom renovations near me, freestanding bath installation, bathroom tiling Gauteng",
  alternates: {
    canonical: "https://www.zecoconstruction.co.za/bathroom-renovations",
  },
  openGraph: {
    title: "Bathroom Renovations Gauteng | ZECO Construction",
    description:
      "Tiling, freestanding baths, glass showers and vanities, done properly, start to finish. Bathroom renovations across Pretoria and Johannesburg. Call 074 850 9727.",
    images: [
      {
        url: "/complete_bathroom_renovation_tiling_tub_installation.jpg",
        width: 1200,
        height: 630,
        alt: "Completed bathroom renovation by ZECO Construction in Gauteng",
      },
    ],
  },
}

const beforeAfterPairs = [
  {
    title: "Full bathroom renovation",
    before: "/bathroom_renovation_before.jpg",
    after: "/bathroom_renovation_after_complete.jpg",
    copy: "Full strip-out and rebuild: new tiling, freestanding tub, vanity and toilet, all in one visit sequence.",
  },
  {
    title: "Tiling, floor and walls",
    before: "/bathroom_renovation_tiling_before.jpg",
    after: "/bathroom_renovation_tiling_after.jpg",
    copy: "Waterproofed and tiled properly before anything goes back in, so the finish lasts.",
  },
]

const gallery = [
  {
    title: "Freestanding bath installation",
    image: "/bathroom_renovation_freestanding_tub.jpg",
    alt: "Freestanding bathtub installed during a ZECO Construction bathroom renovation",
    copy: "Plumbed, levelled and sealed, with the tiling finished around it rather than fitted afterward.",
  },
  {
    title: "Glass shower installation",
    image: "/bathroom_renovation_glass_shower_screen.jpg",
    alt: "Glass shower screen installed in a renovated Gauteng bathroom",
    copy: "Frameless glass screens fitted true and sealed properly, no leaks at the base or the wall junction.",
  },
  {
    title: "Shower enclosure, completed",
    image: "/shower_glass_installation_complete.jpg",
    alt: "Completed glass shower enclosure in a Gauteng bathroom renovation",
    copy: "Tiled shower base, glass enclosure and fittings, finished and ready to use.",
  },
  {
    title: "Vanity & basin installation",
    image: "/vanity_black_Bathroom.jpg",
    alt: "Black vanity and basin installed in a renovated bathroom",
    copy: "Plumbed in and levelled, matched to the tiling and fittings around it rather than an afterthought.",
  },
  {
    title: "Bathroom cabinetry",
    image: "/bathroom-cabinets.jpg",
    alt: "Custom bathroom cabinetry installed by ZECO Construction",
    copy: "Built-in storage sized to the room, so towels, toiletries and cleaning supplies actually have a home.",
  },
  {
    title: "Bath installation",
    image: "/bathroom_tub.jpg",
    alt: "Bathtub installed and plumbed during a bathroom renovation",
    copy: "Positioned, plumbed and pressure tested before the tiling closes in around it.",
  },
]

const areas = [
  "Pretoria",
  "Johannesburg",
  "Centurion",
  "Midrand",
  "Sandton",
  "Randburg",
  "Fourways",
  "Rosebank",
  "Bedfordview",
  "Roodepoort",
]

const faqs = [
  {
    q: "How long does a full bathroom renovation take?",
    a: "A standard bathroom, strip-out to finish, usually runs 7 to 12 working days depending on tiling extent and whether we're moving plumbing points. Larger or ensuite renovations can take longer, which we'll confirm on the site visit.",
  },
  {
    q: "Can you move the toilet, basin or shower to a different spot?",
    a: "Yes, though relocating plumbing points adds time and cost versus keeping fixtures where they are. We'll tell you honestly what a reposition involves before you commit to it.",
  },
  {
    q: "Do you handle waterproofing yourselves, or is that a separate contractor?",
    a: "We do it ourselves, as part of the same job. Waterproofing under the tiling is the single biggest factor in whether a bathroom lasts or leaks in a few years, so we don't hand it off to a separate trade.",
  },
  {
    q: "Can I supply my own tiles, bath or vanity?",
    a: "Yes. Plenty of clients source their own fittings and tiles, we install them. We'll size and confirm compatibility with your plumbing before the job starts either way.",
  },
  {
    q: "Do you offer a fixed price, or does it change once you start?",
    a: "You get an itemised quote after the site visit, before any work starts. If something unexpected turns up once we open the walls or floor, we stop and confirm with you before spending anything extra.",
  },
  {
    q: "Do I need to move out during the renovation?",
    a: "Not usually, if you have a second bathroom. For a single-bathroom home we'll talk through the timeline honestly so you know what to expect rather than being surprised mid-job.",
  },
]

export default function BathroomRenovationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/complete_bathroom_renovation_tiling_tub_installation.jpg"
          alt="Completed bathroom renovation by ZECO Construction in Gauteng"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-secondary/50">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Strip-out to finish, one team throughout
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Bathroom renovations across Gauteng
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Tiling, waterproofing, a freestanding bath or a walk-in shower, done properly and finished
              on time. Tell us what you want and we&apos;ll quote it honestly, start to finish.
            </p>

            
              href={`tel:${PHONE_TEL}`}
              onClick={trackCallClick}
              className="group mt-8 flex items-center gap-4 text-white"
              aria-label={`Call ZECO Construction on ${PHONE_DISPLAY}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Bath className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-wide text-white/70">Speak to a renovation team now</span>
                <span className="block text-3xl font-bold tabular-nums group-hover:underline sm:text-4xl">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us your bathroom photos" />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 md:text-lg"
              >
                Request a quote
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <Layers className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Waterproofing done properly
              </li>
              <li className="flex items-center gap-2">
                <ShowerHead className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Baths, showers, vanities & cabinetry
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Itemised quote before work starts
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Real renovations, before and after</h2>
            <p className="mt-4 text-muted-foreground">
              Actual jobs, not stock photos. What the room looked like when we started, and what it looked
              like when we left.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {beforeAfterPairs.map((pair) => (
              <div key={pair.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={pair.before}
                      alt={`Before: ${pair.title}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <span className="absolute left-2 top-2 rounded-md bg-foreground/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-background">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={pair.after}
                      alt={`After: ${pair.title}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <span className="absolute left-2 top-2 rounded-md bg-secondary px-2 py-1 text-xs font-bold uppercase tracking-wide text-secondary-foreground">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{pair.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pair.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINISHED WORK GALLERY */}
      <section className="border-y border-border bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold lg:text-4xl">Finished bathroom work</h2>
              <p className="mt-4 text-muted-foreground">
                Baths, showers, vanities and cabinetry from renovations across Pretoria, Centurion and
                Johannesburg.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-secondary"
            >
              <Images className="h-4 w-4" aria-hidden="true" />
              View the full project gallery
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((job) => (
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
                    loading="lazy"
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
            <WhatsAppCta size="md" label="Send us a photo of your bathroom" />
          </div>
        </div>
      </section>

      {/* DEEPER PAGES, KEEPS ADS QUALITY SCORE AND INTERNAL LINKING */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Looking for something else?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/plumbing-services"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">All plumbing services</h3>
              <p className="mt-1 text-sm text-muted-foreground">Callouts, installs and scheduled work.</p>
            </Link>
            <Link
              href="/geyser-installation-repairs"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">Geyser installation and repairs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Electric, solar and Kwikot, COC included.</p>
            </Link>
            <Link
              href="/kitchen-bathroom-cupboards"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-secondary"
            >
              <h3 className="font-bold">Kitchen & bathroom cupboards</h3>
              <p className="mt-1 text-sm text-muted-foreground">Custom cabinetry and built-in storage.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF AND PROCESS */}
      <section className="border-t border-border py-16 lg:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Why people choose us for a renovation</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-bold">Waterproofing first, always</dt>
                <dd className="mt-1 text-muted-foreground">
                  Nothing gets tiled over until the waterproofing is done and checked, because that's the
                  layer that decides whether the room lasts or leaks.
                </dd>
              </div>
              <div>
                <dt className="font-bold">One team, start to finish</dt>
                <dd className="mt-1 text-muted-foreground">
                  Plumbing, tiling, waterproofing and cabinetry under one job, not four separate contractors
                  you have to coordinate yourself.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Itemised quotes, no surprises</dt>
                <dd className="mt-1 text-muted-foreground">
                  You approve the quote before we start. If something unexpected turns up once we open the
                  wall or floor, we stop and call you before spending anything extra.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Real jobs, not a showroom</dt>
                <dd className="mt-1 text-muted-foreground">
                  Every photo on this page is from a completed ZECO Construction job in Gauteng, not a
                  supplier's catalogue.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/bathroom_renovation_after_complete.jpg"
              alt="Completed bathroom renovation, freestanding tub and vanity, by ZECO Construction"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <MapPin className="h-6 w-6 text-secondary" aria-hidden="true" />
            Where we renovate
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
          <h2 className="text-3xl font-bold lg:text-4xl">Ready to plan your renovation?</h2>
          <p className="mx-auto mt-4 max-w-xl text-background/80">
            Call now for an honest quote, or send us a photo of your bathroom on WhatsApp and we&apos;ll
            tell you what it needs.
          </p>
          
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

      {/* Structured data: local service plus FAQ rich result */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.zecoconstruction.co.za/bathroom-renovations#service",
            name: "Bathroom Renovations",
            serviceType: "Bathroom renovation",
            provider: {
              "@type": "GeneralContractor",
              name: "ZECO Construction",
              telephone: "+27-74-850-9727",
              image: "https://www.zecoconstruction.co.za/complete_bathroom_renovation_tiling_tub_installation.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            url: "https://www.zecoconstruction.co.za/bathroom-renovations",
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
