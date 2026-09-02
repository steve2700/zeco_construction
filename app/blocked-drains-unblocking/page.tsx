// File path: app/blocked-drains-unblocking/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/blocked-drains-unblocking

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Waves, Search, Wrench, ShieldCheck, Timer, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Blocked Drains Unblocking Gauteng | Fast Drain Cleaning",
  description:
    "Professional blocked drain unblocking in Gauteng. High-pressure jetting, CCTV inspection & fast drain cleaning in Pretoria & Johannesburg. Call today.",
  keywords:
    "blocked drains Gauteng, drain unblocking Pretoria, drain cleaning Johannesburg, blocked sewer Midrand, CCTV drain inspection, blocked toilet drain",
  openGraph: {
    title: "Blocked Drains Unblocking Gauteng | Fast Drain Cleaning",
    description:
      "Fast, effective blocked drain unblocking across Gauteng. High-pressure jetting, CCTV inspection, and same-day service in Pretoria & Johannesburg.",
    images: [
      {
        url: "/blocked_drains.jfif",
        width: 1200,
        height: 630,
        alt: "Blocked drain unblocking service in Gauteng - ZECO Construction",
      },
    ],
  },
}

export default function BlockedDrainsPage() {
  return (
    <ServicePageTemplate
      title="Blocked Drains Unblocking"
      description="Slow drainage, bad odors, or a backed-up sink are early signs of a blocked drain — and they only get worse. We clear blocked drains fast using high-pressure jetting and CCTV inspection, across residential and commercial properties in Gauteng."
      icon={Waves}
      heroImage="/blocked_drains.jfif"
      priceRange="Free Quote & Assessment"
      responseTime="Same-Day Service Available"
      features={[
        "Kitchen sink unblocking (grease & food debris)",
        "Bathroom basin & shower drain clearing",
        "Blocked toilet clearing",
        "Main sewer line unblocking",
        "Stormwater drain clearing",
        "Floor drain unblocking",
        "High-pressure water jetting",
        "Mechanical augering for stubborn blockages",
        "CCTV drain inspection & diagnosis",
        "Root cutting for tree root intrusion",
        "Preventive drain maintenance",
        "Emergency blocked sewer response",
      ]}
      benefits={[
        {
          title: "CCTV Drain Inspection",
          description:
            "We use CCTV cameras to see exactly what's causing the blockage before we start work — no guesswork, no unnecessary digging or disruption to your property.",
          icon: Search,
        },
        {
          title: "High-Pressure Jetting",
          description:
            "Our jetting equipment clears blockages and cleans pipe walls thoroughly, reducing the chance of the same blockage recurring within weeks.",
          icon: Waves,
        },
        {
          title: "Root Cause, Not Just Symptoms",
          description:
            "We identify why a drain keeps blocking — whether it's grease buildup, tree roots, or a structural pipe issue — and recommend a lasting fix.",
          icon: CheckCircle,
        },
        {
          title: "Same-Day Response",
          description:
            "Blocked drains rarely wait for a convenient time. We offer same-day service across Pretoria, Johannesburg, and Midrand wherever possible.",
          icon: Timer,
        },
        {
          title: "No Unnecessary Excavation",
          description:
            "Modern diagnostic tools mean we can locate and clear most blockages without digging up your garden or breaking into walls.",
          icon: Wrench,
        },
        {
          title: "Licensed & Insured Team",
          description:
            "All drain work is carried out by licensed plumbers, with compliance certification issued where structural repairs are required.",
          icon: ShieldCheck,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Call & Describe the Problem",
          description:
            "Tell us what's happening — slow drainage, bad smells, or a complete backup — so we can bring the right equipment for the job.",
        },
        {
          step: 2,
          title: "CCTV Inspection & Diagnosis",
          description:
            "Where needed, we run a CCTV camera through the drain to pinpoint the exact location and cause of the blockage.",
        },
        {
          step: 3,
          title: "Clearing the Blockage",
          description:
            "Using high-pressure jetting, mechanical augering, or root cutting as appropriate, we clear the blockage and clean the pipe.",
        },
        {
          step: 4,
          title: "Verification & Prevention Advice",
          description:
            "We verify the drain is flowing freely and share practical tips to help prevent the same blockage from recurring.",
        },
      ]}
      relatedServices={[
        { title: "Plumbing Services", href: "/plumbing-services", icon: Wrench },
        { title: "Emergency Plumber & Burst Pipes", href: "/emergency-plumber-burst-pipes", icon: Waves },
        { title: "Geyser Installation & Repairs", href: "/geyser-installation-repairs", icon: CheckCircle },
        { title: "Waterproofing Services", href: "/waterproofing-services", icon: ShieldCheck },
      ]}
      serviceAreas={[
        "Pretoria",
        "Johannesburg",
        "Midrand",
        "Sandton",
        "Centurion",
        "Fourways",
        "Randburg",
        "Rosebank",
        "Bedfordview",
        "Roodepoort",
      ]}
    >
      {/* Additional Content Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Common Causes of Blocked Drains</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Blocked drains build up gradually or happen suddenly, depending on the cause. Kitchen sinks
                commonly block from grease and food debris, bathroom drains from hair and soap buildup, and
                toilets from foreign objects. Main sewer lines can block from tree root intrusion, while
                stormwater drains often clog with leaves and debris after heavy rain. Left untreated, blocked
                drains lead to backups, unpleasant odors, and potential sewage overflow.
              </p>

              <div className="my-8 overflow-hidden rounded-xl border border-border">
                <img
                  src="/blocked_drains_pretoria.jfif"
                  alt="Blocked drain clearing service in Pretoria, Gauteng"
                  className="w-full h-auto object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Signs You Have a Blocked Drain</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Slow-draining sinks, showers, or baths are usually the first warning sign. Watch also for
                gurgling sounds from drains, unpleasant odors near sinks or outside drains, water pooling
                around floor drains, and multiple fixtures draining slowly at once — which often points to a
                blockage further down the main line rather than an isolated fixture issue.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Preventing Future Blockages</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Regular drain maintenance goes a long way toward avoiding repeat call-outs. Avoid pouring
                grease or oil down kitchen drains, use drain guards to catch hair and debris, and consider
                periodic professional cleaning for properties with mature trees near sewer lines. If a drain
                blocks repeatedly despite these precautions, it's worth a CCTV inspection to identify an
                underlying structural issue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
