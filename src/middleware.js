import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export function middleware(request) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Allow login page without authentication
    if (request.nextUrl.pathname === "/admin/login") {
      return NextResponse.next();
    }

    // Check for authentication token in cookies
    const token = request.cookies.get("adminToken")?.value;

    if (!token) {
      console.log("No token found, redirecting to login");
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      // Verify the token
      const decoded = verifyToken(token);
      if (!decoded) {
        console.log("Invalid token, redirecting to login");
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }

      console.log("Token valid, allowing access to:", request.nextUrl.pathname);
      // Token is valid, allow access
      return NextResponse.next();
    } catch (error) {
      console.error("Token verification error:", error);
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [],
};
