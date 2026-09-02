// File path: app/geyser-installation-repairs/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/geyser-installation-repairs

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Flame, Sun, Wrench, ShieldCheck, Timer, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Geyser Installation & Repairs Gauteng | Kwikot Certified",
  description:
    "Expert geyser installation & repairs in Gauteng. Electric, solar & Kwikot geysers. Licensed installers, compliance certificates, Pretoria & Johannesburg.",
  keywords:
    "geyser installation Gauteng, Kwikot geyser installation, solar geyser installation Pretoria, geyser repairs Johannesburg, geyser replacement Midrand, electric geyser installation",
  openGraph: {
    title: "Geyser Installation & Repairs Gauteng | Kwikot Certified",
    description:
      "Electric, solar & Kwikot geyser installation and repairs across Gauteng. Same-day quotes, licensed installers, full compliance certification.",
    images: [
      {
        url: "/geyser-installation.jfif",
        width: 1200,
        height: 630,
        alt: "Geyser installation service in Gauteng - ZECO Construction",
      },
    ],
  },
}

export default function GeyserInstallationPage() {
  return (
    <ServicePageTemplate
      title="Geyser Installation & Repairs"
      description="No hot water is never just an inconvenience — it disrupts your entire household or business. We install and repair electric, solar, and Kwikot geysers across Gauteng, with same-day quotes, proper sizing, and full compliance certification on every installation."
      icon={Flame}
      heroImage="/geyser-installation.jfif"
      priceRange="Free Quote & Site Assessment"
      responseTime="Same-Day Installation Available"
      features={[
        "Electric geyser installation (50L to 400L)",
        "Solar geyser installation with electric backup",
        "Kwikot geyser installation & servicing",
        "Heat pump systems for energy efficiency",
        "Geyser replacements & upgrades",
        "Element & thermostat replacements",
        "Valve servicing & pressure relief repairs",
        "Timer installation for load shedding schedules",
        "Leak repairs (tanks, fittings, connections)",
        "Anode replacements to prevent corrosion",
        "Annual geyser servicing & maintenance",
        "Compliance certification (COC) on all installations",
      ]}
      benefits={[
        {
          title: "Correct Sizing, First Time",
          description:
            "We assess your household or business hot water demand before recommending a geyser size, avoiding the common mistake of an undersized or oversized unit.",
          icon: CheckCircle,
        },
        {
          title: "Kwikot & Trusted Brands",
          description:
            "We install and service Kwikot, Geyserwise, and Suntech units, giving you quality equipment backed by manufacturer warranties and reliable local support.",
          icon: ShieldCheck,
        },
        {
          title: "Solar & Load-Shedding Solutions",
          description:
            "Solar geysers with electric backup and timer installations help you manage hot water reliably even during load shedding, while reducing electricity costs.",
          icon: Sun,
        },
        {
          title: "Same-Day Installation",
          description:
            "Where stock and site conditions allow, we can remove your old geyser and install a new one on the same day — minimizing time without hot water.",
          icon: Timer,
        },
        {
          title: "Full Compliance Certification",
          description:
            "Every geyser installation receives a Certificate of Compliance, protecting your insurance validity and meeting South African building regulations.",
          icon: Wrench,
        },
        {
          title: "Repairs, Not Just Replacements",
          description:
            "Not every geyser problem needs a full replacement. We diagnose the actual fault and recommend the most cost-effective solution — repair or replace.",
          icon: Flame,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Site Assessment & Sizing",
          description:
            "We assess your hot water needs, existing plumbing and electrical setup, and recommend the right geyser type and size for your property.",
        },
        {
          step: 2,
          title: "Quote & Brand Selection",
          description:
            "Receive a transparent, itemized quote covering the unit, installation, and compliance certification, with your choice of trusted brands.",
        },
        {
          step: 3,
          title: "Removal & Installation",
          description:
            "We safely remove your old geyser (if applicable) and install the new unit with proper mounting, plumbing, electrical connections, and safety fittings.",
        },
        {
          step: 4,
          title: "Testing & Certification",
          description:
            "We test thermostat settings, check for leaks, and issue your Certificate of Compliance — your geyser is ready to use immediately.",
        },
      ]}
      relatedServices={[
        { title: "Plumbing Services", href: "/plumbing-services", icon: Wrench },
        { title: "Emergency Plumber & Burst Pipes", href: "/emergency-plumber-burst-pipes", icon: Flame },
        { title: "Blocked Drains Unblocking", href: "/blocked-drains-unblocking", icon: CheckCircle },
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
            <h2 className="mb-8 text-3xl font-bold">Choosing the Right Geyser for Your Property</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The right geyser depends on household size, hot water usage patterns, budget, and whether
                you're looking to reduce electricity costs. We install and service every major geyser type,
                helping you choose the option that fits your needs and your property.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Kwikot Geyser Installation</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Kwikot is one of South Africa's most trusted geyser brands, known for durability and
                    strong warranty support. We are experienced Kwikot installers, handling everything from
                    standard replacements to full new installations with proper sizing and compliance
                    certification.
                  </p>
                  <img
                    src="/kwikot_geyser_installation.jfif"
                    alt="Kwikot geyser installation by ZECO Construction in Gauteng"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Solar Geyser Installation</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Solar geysers with electric backup reduce your electricity bill and keep hot water
                    available even during load shedding. We handle full solar geyser installations in
                    Pretoria and across Gauteng, from panel positioning to backup element wiring.
                  </p>
                  <img
                    src="/solar_geyser_installation_pretoria.jfif"
                    alt="Solar geyser installation in Pretoria, Gauteng"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Signs You Need a New Geyser</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Watch for lukewarm or cold water, water taking longer than usual to heat, unusual rumbling or
                hissing noises, water leaking from the geyser or overflow pipe, discolored or rusty water,
                and tripped electricity breakers. Any of these signs mean it's time for an inspection — often
                a repair can extend your geyser's life by years, but sometimes replacement is the more
                cost-effective option. We'll always recommend based on what's actually best for your budget.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Geyser Repairs & Annual Servicing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Regular servicing prevents failures and extends geyser lifespan. Our repair and maintenance
                services include element replacements, thermostat adjustments, valve replacements, leak
                repairs, timer installation for load-shedding schedules, and anode replacements to prevent
                internal corrosion. We service all geyser brands and types, not only the ones we install.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
