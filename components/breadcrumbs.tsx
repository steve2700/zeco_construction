import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}
interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  variant?: "default" | "onDark"
}
export function Breadcrumbs({ items, variant = "default" }: BreadcrumbsProps) {
  const onDark = variant === "onDark"

  const linkClass = cn(
    "flex items-center transition-colors",
    onDark ? "text-white/70 hover:text-accent" : "text-muted-foreground hover:text-secondary",
  )
  const chevronClass = cn("h-4 w-4", onDark ? "text-white/40" : "text-muted-foreground")
  const currentClass = cn("font-medium", onDark ? "text-white" : "text-foreground")

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" className={linkClass} itemProp="item">
            <Home className="h-4 w-4" />
            <span className="sr-only" itemProp="name">
              Home
            </span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className={chevronClass} />
            {item.href ? (
              <Link href={item.href} className={linkClass} itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className={currentClass} itemProp="name">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
