import { updateSession } from "@/lib/supabase/middleware"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for an image file
  const isImage =
    /\.(jpg|jpeg|png|webp|avif|svg|gif|ico)$/i.test(pathname) ||
    pathname.startsWith("/_next/image") ||
    pathname.startsWith("/_next/static") ||
    pathname === "/placeholder.svg"

  // For image requests, add caching headers
  if (isImage) {
    const response = await updateSession(request)
    const oneYearFromNow = new Date(Date.now() + 31536000000).toUTCString()

    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
    response.headers.set("Expires", oneYearFromNow)

    return response
  }

  // For non-image requests, proceed with normal auth flow
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths including images to add headers
     */
    "/((?!api|_next/webpack).*)",
  ],
}
