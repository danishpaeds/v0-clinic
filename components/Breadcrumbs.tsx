"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show breadcrumbs on home page
  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

  // Build breadcrumb trail
  let currentPath = ""
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`

    // Format label (capitalize and replace hyphens with spaces)
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    breadcrumbs.push({
      label,
      href: currentPath,
    })
  })

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `https://drvrushni.com${crumb.href}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav aria-label="Breadcrumb" className="bg-gradient-to-r from-purple-50 to-orange-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1

              return (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index === 0 ? (
                    <Link
                      href={crumb.href}
                      className="flex items-center gap-1 text-gray-600 hover:text-[#47145a] transition-colors"
                    >
                      <Home className="w-4 h-4" />
                      <span className="hidden sm:inline">{crumb.label}</span>
                    </Link>
                  ) : (
                    <>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                      {isLast ? (
                        <span className="text-[#47145a] font-semibold">{crumb.label}</span>
                      ) : (
                        <Link href={crumb.href} className="text-gray-600 hover:text-[#47145a] transition-colors">
                          {crumb.label}
                        </Link>
                      )}
                    </>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
