// File path: app/emergency-plumber-burst-pipes/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/emergency-plumber-burst-pipes

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Zap, AlertTriangle, Timer, ShieldCheck, PhoneCall, Droplets } from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency Plumber Gauteng | 24/7 Burst Pipe Repairs",
  description:
    "24/7 emergency plumber in Gauteng. Fast burst pipe repairs, flood control & emergency leak stops in Pretoria, Johannesburg & Midrand. Call now for rapid response.",
  keywords:
    "emergency plumber Gauteng, burst pipe repairs Pretoria, 24 hour plumber Johannesburg, emergency plumbing Midrand, burst pipe repair near me, emergency leak repair Gauteng",
  openGraph: {
    title: "Emergency Plumber Gauteng | 24/7 Burst Pipe Repairs",
    description:
      "Burst pipe? Major leak? Our emergency plumbing team responds fast, 24/7, across Pretoria, Johannesburg & Midrand.",
    images: [
      {
        url: "/24hr-Emergency-Plumber-Johannesburg.png",
        width: 1200,
        height: 630,
        alt: "24/7 Emergency Plumber in Johannesburg - ZECO Construction",
      },
    ],
  },
}

export default function EmergencyPlumberPage() {
  return (
    <ServicePageTemplate
      title="Emergency Plumber & Burst Pipe Repairs"
      description="Burst pipe flooding your home? Water everywhere and no idea where to turn off the supply? Our emergency plumbing team responds fast, 24/7, across Gauteng. We stop the damage first, then fix it properly — with a compliance certificate to back it up."
      icon={AlertTriangle}
      heroImage="/24hr-Emergency-Plumber-Johannesburg.png"
      priceRange="Free Emergency Quote"
      responseTime="Rapid 24/7 Response"
      features={[
        "24/7 emergency call-out, every day of the year",
        "Burst pipe repairs & full replacements",
        "Emergency water shut-off & flood control",
        "Blocked sewer & drain emergencies",
        "Geyser burst response & flood damage limitation",
        "No water supply — fault-finding & repair",
        "Frozen or cracked pipe repairs",
        "Temporary repairs to stop damage immediately",
        "Permanent repairs following emergency response",
        "Insurance assessor coordination & documentation",
        "After-hours, weekend & public holiday response",
        "Certificate of Compliance (COC) after all repairs",
      ]}
      benefits={[
        {
          title: "Fast Response, Every Time",
          description:
            "Plumbing emergencies don't wait for business hours, and neither do we. We dispatch fully equipped teams as soon as you call, minimizing water damage and disruption to your property.",
          icon: Timer,
        },
        {
          title: "Fully Equipped Emergency Vehicles",
          description:
            "Our emergency vehicles carry the tools, pipe fittings, and diagnostic equipment needed to handle most burst pipe and leak emergencies on the first visit.",
          icon: Zap,
        },
        {
          title: "Licensed Emergency Plumbers",
          description:
            "Every emergency call-out is handled by a licensed plumber with the experience to diagnose the real problem fast — not just patch the symptom.",
          icon: ShieldCheck,
        },
        {
          title: "Damage Control First",
          description:
            "Our first priority is always stopping the water and limiting damage to your property. Permanent repairs follow once the immediate danger is under control.",
          icon: Droplets,
        },
        {
          title: "Transparent Emergency Pricing",
          description:
            "No surprise call-out fees or inflated after-hours charges. We confirm estimated costs upfront before any work begins, even in an emergency.",
          icon: AlertTriangle,
        },
        {
          title: "One Call Does It All",
          description:
            "From the emergency shut-off to the final compliance certificate, one team handles the entire job — no juggling multiple contractors during a crisis.",
          icon: PhoneCall,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Call Us Immediately",
          description:
            "Contact our emergency line as soon as you notice a burst pipe or major leak. We talk you through immediate steps — like locating your main water shut-off — while our team is dispatched.",
        },
        {
          step: 2,
          title: "Emergency Water Shut-Off",
          description:
            "On arrival, our plumber's first job is stopping the water and preventing further damage to your property, belongings, and structure.",
        },
        {
          step: 3,
          title: "Rapid Diagnosis & Temporary Fix",
          description:
            "We identify the root cause and apply a temporary or immediate repair to restore water safely, buying time to plan the permanent fix if needed.",
        },
        {
          step: 4,
          title: "Permanent Repair & Certification",
          description:
            "We complete the permanent repair using quality materials, pressure-test the system, and issue a Certificate of Compliance where required.",
        },
      ]}
      relatedServices={[
        { title: "Plumbing Services", href: "/plumbing-services", icon: Droplets },
        { title: "Geyser Installation & Repairs", href: "/geyser-installation-repairs", icon: Zap },
        { title: "Blocked Drains Unblocking", href: "/blocked-drains-unblocking", icon: AlertTriangle },
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
            <h2 className="mb-8 text-3xl font-bold">What Counts as a Plumbing Emergency?</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Not every plumbing issue needs an emergency call-out, but some situations require immediate
                attention to prevent serious damage. Common plumbing emergencies include burst pipes causing
                active flooding, major leaks that can't be contained, geysers bursting and flooding ceilings,
                blocked sewers backing up into your home, complete loss of water supply, and frozen or cracked
                pipes in winter. If water is actively damaging your property right now, it's an emergency —
                call us immediately.
              </p>

              <div className="my-8 overflow-hidden rounded-xl border border-border">
                <img
                  src="/burst_pipe_centurion.jfif"
                  alt="Emergency burst pipe repair in Centurion, Gauteng"
                  className="w-full h-auto object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">What to Do While You Wait for Help</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have a burst pipe, locate and close your property's main water shut-off valve
                immediately — this is usually near your water meter. Switch off electricity to any affected
                areas if water is near electrical outlets or fittings. Move furniture and valuables away from
                the water where safe to do so, and avoid using appliances connected to the affected pipework.
                Our team will guide you through these steps over the phone if you're unsure.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Why Fast Response Matters</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every minute a burst pipe or major leak goes unaddressed increases the risk of structural
                damage, mold growth, and costly repairs to floors, ceilings, and finishes. Our emergency team
                is equipped and ready to respond quickly across Pretoria, Johannesburg, and Midrand — because
                when it comes to burst pipes, speed is the difference between a quick fix and a major
                renovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
