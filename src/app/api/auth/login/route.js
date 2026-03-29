import { NextResponse } from "next/server";
import { generateToken } from "@/lib/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Simple authentication - in production, use hashed passwords
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@voiceofgospel.com";
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "123456789";

    console.log("Login attempt:", { email, hasPassword: !!password });
    console.log("Expected credentials:", {
      ADMIN_EMAIL,
      hasAdminPassword: !!ADMIN_PASSWORD,
    });

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = generateToken({ email, role: "admin" });

      return NextResponse.json({
        success: true,
        token,
        user: { email, role: "admin" },
      });
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 },
    );
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
