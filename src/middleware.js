import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export function middleware(request) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Allow login page without authentication
    if (request.nextUrl.pathname === "/admin/login") {
      return NextResponse.next();
    }

    // Check for authentication token
    const token = request.cookies.get("adminToken")?.value;
    
    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Verify the token
    const decoded = verifyToken(token);
    if (!decoded) {
      // Redirect to login if token is invalid
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Token is valid, allow access
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
