// File path: app/plumbing-services/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/plumbing-services

import type { Metadata } from "next"
import Link from "next/link"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Droplets, Wrench, Clock, ShieldCheck, TrendingUp, CheckCircle, AlertTriangle, Flame, Waves } from "lucide-react"

export const metadata: Metadata = {
  // Trimmed to ~58 chars so Google doesn't truncate it in search results
  title: "Plumbing Services Gauteng | Pretoria & Johannesburg",
  description:
    "Professional plumbing services in Gauteng. Installations, repairs, leak detection, burst pipes, drain cleaning, geyser installation & repairs, bathroom & kitchen plumbing for residential & commercial properties in Pretoria, Johannesburg & Midrand. Licensed plumbers, 24/7 emergency service, compliance guaranteed. Same-day quotes.",
  keywords: "plumbers Gauteng, plumbing services Pretoria, emergency plumber Johannesburg, geyser installation Midrand, burst pipes, leak detection, drain cleaning, bathroom plumbing, kitchen plumbing, plumbing repairs",
  openGraph: {
    title: "Plumbing Services Gauteng | ZECO Construction",
    description:
      "Expert plumbing installations, repairs, and maintenance for homes and businesses. Licensed plumbers, modern equipment, compliance guaranteed. 24/7 emergency service. Serving Pretoria, Johannesburg & Gauteng.",
    images: [
      {
        url: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
        width: 1200,
        height: 630,
        alt: "Professional plumbing services in Gauteng - ZECO Construction",
      },
    ],
  },
}

export default function PlumbingServicesPage() {
  return (
    <ServicePageTemplate
      title="Plumbing Services"
      description="Keep your property's plumbing systems functioning flawlessly with expert plumbing services from licensed, experienced professionals. From routine maintenance and minor repairs to complex installations and emergency burst pipe responses, we deliver reliable plumbing solutions that ensure water efficiency, prevent costly damage, and maintain compliance with South African plumbing standards. With over 10 years of experience, modern diagnostic equipment, and commitment to quality workmanship, our plumbing team serves residential, commercial, and industrial clients across Gauteng with prompt, professional service you can trust."
      icon={Droplets}
      heroImage="/professional-plumber-working-on-pipes-in-a-gauteng-.jpg"
      priceRange="Competitive Rates"
      responseTime="Same-day / 24/7 Emergency"
      features={[
        "Complete plumbing installations (new builds & renovations)",
        "Plumbing repairs & maintenance",
        "Emergency plumbing services (24/7)",
        "Leak detection & repairs",
        "Burst pipe repairs & replacements",
        "Drain cleaning & unblocking",
        "Geyser installation & replacements",
        "Geyser repairs & maintenance",
        "Bathroom plumbing (toilets, basins, showers, baths)",
        "Kitchen plumbing (sinks, dishwashers, taps)",
        "Water pressure optimization",
        "Pipe repairs, replacements & rerouting",
        "Water meter installations",
        "Backflow prevention & testing",
        "Compliance certificates (COC)",
      ]}
      benefits={[
        {
          title: "Licensed & Experienced Plumbers",
          description:
            "Our team comprises licensed plumbers with 10+ years of experience, extensive technical knowledge, and proven expertise handling residential, commercial, and industrial plumbing challenges of all complexities.",
          icon: ShieldCheck,
        },
        {
          title: "Modern Diagnostic Equipment",
          description:
            "We utilize advanced leak detection technology, CCTV drain inspection cameras, pressure testing equipment, and electronic locating tools for accurate diagnosis and efficient repairs without unnecessary excavation.",
          icon: Wrench,
        },
        {
          title: "Compliance & Code Standards",
          description:
            "All plumbing work meets SANS 10252 standards and National Building Regulations. We provide Certificates of Compliance (COC) for installations, ensuring legal compliance and insurance validity.",
          icon: CheckCircle,
        },
        {
          title: "24/7 Emergency Response",
          description:
            "Burst pipes, major leaks, and plumbing emergencies don't wait for business hours. Our emergency plumbing service provides rapid response when you need urgent assistance to minimize water damage.",
          icon: Clock,
        },
        {
          title: "Quality Materials & Warranties",
          description:
            "We install only premium plumbing materials from reputable suppliers—durable pipes, reliable fixtures, quality fittings—backed by manufacturer warranties and our workmanship guarantee for lasting peace of mind.",
          icon: TrendingUp,
        },
        {
          title: "Transparent Pricing & Quotations",
          description:
            "Honest, itemized quotes with no hidden fees or surprise charges. You'll understand exactly what work is required, what it costs, and what you're paying for before any work commences.",
          icon: Droplets,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Problem Assessment & Diagnosis",
          description: "Our plumber inspects the issue thoroughly, uses diagnostic equipment where needed, explains the problem clearly, identifies underlying causes, and discusses potential solutions with you.",
        },
        {
          step: 2,
          title: "Transparent Quotation & Approval",
          description: "Receive detailed quotation covering materials, labor, and any additional work required. We explain options, recommend best solutions for your situation and budget, and proceed only with your approval.",
        },
        {
          step: 3,
          title: "Professional Repair or Installation",
          description: "Expert plumbers complete work efficiently using quality materials, proper techniques, and compliance with standards. We minimize disruption, protect your property, and maintain clean work practices throughout.",
        },
        {
          step: 4,
          title: "Testing, Certification & Cleanup",
          description: "Comprehensive system testing for leaks, pressure, and functionality. Issue Certificates of Compliance where required. Thorough cleanup leaving your property spotless and plumbing fully operational.",
        },
      ]}
      relatedServices={[
        {
          title: "Waterproofing Services",
          href: "/waterproofing-services",
          icon: Droplets,
        },
        {
          title: "Property Maintenance",
          href: "/property-maintenance",
          icon: Wrench,
        },
        {
          title: "Kitchen & Bathroom Cupboards",
          href: "/kitchen-bathroom-cupboards",
          icon: CheckCircle,
        },
        {
          title: "Building Renovations",
          href: "/building-construction-renovations",
          icon: ShieldCheck,
        },
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
      {/* Quick Links to Dedicated Service Pages — helps both SEO internal linking and Ads Quality Score */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Looking for a Specific Plumbing Service?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For the fastest help with these common plumbing needs, visit our dedicated service pages below
              for more detail and to get a quote directly.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/emergency-plumber-burst-pipes"
                className="p-6 rounded-xl bg-card border border-border hover:border-secondary transition-colors block"
              >
                <AlertTriangle className="h-8 w-8 mb-3 text-secondary" />
                <h3 className="font-bold text-lg mb-2">Emergency Plumber & Burst Pipes</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 emergency response for burst pipes and major leaks.
                </p>
              </Link>
              <Link
                href="/geyser-installation-repairs"
                className="p-6 rounded-xl bg-card border border-border hover:border-secondary transition-colors block"
              >
                <Flame className="h-8 w-8 mb-3 text-secondary" />
                <h3 className="font-bold text-lg mb-2">Geyser Installation & Repairs</h3>
                <p className="text-sm text-muted-foreground">
                  Electric, solar & Kwikot geyser installation and repairs.
                </p>
              </Link>
              <Link
                href="/blocked-drains-unblocking"
                className="p-6 rounded-xl bg-card border border-border hover:border-secondary transition-colors block"
              >
                <Waves className="h-8 w-8 mb-3 text-secondary" />
                <h3 className="font-bold text-lg mb-2">Blocked Drains Unblocking</h3>
                <p className="text-sm text-muted-foreground">
                  Fast drain cleaning with high-pressure jetting & CCTV inspection.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Why Choose ZECO Construction for Plumbing Services?</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of plumbing experience</strong> across Gauteng, ZECO Construction delivers reliable, professional plumbing services for residential, commercial, and industrial clients. Based in <strong>Gauteng</strong>, our licensed plumbers have completed <strong>thousands of plumbing installations, repairs, and emergency callouts</strong> throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas. We combine technical expertise, modern equipment, and customer-focused service to solve plumbing challenges efficiently and effectively.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Plumbing Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need routine maintenance, emergency repairs, new installations, or complete plumbing system upgrades, our experienced team handles all aspects of residential and commercial plumbing:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Plumbing Installations</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete plumbing for new builds, additions, and renovations including water supply systems, drainage networks, hot water installations, and fixture installations with full compliance certification.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Repairs & Maintenance</h4>
                  <p className="text-sm text-muted-foreground">
                    Dripping taps, leaking pipes, toilet repairs, blocked drains, water pressure issues, valve replacements, and preventive maintenance to keep plumbing systems functioning optimally.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Emergency Plumbing</h4>
                  <p className="text-sm text-muted-foreground">
                    24/7 emergency response for burst pipes, major leaks, blocked sewers, geyser failures, and other urgent plumbing disasters requiring immediate attention to minimize damage.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Geyser Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Geyser installations (electric & solar), repairs, thermostat replacements, element replacements, valve servicing, timer installations, and maintenance for all geyser brands and types.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Emergency Plumbing Services - 24/7 Response</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Plumbing emergencies cause stress, inconvenience, and potentially significant water damage if not addressed immediately. Our 24/7 emergency plumbing service provides rapid response when you need urgent assistance. Common plumbing emergencies include burst pipes causing flooding, major leaks damaging property, blocked sewers backing up, geysers bursting and flooding ceilings, no water supply issues, and frozen or cracked pipes in winter. We respond quickly with equipped vehicles, diagnose problems efficiently, implement immediate solutions to stop damage, and perform permanent repairs. Our emergency service operates after hours, weekends, and public holidays—because plumbing emergencies don't respect business hours.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Leak Detection & Repairs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Water leaks waste water, increase utility bills, cause structural damage, promote mold growth, and indicate underlying plumbing problems. We specialize in detecting and repairing leaks using advanced technology and proven methods. Our leak detection services utilize electronic acoustic leak detection equipment, thermal imaging cameras for hidden leaks, pressure testing to isolate leak zones, CCTV drain inspection for underground leaks, and moisture meters for wall and floor leaks. We locate leaks accurately without unnecessary excavation or wall demolition. Once detected, we repair leaks using appropriate methods—pipe repairs, joint resealing, valve replacements, tap repairs, or complete pipe replacement where corrosion or damage is extensive. Early leak detection prevents costly water damage and reduces water waste.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Bathroom & Kitchen Plumbing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bathroom plumbing encompasses toilet installation and repairs, basin and pedestal installations, tap installations, shower and bath installations, and full bathroom renovations with complete replumbing. Kitchen plumbing includes sink installations, tap installations, dishwasher connections, waste disposal units, and water filter systems. We coordinate with tilers, cupboard installers, and electricians for seamless bathroom and kitchen renovation projects.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Water Pressure & Pipe Systems</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We diagnose and resolve water pressure issues caused by municipal supply variations, clogged pipes, undersized pipes, and faulty pressure valves. Our pipe services cover repairs, replacements, and rerouting using modern materials including copper, PEX, HDPE, and stainless steel — all pipe work receives pressure testing and compliance certification.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial & Industrial Plumbing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Commercial and industrial properties have complex plumbing requirements, higher usage demands, and compliance obligations. We serve offices, retail stores, restaurants, schools, medical facilities, factories, and apartment complexes with commercial-grade fixtures, grease traps, backflow prevention devices, water meter installations, and preventive maintenance contracts scheduled around your operating hours.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Plumbing Compliance & Certification</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Plumbing work in South Africa must comply with SANS 10252 standards and National Building Regulations. We ensure all plumbing work meets required standards and provide Certificates of Compliance (COC) for new installations, alterations, geyser installations, and property transfers. Certificates of Compliance are legally required, validate insurance claims, and demonstrate work quality and safety.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Transparent Pricing & Quotations</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide honest, detailed quotations with no hidden fees or surprise charges. Quotes itemize materials, labor, additional work required, and call-out fees for emergency service. For emergency work requiring immediate action, we provide estimated costs upfront and confirm final charges after completion. Transparent pricing builds trust and ensures you receive fair value for quality plumbing services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
