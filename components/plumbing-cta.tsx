"use client"

import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"

const ADS_ID = "AW-18419053482"
const CALL_CONVERSION_LABEL = "-zq2COrx-PocEKrn8c5E"
const WHATSAPP_CONVERSION_LABEL = "tgRECL_Z-_ocEKrn8c5E"

const CALL_HREF = "tel:" + PHONE_TEL
const WHATSAPP_TEXT = "Hi ZECO, I need a plumber. My plumbing problem is:"
const WHATSAPP_HREF = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_TEXT)

function fireConversion(label: string, callback?: () => void) {
  const gtag = (typeof window !== "undefined" ? (window as any).gtag : undefined) as
    | ((...args: any[]) => void)
    | undefined

  if (!gtag || label.startsWith("REPLACE_WITH")) {
    callback?.()
    return
  }

  gtag("event", "conversion", {
    send_to: ADS_ID + "/" + label,
    event_callback: callback,
  })

  window.setTimeout(() => callback?.(), 700)
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
  const combinedClassName =
    "inline-flex items-center justify-center gap-3 rounded-xl bg-secondary font-bold text-secondary-foreground shadow-lg shadow-secondary/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary " +
    sizeClasses[size] +
    " " +
    className

  return (
    
      href={CALL_HREF}
      onClick={() => fireConversion(CALL_CONVERSION_LABEL)}
      data-conversion="phone-call"
      aria-label={"Call ZECO Construction on " + PHONE_DISPLAY}
      className={combinedClassName}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label ?? "Call " + PHONE_DISPLAY}</span>
    </a>
  )
}

export function WhatsAppCta(props: { size?: Size; label?: string; className?: string }) {
  const size = props.size ?? "lg"
  const label = props.label ?? "WhatsApp us"
  const className = props.className ?? ""
  const combinedClassName =
    "inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white " +
    sizeClasses[size] +
    " " +
    className

  return (
    
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => fireConversion(WHATSAPP_CONVERSION_LABEL)}
      data-conversion="whatsapp-click"
      aria-label="Chat to ZECO Construction on WhatsApp"
      className={combinedClassName}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
      <CallButton size="bar" label={"Call " + PHONE_DISPLAY} className="col-span-3" />
      <WhatsAppCta size="bar" label="WhatsApp" className="col-span-2" />
    </div>
  )
}
