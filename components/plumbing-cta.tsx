"use client"

import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"

const ADS_ID = "AW-18419053482"
const CALL_CONVERSION_LABEL = "-zq2COrx-PocEKrn8c5E"
const WHATSAPP_CONVERSION_LABEL = "tgRECL_Z-_ocEKrn8c5E"

// Placeholder until the "Email click" conversion action is created in
// Google Ads > Goals > Conversions and its real label copied in here.
// fireConversion() below skips sending anything while this still starts
// with "REPLACE_WITH", so this is safe to deploy as-is

const EMAIL_CONVERSION_LABEL = "UaONCJ6Djf8cEKrn8c5E"

function fireConversion(label: string, callback?: () => void) {
  const gtag = (typeof window !== "undefined" ? (window as any).gtag : undefined) as
    | ((...args: any[]) => void)
    | undefined

  if (!gtag || label.startsWith("REPLACE_WITH")) {
    callback?.()
    return
  }

  gtag("event", "conversion", {
    send_to: `${ADS_ID}/${label}`,
    event_callback: callback,
  })

  // Don't block navigation if the tag is slow or blocked by an ad blocker.
  window.setTimeout(() => callback?.(), 700)
}

export function trackCallClick() {
  fireConversion(CALL_CONVERSION_LABEL)
}

export function trackWhatsAppClick() {
  fireConversion(WHATSAPP_CONVERSION_LABEL)
}

export function trackEmailClick() {
  fireConversion(EMAIL_CONVERSION_LABEL)
}

type Size = "lg" | "md" | "bar"

const sizeClasses: Record<Size, string> = {
  lg: "px-7 py-4 text-base md:text-lg",
  md: "px-5 py-3 text-sm md:text-base",
  bar: "px-4 py-4 text-base",
}

export function CallButton(props: { size?: Size; label?: string; className?: string }) {
  const size = props.size ?? "lg"
  const label = props.label
  const className = props.className ?? ""

  return (
      <a href={`tel:${PHONE_TEL}`}
      onClick={trackCallClick}
      data-conversion="phone-call"
      aria-label={`Call ZECO Construction on ${PHONE_DISPLAY}`}
      className={`inline-flex items-center justify-center gap-3 rounded-xl bg-secondary font-bold text-secondary-foreground shadow-lg shadow-secondary/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${sizeClasses[size]} ${className}`}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label ?? `Call ${PHONE_DISPLAY}`}</span>
    </a>
  )
}

export function WhatsAppCta(props: {
  size?: Size
  message?: string
  label?: string
  className?: string
}) {
  const size = props.size ?? "lg"
  const message = props.message ?? "Hi ZECO, I need a plumber. My plumbing problem is:"
  const label = props.label ?? "WhatsApp us"
  const className = props.className ?? ""
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
      <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      data-conversion="whatsapp-click"
      aria-label="Chat to ZECO Construction on WhatsApp"
      className={`inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${sizeClasses[size]} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
      <CallButton size="bar" label={`Call ${PHONE_DISPLAY}`} className="col-span-3" />
      <WhatsAppCta size="bar" label="WhatsApp" className="col-span-2" />
    </div>
  )
}
