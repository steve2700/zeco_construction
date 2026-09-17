import Script from "next/script"

/**
 * Google Ads global site tag.
 * Add <GoogleAdsTag /> once, inside <body> in app/layout.tsx.
 * Raw <script> tags in the App Router are not reliable, next/script is.
 */
export function GoogleAdsTag({ adsId = "AW-18419053482" }: { adsId?: string }) {
  return (
    <>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${adsId}');
        `}
      </Script>
    </>
  )
}
