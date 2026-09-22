// File path: app/jojo-water-tank-installation/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/jojo-water-tank-installation
// Built the same way as /plumbing-services: call and WhatsApp first, proof second, copy last.
// Built specifically to run as a Google Ads landing page for "jojo water tank installation" traffic.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Droplet,
  Ruler,
  Layers,
  Wrench,
  Gauge,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Clock,
  Star,
} from "lucide-react"
import { CallButton, WhatsAppCta, StickyCallBar, trackCallClick } from "@/components/plumbing-cta"
import { PHONE_DISPLAY, PHONE_TEL } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "JoJo Tank Installation Gauteng | Pretoria & Joburg",
  description:
    "Professional JoJo water tank installation in Pretoria, Johannesburg, Midrand and Centurion. Stands, plumbing, pumps and pressure systems, all in one visit. Call 074 850 9727 or WhatsApp for a same-day quote.",
  keywords:
    "jojo tank installation Gauteng, jojo water tank installer Pretoria, jojo tank installation Johannesburg, water tank installation Midrand, jojo tank plumber Centurion, water tank pump installation, jojo tank stand installation",
  alternates: {
    canonical: "https://www.zecoconstruction.co.za/jojo-water-tank-installation",
  },
  openGraph: {
    title: "JoJo Tank Installation Gauteng | ZECO Construction",
    description:
      "Stand, plumbing, pump and pressure system, all installed properly in one visit. JoJo tank installers across Pretoria, Johannesburg and Midrand. Call 074 850 9727.",
    images: [
      {
        url: "/jojo_installation.jpg",
        width: 1200,
        height: 630,
        alt: "JoJo water tank installed by ZECO Construction in Gauteng",
      },
    ],
  },
}

const process = [
  {
    step: 1,
    title: "Site visit & tank sizing",
    icon: Ruler,
    description:
      "We look at your roof catchment, household size or business usage, and available space before recommending a tank size. Too small and you run out, too big and you're paying for capacity you'll never fill.",
  },
  {
    step: 2,
    title: "Stand & base preparation",
    icon: Layers,
    description:
      "A JoJo tank full of water is heavy, so the base has to be dead level and properly rated for the weight. We build or check the stand, compact and level the base, and confirm it can carry a full tank before anything goes on top of it.",
  },
  {
    step: 3,
    title: "Tank positioning & pipe connections",
    icon: Droplet,
    description:
      "The tank is positioned, inlet and overflow fitted, and connected into your existing gutters or borehole feed. First-flush diverters and inlet strainers go in here too, so debris doesn't end up in your stored water.",
  },
  {
    step: 4,
    title: "Pump & pressure system",
    icon: Gauge,
    description:
      "If you need pressurised water out of the tank, we install and wire the pump, set up the pressure switch or controller, and plumb it into your existing supply so it feeds the house or garden the way you expect.",
  },
  {
    step: 5,
    title: "Pressure test & handover",
    icon: ShieldCheck,
    description:
      "Every connection is pressure tested before we call the job done. We walk you through the overflow, the pump controls and basic maintenance, so you know exactly how the system works.",
  },
]

const gallery = [
  {
    title: "JoJo tank installation, Randburg",
    image: "/jojo_tank_installation_randburg.jpg",
    alt: "JoJo water tank installed on a stand at a home in Randburg",
    copy: "5,000L JoJo tank on a steel stand, plumbed into the existing gutter downpipes with a first-flush diverter fitted.",
  },
  {
    title: "Tank stand & positioning",
    image: "/jojo_tank_installation.jpg",
    alt: "JoJo water tank stand and positioning during installation",
    copy: "Base levelled and compacted before the stand went up, so the tank sits perfectly flat once it's full.",
  },
  {
    title: "Multiple tank installation",
    image: "/3_jojo_tank_installation.jpg",
    alt: "Three JoJo water tanks installed together for increased storage capacity",
    copy: "Linked tank installation for a household wanting more storage than a single tank could give them.",
  },
  {
    title: "Pump & pressure system",
    image: "/water_pump_for_Jojo_tank.jpg",
    alt: "Water pump installed and plumbed for a JoJo tank system",
    copy: "Pressure pump wired and plumbed in, giving mains-like pressure straight out of the tank.",
  },
  {
    title: "Pipework & controls",
    image: "/water-pump-tank-pipes-green.webp",
    alt: "Plumbed pipework connecting a water pump to a storage tank",
    copy: "Clean pipe runs from tank to pump to supply, labelled and accessible for future servicing.",
  },
  {
    title: "Pump control system",
    image: "/water-pump-tank-pipes-green-controls.webp",
    alt: "Pressure switch and control system wired for a water tank pump",
    copy: "Pressure controller set up so the pump only runs when it needs to, protecting the motor and saving power.",
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
    q: "What size JoJo tank do I actually need?",
    a: "It depends on your roof catchment area, household size, and whether it's backup, garden use or your main supply. We work this out on the site visit rather than guessing, so you get a tank that actually covers your usage instead of one that's too small or an oversized waste of money.",
  },
  {
    q: "Do I need a stand, or can the tank sit on the ground?",
    a: "Smaller tanks can sometimes sit on a compacted, level base directly, but most JoJo tanks are installed on a stand to get gravity feed or to clear the ground for a pump. We'll tell you honestly which your site needs.",
  },
  {
    q: "How long does a full installation take?",
    a: "A straightforward single-tank installation with stand, plumbing and pump is usually done in a day. Larger multi-tank setups or sites needing stand construction from scratch can take longer, which we'll confirm upfront.",
  },
  {
    q: "Can you connect the tank to my existing plumbing?",
    a: "Yes. We plumb the tank into your gutters or borehole feed on the inlet side, and into your house or garden supply on the outlet side, including a changeover valve if you want to switch between tank and municipal water.",
  },
  {
    q: "Do I need a pump, or will gravity feed work?",
    a: "Gravity feed works if the tank is elevated high enough above where the water needs to go, which is common for garden taps. For household pressure, a pump and pressure controller is usually needed, and we size that to match your demand.",
  },
  {
    q: "What does a JoJo tank installation cost?",
    a: "It depends on tank size, whether a stand needs to be built, and whether a pump is included. You get an estimate on the phone and a full itemised quote after the site visit, before any work starts.",
  },
]

export default function JojoTankInstallationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/jojo_installation.jpg"
          alt="JoJo water tank installed by ZECO Construction in Gauteng"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-secondary/50">
              <Droplet className="h-4 w-4" aria-hidden="true" />
              Stand, plumbing, pump — done properly, in one visit
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              JoJo water tank installation across Gauteng
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              From tank sizing to a working pressure system, we handle the whole job: stand, plumbing,
              pump and a pressure test before we leave. Tell us what you need water for and we'll size
              it right the first time.
            </p>

            <a
              href={`tel:${PHONE_TEL}`}
              onClick={trackCallClick}
              className="group mt-8 flex items-center gap-4 text-white"
              aria-label={`Call ZECO Construction on ${PHONE_DISPLAY}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Droplet className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-wide text-white/70">Speak to an installer now</span>
                <span className="block text-3xl font-bold tabular-nums group-hover:underline sm:text-4xl">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us your site photos" />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 md:text-lg"
              >
                Request a quote
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <Ruler className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Correct sizing, not guesswork
              </li>
              <li className="flex items-center gap-2">
                <Gauge className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Pump & pressure systems included
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                Pressure tested before handover
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* THE INSTALLATION PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">How a JoJo tank installation actually works</h2>
            <p className="mt-4 text-muted-foreground">
              Five steps, start to finish. No shortcuts on the base or the pipework, because those are
              what determine whether the tank lasts.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                    {item.step}
                  </span>
                  <item.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CallButton size="md" />
            <WhatsAppCta size="md" label="WhatsApp us a photo of your site" />
          </div>
        </div>
      </section>

      {/* GALLERY, REAL INSTALLATIONS */}
      <section className="border-y border-border bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Real JoJo tank installations across Gauteng</h2>
            <p className="mt-4 text-muted-foreground">
              Stands, pipework and pump systems from jobs in Pretoria, Randburg, Centurion and Johannesburg.
            </p>
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
        </div>
      </section>

      {/* PROOF AND PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Why people choose us for a tank install</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-bold">Sized for real usage</dt>
                <dd className="mt-1 text-muted-foreground">
                  We work out your actual catchment and demand on site, so you're not stuck with a tank
                  that empties in a dry spell or a stand rated for more than you'll ever need.
                </dd>
              </div>
              <div>
                <dt className="font-bold">A base that carries the weight</dt>
                <dd className="mt-1 text-muted-foreground">
                  A full JoJo tank is heavy. We build or check every stand and base properly before the
                  tank goes on, so it stays level and stable for years, not weeks.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Full pump & pressure setup</dt>
                <dd className="mt-1 text-muted-foreground">
                  Plenty of installers stop at the tank. We wire the pump, set the pressure controller, and
                  plumb it into your existing supply so you get usable water pressure out of the tank.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Pressure tested, not just connected</dt>
                <dd className="mt-1 text-muted-foreground">
                  Every fitting is pressure tested before we consider the job done, so you don't find a
                  slow leak three weeks after we've left.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/jojo_tank_installation_randburg.jpg"
              alt="Completed JoJo water tank installation in Randburg"
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
            Where we install
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

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-card py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <ul className="grid gap-6 text-sm sm:grid-cols-3">
            <li className="flex items-center gap-3">
              <Clock className="h-6 w-6 shrink-0 text-secondary" aria-hidden="true" />
              <span>Most installs completed in a day</span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="h-6 w-6 shrink-0 text-secondary" aria-hidden="true" />
              <span>10+ years working across Gauteng</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-secondary" aria-hidden="true" />
              <span>Itemised quote before work starts</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-foreground py-16 text-background">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Ready to get water security sorted?</h2>
          <p className="mx-auto mt-4 max-w-xl text-background/80">
            Call now for a straight answer on tank size and cost, or send us a photo of your site on
            WhatsApp and we'll tell you what it needs.
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

      {/* Structured data: local service plus FAQ rich result */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.zecoconstruction.co.za/jojo-water-tank-installation#service",
            name: "JoJo Water Tank Installation",
            serviceType: "Water tank installation",
            provider: {
              "@type": "Plumber",
              name: "ZECO Construction",
              telephone: "+27-74-850-9727",
              image: "https://www.zecoconstruction.co.za/jojo_installation.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            url: "https://www.zecoconstruction.co.za/jojo-water-tank-installation",
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
