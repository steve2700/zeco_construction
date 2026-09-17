"use client"

import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

/**
 * Central place for the plumbing landing page conversion actions.
 * Labels below are the real "Phone call click" and "WhatsApp click"
 * conversion actions created in Google Ads > Conversions.
 */
const ADS_ID = "AW-18419053482"
const CALL_CONVERSION_LABEL = "-zq2COrx-PocEKrn8c5E"
const WHATSAPP_CONVERSION_LABEL = "tgRECL_Z-_ocEKrn8c5E"

export const PHONE_DISPLAY = "074 850 9727"
export const PHONE_TEL = "+27748509727"
export const WHATSAPP_NUMBER = "27748509727"

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

type Size = "lg" | "md" | "bar"

const sizeClasses: Record<Size, string> = {
  lg: "px-7 py-4 text-base md:text-lg",
  md: "px-5 py-3 text-sm md:text-base",
  bar: "px-4 py-4 text-base",
}

export function CallButton({
  size = "lg",
  label,
  className = "",
}: {
  size?: Size
  label?: string
  className?: string
}) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      onClick={() => fireConversion(CALL_CONVERSION_LABEL)}
      data-conversion="phone-call"
      aria-label={`Call ZECO Construction on ${PHONE_DISPLAY}`}
      className={`inline-flex items-center justify-center gap-3 rounded-xl bg-secondary font-bold text-secondary-foreground shadow-lg shadow-secondary/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${sizeClasses[size]} ${className}`}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label ?? `Call ${PHONE_DISPLAY}`}</span>
    </a>
  )
}

export function WhatsAppCta({
  size = "lg",
  message = "Hi ZECO, I need a plumber. My plumbing problem is:",
  label = "WhatsApp us",
  className = "",
}: {
  size?: Size
  message?: string
  label?: string
  className?: string
}) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => fireConversion(WHATSAPP_CONVERSION_LABEL)}
      data-conversion="whatsapp-click"
      aria-label="Chat to ZECO Construction on WhatsApp"
      className={`inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${sizeClasses[size]} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}

/** Mobile-only sticky action bar. Most Google Ads plumbing traffic is mobile. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
      <CallButton size="bar" label={`Call ${PHONE_DISPLAY}`} className="col-span-3" />
      <WhatsAppCta size="bar" label="WhatsApp" className="col-span-2" />
    </div>
  )
}
