// File path: app/gallery/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/gallery
// Real ZECO Construction project photos only. Every image carries a small
// logo watermark badge so it's unmistakably our own work, not stock or a
// supplier's catalogue — this page is a common sitelink destination.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Images } from "lucide-react"
import { CallButton, WhatsAppCta, StickyCallBar } from "@/components/plumbing-cta"

export const metadata: Metadata = {
  title: "Project Gallery | ZECO Construction Gauteng",
  description:
    "Real completed jobs from ZECO Construction: bathroom renovations, JoJo tank installations, pump repairs and plumbing work across Pretoria, Johannesburg and Gauteng.",
  alternates: {
    canonical: "https://www.zecoconstruction.co.za/gallery",
  },
}

function WatermarkedPhoto({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
          loading="lazy"
        />
        {/* Logo watermark badge, bottom-right corner of every real project photo */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 backdrop-blur-sm">
          <div className="relative h-4 w-4 overflow-hidden rounded-sm bg-white">
            <Image src="/logo-icon.png" alt="" fill sizes="16px" className="object-cover" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-white">
            ZECO Construction
          </span>
        </div>
      </div>
      <figcaption className="p-4 text-sm font-medium text-muted-foreground">{caption}</figcaption>
    </figure>
  )
}

const bathroomRenovations = [
  { src: "/bathroom_renovation_after_complete.jpg", caption: "Full bathroom renovation, completed" },
  { src: "/bathroom_renovation_freestanding_tub.jpg", caption: "Freestanding bath installation" },
  { src: "/shower_glass_installation_complete.jpg", caption: "Glass shower enclosure" },
  { src: "/bathroom_renovation_glass_shower_screen.jpg", caption: "Frameless glass shower screen" },
  { src: "/vanity_black_Bathroom.jpg", caption: "Vanity and basin installation" },
  { src: "/bathroom-cabinets.jpg", caption: "Custom bathroom cabinetry" },
  { src: "/bathroom_tub.jpg", caption: "Bath installation" },
  { src: "/bathroom_renovation_tiling_after.jpg", caption: "Bathroom tiling, completed" },
]

const jojoTanks = [
  { src: "/jojo_installation.jpg", caption: "JoJo tank installation" },
  { src: "/jojo_tank_installation.jpg", caption: "JoJo tank on stand" },
  { src: "/jojo_tank_installation_randburg.jpg", caption: "JoJo tank installation, Randburg" },
  { src: "/3_jojo_tank_installation.jpg", caption: "Multiple tank installation" },
  { src: "/water_pump_for_Jojo_tank.jpg", caption: "Pump fitted for a JoJo tank system" },
]

const pumpsAndBoreholes = [
  { src: "/pump_installation_hero.jpg", caption: "Pump installation" },
  { src: "/water_pump_installation.jpg", caption: "Submersible pump installation" },
  { src: "/pump_systems_boreholes.jpg", caption: "Borehole pump system" },
  { src: "/borehole_pump_water_tank_installation.jpg", caption: "Borehole pump feeding a storage tank" },
  { src: "/pressure_pumps_installations.jpg", caption: "Pressure pump installation" },
  { src: "/pump_supply_replacements.jpg", caption: "Pump breakdown and replacement" },
  { src: "/pump_tank_storage_installation.jpg", caption: "Pump installed for tank storage" },
  { src: "/water_pump_services.jpg", caption: "Pump servicing" },
  { src: "/water-pump-tank-pipes-green.webp", caption: "Pump and tank pipework" },
  { src: "/water-pump-tank-pipes-green-controls.webp", caption: "Pump control system" },
]

const plumbingAndGeysers = [
  { src: "/emergency_plumber_Gauteng.jpg", caption: "Emergency plumbing callout" },
  { src: "/burst_pipe_centurion.jpg", caption: "Burst pipe repair, Centurion" },
  { src: "/blocked_drains.jpg", caption: "Blocked drain clearing" },
  { src: "/blocked_drains_pretoria.jpg", caption: "Blocked drain clearing, Pretoria" },
  { src: "/geyser-installation.jpg", caption: "Geyser installation" },
  { src: "/kwikot_geyser_installation.jpg", caption: "Kwikot geyser installation" },
  { src: "/solar_geyser_installation_pretoria.jpg", caption: "Solar geyser installation, Pretoria" },
  { src: "/apollo_solar_geyser_installation.jpg", caption: "Apollo solar geyser installation" },
]

const categories = [
  { title: "Bathroom Renovations", href: "/bathroom-renovations", items: bathroomRenovations },
  { title: "JoJo Tank Installations", href: "/jojo-water-tank-installation", items: jojoTanks },
  { title: "Pumps & Boreholes", href: "/pump-installation-repairs", items: pumpsAndBoreholes },
  { title: "Plumbing & Geysers", href: "/plumbing-services", items: plumbingAndGeysers },
]

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-border bg-muted py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
            <Images className="h-4 w-4" aria-hidden="true" />
            Real jobs, not stock photos
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Our project gallery
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Every photo here is from a completed ZECO Construction job across Pretoria, Johannesburg and
            Gauteng, not a supplier's catalogue.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppCta size="lg" label="WhatsApp us" />
          </div>
        </div>
      </section>

      {categories.map((category, i) => (
        <section key={category.href} className={i % 2 === 1 ? "bg-muted py-16 lg:py-20" : "py-16 lg:py-20"}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-bold">{category.title}</h2>
              <Link
                href={category.href}
                className="text-sm font-semibold text-secondary hover:underline"
              >
                View this service →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.items.map((item) => (
                <WatermarkedPhoto key={item.src} src={item.src} alt={item.caption} caption={item.caption} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-foreground py-16 text-background">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Want work like this at your place?</h2>
          <p className="mx-auto mt-4 max-w-xl text-background/80">
            Call now, or send us a photo on WhatsApp and we&apos;ll tell you what it needs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppCta size="lg" label="WhatsApp us" />
          </div>
        </div>
      </section>

      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyCallBar />
    </>
  )
}
