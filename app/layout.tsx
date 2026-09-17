import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GoogleAdsTag } from "@/components/google-ads-tag"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zecoconstruction.co.za"),
  title: {
    default: "ZECO Construction | Building, Infrastructure & Maintenance in Gauteng",
    template: "%s | ZECO Construction - Gauteng's Trusted Building Partner",
  },
  description:
    "ZECO Construction delivers comprehensive building, property maintenance, civil works, paving, security, electrical, plumbing, solar, and renovation services in Gauteng, Pretoria & Johannesburg. One trusted partner from foundation to finish.",
  keywords:
    "construction Gauteng, building contractor Pretoria, property maintenance Johannesburg, civil works South Africa, paving contractor Gauteng, electrical services Pretoria, plumbing Johannesburg, solar installation Gauteng, renovations Sandton, security systems Midrand, roofing Centurion, waterproofing Gauteng, ZECO Construction",
  authors: [{ name: "ZECO Construction", url: "https://www.zecoconstruction.co.za" }],
  creator: "ZECO Construction",
  publisher: "ZECO Construction",
  applicationName: "ZECO Construction",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Enhanced favicon and icons for Google Search results
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#f26a1b" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.zecoconstruction.co.za",
    siteName: "ZECO Construction",
    title: "ZECO Construction | Building, Infrastructure & Maintenance in Gauteng",
    description:
      "Gauteng's trusted building partner for construction, maintenance, civil works, security, and energy solutions. Serving Pretoria, Johannesburg & surrounds.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZECO Construction - Building & Infrastructure Solutions in Gauteng",
      },
      {
        url: "/logo-square.png",
        width: 512,
        height: 512,
        alt: "ZECO Construction Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zecoconstruction",
    creator: "@zecoconstruction",
    title: "ZECO Construction | Building & Infrastructure Gauteng",
    description:
      "Integrated construction, infrastructure, maintenance & security solutions in Gauteng. Serving Pretoria, Johannesburg & surrounds.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.zecoconstruction.co.za",
  },
  // Verification tags (add your verification codes when ready)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Construction & Infrastructure",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
    "geo.position": "-26.1076;28.0567", // Gauteng coordinates
    "ICBM": "-26.1076, 28.0567",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        {/* Additional meta tags for better indexing */}
        <meta name="theme-color" content="#f26a1b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZECO Construction",
              url: "https://www.zecoconstruction.co.za",
              logo: "https://www.zecoconstruction.co.za/logo.png",
              image: "https://www.zecoconstruction.co.za/og-image.jpg",
              description: "Comprehensive construction, infrastructure, and maintenance solutions in Gauteng",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              areaServed: ["Gauteng", "Pretoria", "Johannesburg", "Sandton", "Midrand", "Centurion"],
              sameAs: [
                "https://www.facebook.com/zecoconstruction",
                "https://www.instagram.com/zecoconstruction",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-74-850-9727",
                contactType: "Customer Service",
                areaServed: "ZA",
                availableLanguage: ["en"],
              },
            }),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.zecoconstruction.co.za",
              name: "ZECO Construction",
              image: "https://www.zecoconstruction.co.za/logo.png",
              url: "https://www.zecoconstruction.co.za",
              telephone: "+27-74-850-9727",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/zecoconstruction",
                "https://www.instagram.com/zecoconstruction",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <GoogleAdsTag />
        <Analytics />
      </body>
    </html>
  )
}
