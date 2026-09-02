"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Phone,
  ChevronDown,
  ChevronRight,
  X,
  MapPin,
  Mail,
  Building2,
  Wrench,
  Droplets,
  Zap,
  Home,
  Shield,
  Hammer,
  PaintBucket,
  Construction,
  Car,
  Facebook,
  Instagram,
  AlertTriangle,
  Flame,
  Waves,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { PinterestIcon } from "@/components/icons/pinterest-icon"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Building Construction & Renovations",
    href: "/building-construction-renovations",
    description: "New builds, renovations, refurbishments & fit-outs",
    icon: Building2,
  },
  {
    title: "Property Maintenance",
    href: "/property-maintenance",
    description: "Residential & commercial maintenance programs",
    icon: Wrench,
  },
  {
    title: "Plumbing Services",
    href: "/plumbing-services",
    description: "Installations, repairs, leak detection & geysers",
    icon: Droplets,
  },
  {
    title: "Electrical Repairs & Installations",
    href: "/electrical-services",
    description: "Installations, rewiring, fault finding & repairs",
    icon: Zap,
  },
  {
    title: "Roofing & Roof Leak Repairs",
    href: "/roofing-roof-leak-repairs",
    description: "Leak repairs, waterproofing & gutter installation",
    icon: Home,
  },
  {
    title: "Waterproofing Services",
    href: "/waterproofing-services",
    description: "Roof, balcony, foundation & damp proofing",
    icon: Shield,
  },
  {
    title: "Carpentry Services",
    href: "/carpentry-services",
    description: "Timber structures, decking, pergolas & cabinetry",
    icon: Hammer,
  },
  {
    title: "Kitchen & Bathroom Cupboards",
    href: "/kitchen-bathroom-cupboards",
    description: "Custom cupboards, vanities & built-in storage",
    icon: Construction,
  },
  {
    title: "Painting, Tiling & Finishing",
    href: "/painting-tiling-finishing",
    description: "Interior/exterior painting & floor/wall tiling",
    icon: PaintBucket,
  },
  {
    title: "Paving, Driveways & Surfacing",
    href: "/paving-driveways-surfacing",
    description: "Brick paving, tar paving & driveway construction",
    icon: Car,
  },
  {
    title: "Emergency Plumber & Burst Pipes",
    href: "/emergency-plumber-burst-pipes",
    description: "24/7 emergency response for burst pipes & leaks",
    icon: AlertTriangle,
  },
  {
    title: "Geyser Installation & Repairs",
    href: "/geyser-installation-repairs",
    description: "Electric, solar & Kwikot geyser installs & repairs",
    icon: Flame,
  },
  {
    title: "Blocked Drains Unblocking",
    href: "/blocked-drains-unblocking",
    description: "Fast drain cleaning with jetting & CCTV inspection",
    icon: Waves,
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-lg shadow-sm supports-[backdrop-filter]:bg-background/80"
          : "border-transparent bg-background",
      )}
    >
      {/* Top Bar with Contact Info and Social Links */}
      <div className="hidden border-b border-border/50 bg-primary text-primary-foreground lg:block">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+27748509727" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              +27 74 850 9727
            </a>
            <a
              href="https://wa.me/27748509727"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp Us
            </a>
            <a
              href="mailto:info@zecoconstruction.co.za"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              info@zecoconstruction.co.za
            </a>
            <a
              href="https://www.google.com/maps?q=ZECO+Construction+Gauteng+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              Gauteng, South Africa
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/70">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61592716047862"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/zecoconstruction?igsh=bnFldWhiZ2FpeGph"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://za.pinterest.com/zecoconstruction/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/logo-icon.png"
              alt="ZECO Construction Logo"
              width={44}
              height={44}
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-accent border-2 border-background"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary leading-tight tracking-tight">
              ZECO <span className="text-accent">Construction</span>
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">Building Excellence in Gauteng</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={cn(
                  "ml-1 h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-[800px] rounded-lg border border-gray-200 bg-white shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="grid grid-cols-2 gap-1 p-4 max-h-[70vh] overflow-y-auto">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="group block select-none rounded-md p-3 transition-all hover:bg-gray-100 hover:shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <service.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold leading-tight mb-1 text-gray-900 group-hover:text-primary transition-colors">
                            {service.title}
                          </div>
                          <p className="text-xs leading-snug text-gray-600 line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 mt-2 border-t border-gray-200 pt-3">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-md bg-primary/5 p-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      View All 13 Services <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/service-areas"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary"
          >
            Service Areas
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 sm:inline-flex"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Get Free Quote
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-md p-0 border-l-0 overflow-hidden [&>button]:hidden">
              {/* Mobile Menu Header */}
              <div className="bg-primary p-6 text-primary-foreground">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden bg-white">
                      <Image
                        src="/logo-icon.png"
                        alt="ZECO Construction"
                        width={40}
                        height={40}
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm">ZECO Construction</p>
                      <p className="text-xs text-white/70">Building Excellence</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-2 text-sm text-white/90">
                  <a href="tel:+27748509727" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                    +27 74 850 9727
                  </a>
                  <a
                    href="https://wa.me/27748509727"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp: +27 74 850 9727
                  </a>
                  <a href="mailto:info@zecoconstruction.co.za" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                    info@zecoconstruction.co.za
                  </a>
                  <a
                    href="https://www.google.com/maps?q=ZECO+Construction+Gauteng+South+Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Gauteng, South Africa
                  </a>
                </div>

                {/* Social Links in Mobile */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/20">
                  <a
                    href="https://www.facebook.com/profile.php?id=61592716047862"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/zecoconstruction?igsh=bnFldWhiZ2FpeGph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://za.pinterest.com/zecoconstruction/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Pinterest"
                  >
                    <PinterestIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Mobile Menu Navigation */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-1">
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Home className="h-5 w-5" />
                    </div>
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    About Us
                  </Link>

                  {/* Services Accordion */}
                  <div className="rounded-xl overflow-hidden">
                    <button
                      className="flex w-full items-center justify-between gap-3 p-4 text-lg font-medium hover:bg-muted transition-colors"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-expanded={mobileServicesOpen}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                          <Wrench className="h-5 w-5" />
                        </div>
                        Services
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-muted-foreground transition-transform duration-300",
                          mobileServicesOpen && "rotate-180",
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                        {services.slice(0, 8).map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-3 text-center text-xs font-medium hover:bg-secondary/10 hover:text-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <service.icon className="h-5 w-5 text-secondary" />
                            <span className="line-clamp-2">{service.title.split(" ").slice(0, 2).join(" ")}</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-secondary/30 p-3 text-sm font-medium text-secondary hover:bg-secondary/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        View All 13 Services
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/service-areas"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    Service Areas
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Mail className="h-5 w-5" />
                    </div>
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Mobile Menu Footer CTA */}
              <div className="border-t border-border bg-muted/50 p-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Free consultations • Licensed & Insured • Gauteng
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
