"use client"

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

export function WhatsAppButton({
  phoneNumber = "27748509727",
  message = "Hi ZECO Construction, I'd like to get a quote for a project.",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ZECO Construction on WhatsApp"
      // bottom-24 on mobile clears the sticky Call/WhatsApp bar added for
      // /plumbing-services; md:bottom-6 restores the original position on
      // desktop, where there is no sticky bar.
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110 hover:bg-[#25D366]/90 md:bottom-6 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
    </a>
  )
}
